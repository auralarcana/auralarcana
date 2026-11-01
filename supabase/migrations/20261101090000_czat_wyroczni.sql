-- Aural Arcana: konta, Arcana Journal i czat Wyroczni (Claude).
-- Jedna migracja, bo to pierwszy schemat projektu. Kolejne zmiany dokładaj jako nowe pliki.

-- ---------------------------------------------------------------------------
-- Profile: jeden wiersz na użytkownika auth.users. Flaga subskrypcji tutaj.
-- is_subscriber ustawia właścicielka ręcznie (SQL editor) albo w przyszłości webhook Polar.
-- ---------------------------------------------------------------------------
create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text,
  is_subscriber boolean not null default false,
  -- NULL = bez terminu; data = subskrypcja ważna do tego momentu
  subscriber_until timestamptz,
  created_at timestamptz not null default now()
);

comment on table public.profiles is 'Profil użytkownika: status subskrypcji Inner Circle (Arcana Journal).';

-- Profil zakładany automatycznie po rejestracji.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email)
  on conflict (id) do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------------------------------------------------------------------------
-- Arcana Journal: zapisane czytania użytkownika.
-- cards: [{ "slug", "name", "reversed", "position" }]
-- ---------------------------------------------------------------------------
create table public.journal_entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  created_at timestamptz not null default now(),
  lang text not null default 'en' check (lang in ('en', 'pl')),
  spread_slug text,
  spread_name text,
  question text,
  cards jsonb not null default '[]'::jsonb,
  note text
);

create index journal_entries_user_created_idx
  on public.journal_entries (user_id, created_at desc);

comment on table public.journal_entries is 'Arcana Journal: zapisane rozkłady, pytania i notatki.';

-- ---------------------------------------------------------------------------
-- Log wywołań Wyroczni: każde wywołanie Claude z czasem, użytkownikiem i tokenami.
-- Z tej tabeli liczony jest też miesięczny limit wiadomości.
-- ---------------------------------------------------------------------------
create table public.reader_calls (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  created_at timestamptz not null default now(),
  lang text,
  model text,
  input_tokens integer not null default 0,
  output_tokens integer not null default 0,
  ok boolean not null default true,
  error text
);

create index reader_calls_user_created_idx
  on public.reader_calls (user_id, created_at desc);

comment on table public.reader_calls is 'Log wywołań czatu Wyroczni (Claude): czas, użytkownik, tokeny, błędy.';

-- ---------------------------------------------------------------------------
-- RLS: użytkownik widzi tylko swoje dane. Zapisy do profiles i reader_calls
-- robi wyłącznie Edge Function kluczem service_role (omija RLS).
-- ---------------------------------------------------------------------------
alter table public.profiles enable row level security;
alter table public.journal_entries enable row level security;
alter table public.reader_calls enable row level security;

create policy "profil: odczyt własny"
  on public.profiles for select
  to authenticated
  using (id = (select auth.uid()));

create policy "dziennik: odczyt własny"
  on public.journal_entries for select
  to authenticated
  using (user_id = (select auth.uid()));

create policy "dziennik: zapis własny"
  on public.journal_entries for insert
  to authenticated
  with check (user_id = (select auth.uid()));

create policy "dziennik: edycja własna"
  on public.journal_entries for update
  to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

create policy "dziennik: usuwanie własne"
  on public.journal_entries for delete
  to authenticated
  using (user_id = (select auth.uid()));

create policy "log: odczyt własny"
  on public.reader_calls for select
  to authenticated
  using (user_id = (select auth.uid()));

-- ---------------------------------------------------------------------------
-- Jedno źródło prawdy o dostępie: czy subskrybent, ile wiadomości zużyto
-- w bieżącym miesiącu (UTC), ile zostało. Limit: 100 na użytkownika na miesiąc.
-- Zalogowany użytkownik dostaje własny status (parametr ignorowany),
-- Edge Function (service_role, auth.uid() = null) podaje id użytkownika.
-- ---------------------------------------------------------------------------
create or replace function public.reader_status(p_user uuid default null)
returns jsonb
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  v_user uuid := coalesce(auth.uid(), p_user);
  v_limit integer := 100;
  v_used integer := 0;
  v_subscriber boolean := false;
  v_month_start timestamptz := date_trunc('month', now() at time zone 'utc') at time zone 'utc';
begin
  if v_user is null then
    return jsonb_build_object('subscriber', false, 'used', 0, 'limit', v_limit, 'remaining', 0);
  end if;

  select coalesce(p.is_subscriber and (p.subscriber_until is null or p.subscriber_until > now()), false)
    into v_subscriber
  from public.profiles p
  where p.id = v_user;

  select count(*)::integer into v_used
  from public.reader_calls c
  where c.user_id = v_user
    and c.ok
    and c.created_at >= v_month_start;

  return jsonb_build_object(
    'subscriber', coalesce(v_subscriber, false),
    'used', v_used,
    'limit', v_limit,
    'remaining', greatest(v_limit - v_used, 0),
    'resets_at', (v_month_start + interval '1 month')
  );
end;
$$;

revoke all on function public.reader_status(uuid) from public;
grant execute on function public.reader_status(uuid) to authenticated, service_role;
