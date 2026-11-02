-- Polar: subskrypcje opłacone zanim osoba założyła konto na stronie.
-- Webhook zapisuje tu e-mail i termin; trigger przy rejestracji przenosi to do profiles.

create table public.pending_subscriptions (
  email text primary key,
  subscriber_until timestamptz,
  polar_subscription_id text,
  updated_at timestamptz not null default now()
);

comment on table public.pending_subscriptions is 'Opłacone w Polar, ale bez konta: do nadania przy pierwszym logowaniu.';

alter table public.pending_subscriptions enable row level security;
-- Brak polityk: tabela dostępna wyłącznie dla service_role (webhook) i triggera.

-- Profil zakładany po rejestracji; jeśli e-mail ma opłaconą subskrypcję, od razu ją dostaje.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_until timestamptz;
  v_found boolean := false;
begin
  select true, p.subscriber_until into v_found, v_until
  from public.pending_subscriptions p
  where lower(p.email) = lower(new.email);

  insert into public.profiles (id, email, is_subscriber, subscriber_until)
  values (new.id, new.email, coalesce(v_found, false), v_until)
  on conflict (id) do nothing;

  if v_found then
    delete from public.pending_subscriptions where lower(email) = lower(new.email);
  end if;
  return new;
end;
$$;

-- Identyfikator subskrypcji Polar w profilu (do podglądu i debugowania).
alter table public.profiles add column if not exists polar_subscription_id text;
