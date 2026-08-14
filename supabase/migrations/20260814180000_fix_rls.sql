-- Re-apply RLS insert policies (applied via Supabase's migration pipeline,
-- which also reloads the PostgREST schema cache).
alter table public.newsletter_subscribers enable row level security;
alter table public.contact_messages enable row level security;

drop policy if exists "allow_anon_newsletter_insert" on public.newsletter_subscribers;
create policy "allow_anon_newsletter_insert"
  on public.newsletter_subscribers
  for insert to anon, authenticated
  with check (true);

drop policy if exists "allow_anon_contact_insert" on public.contact_messages;
create policy "allow_anon_contact_insert"
  on public.contact_messages
  for insert to anon, authenticated
  with check (true);
