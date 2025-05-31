/*
  # Create volunteers table for registration form

  1. New Tables
    - `volunteers`
      - `id` (uuid, primary key)
      - `created_at` (timestamptz)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `interest` (text)
      - `message` (text)

  2. Security
    - Enable RLS on `volunteers` table
    - Add policy for public insert access to allow form submissions
    - Add policy for authenticated users to read volunteer data
*/

-- Create the volunteers table
CREATE TABLE IF NOT EXISTS volunteers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  interest text NOT NULL,
  message text
);

-- Enable Row Level Security
ALTER TABLE volunteers ENABLE ROW LEVEL SECURITY;

-- Allow public insert access for form submissions
CREATE POLICY "Allow public form submissions" 
  ON volunteers 
  FOR INSERT 
  TO public 
  WITH CHECK (true);

-- Allow authenticated users to read volunteer data
CREATE POLICY "Authenticated users can read volunteer data" 
  ON volunteers 
  FOR SELECT 
  TO authenticated 
  USING (true);