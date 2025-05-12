/*
  # Fix Storage and RLS Policies

  1. Storage Changes
    - Create public storage bucket for gallery images
    - Add policies for authenticated users to upload
    - Add policies for public to view images
  
  2. Table Changes
    - Update RLS policies for gallery_images table
    - Add policy for authenticated users to manage their uploads
*/

-- Create storage bucket if it doesn't exist
insert into storage.buckets (id, name, public)
values ('gallery', 'gallery', true)
on conflict (id) do nothing;

-- Allow public access to gallery bucket
create policy "Public Access"
on storage.objects for select
using ( bucket_id = 'gallery' );

-- Allow authenticated users to upload files
create policy "Authenticated users can upload files"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'gallery'
  and owner = auth.uid()
);

-- Allow authenticated users to update and delete their own files
create policy "Users can update own files"
on storage.objects for update
to authenticated
using ( bucket_id = 'gallery' and owner = auth.uid() )
with check ( bucket_id = 'gallery' and owner = auth.uid() );

create policy "Users can delete own files"
on storage.objects for delete
to authenticated
using ( bucket_id = 'gallery' and owner = auth.uid() );

-- Update gallery_images table policies
drop policy if exists "Allow authenticated insert" on gallery_images;

create policy "Allow authenticated users to manage their images"
on gallery_images
for all
to authenticated
using (true)
with check (true);