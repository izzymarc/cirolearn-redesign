-- ============================================================
--  CiroLearn — Supabase schema
--  Run this once in the Supabase SQL Editor (Dashboard → SQL → New query).
-- ============================================================

create extension if not exists "uuid-ossp";

-- Newsletter subscribers
create table if not exists public.newsletter_subscribers (
  id uuid primary key default uuid_generate_v4(),
  email text not null unique,
  created_at timestamptz not null default now()
);

-- Contact form messages
create table if not exists public.contact_messages (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  created_at timestamptz not null default now()
);

-- Row Level Security (lock everything down by default)
alter table public.newsletter_subscribers enable row level security;
alter table public.contact_messages enable row level security;

-- Public forms may INSERT; reads stay restricted.
create policy "allow_anon_newsletter_insert"
  on public.newsletter_subscribers
  for insert to anon
  with check (true);

create policy "allow_anon_contact_insert"
  on public.contact_messages
  for insert to anon
  with check (true);
