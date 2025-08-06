create table tools (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  api_url text not null,
  api_method text not null default 'GET',
  auth_required boolean default false,
  category text default 'general'
);
