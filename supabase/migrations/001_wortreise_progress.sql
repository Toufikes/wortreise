create table public.wortreise_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  progress jsonb not null check (jsonb_typeof(progress) = 'object'),
  revision bigint not null default 1 check (revision > 0)
);
alter table public.wortreise_progress enable row level security;
revoke all on public.wortreise_progress from public, anon, authenticated;
grant select, insert, update on public.wortreise_progress to authenticated;
create policy own_read on public.wortreise_progress for select to authenticated using (user_id = (select auth.uid()));
create policy own_create on public.wortreise_progress for insert to authenticated with check (user_id = (select auth.uid()));
create policy own_edit on public.wortreise_progress for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
