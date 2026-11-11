import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const isSupabaseConfigured = Boolean(url && anonKey);

// Stays null until the variables in .env are set, so the site still runs without a backend.
export const supabase: SupabaseClient | null =
  url && anonKey ? createClient(url, anonKey) : null;
