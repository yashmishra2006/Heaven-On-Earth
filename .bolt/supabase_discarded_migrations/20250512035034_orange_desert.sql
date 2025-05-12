/*
  # Create gallery images table

  1. New Tables
    - `gallery_images`
      - `id` (bigint, primary key)
      - `created_at` (timestamp with time zone)
      - `src` (text)
      - `alt` (text)
      - `category` (text)

  2. Security
    - Enable RLS on `gallery_images` table
    - Add policy for public read access
    - Add policy for authenticated insert
*/

create table gallery_images (
  id bigint primary key generated always as identity,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  src text not null,
  alt text not null,
  category text not null
);

-- Enable RLS
alter table gallery_images enable row level security;

-- Allow public read access
create policy "Allow public read access"
  on gallery_images
  for select
  to public
  using (true);

-- Allow authenticated users to insert
create policy "Allow authenticated insert"
  on gallery_images
  for insert
  to authenticated
  with check (true);