-- Ensure the public forms can insert (idempotent re-creation of policies).
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
