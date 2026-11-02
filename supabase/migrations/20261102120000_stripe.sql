-- Płatności przez Stripe zamiast Polar: identyfikatory klienta i subskrypcji Stripe.

alter table public.profiles drop column if exists polar_subscription_id;
alter table public.profiles add column if not exists stripe_customer_id text;
alter table public.profiles add column if not exists stripe_subscription_id text;
create index if not exists profiles_stripe_customer_idx on public.profiles (stripe_customer_id);

alter table public.pending_subscriptions drop column if exists polar_subscription_id;
alter table public.pending_subscriptions add column if not exists stripe_customer_id text;
alter table public.pending_subscriptions add column if not exists stripe_subscription_id text;

comment on table public.pending_subscriptions is 'Opłacone w Stripe, ale bez konta: do nadania przy pierwszym logowaniu.';

-- Przy pierwszym logowaniu przenosimy też identyfikatory Stripe do profilu.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_pending public.pending_subscriptions%rowtype;
  v_found boolean := false;
begin
  select * into v_pending from public.pending_subscriptions p where lower(p.email) = lower(new.email);
  v_found := found;

  insert into public.profiles (id, email, is_subscriber, subscriber_until, stripe_customer_id, stripe_subscription_id)
  values (
    new.id,
    new.email,
    v_found,
    case when v_found then v_pending.subscriber_until end,
    case when v_found then v_pending.stripe_customer_id end,
    case when v_found then v_pending.stripe_subscription_id end
  )
  on conflict (id) do nothing;

  if v_found then
    delete from public.pending_subscriptions where lower(email) = lower(new.email);
  end if;
  return new;
end;
$$;
