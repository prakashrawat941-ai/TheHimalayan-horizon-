import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Next.js inlines NEXT_PUBLIC_ variables at build time, so each one must be referenced literally.
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

// Stays null until the variables in .env are set, so the site still runs without a backend.
export const supabase: SupabaseClient | null =
  url && anonKey ? createClient(url, anonKey) : null;
