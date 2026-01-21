
import { createClient } from '@supabase/supabase-js';

// Sous Vite, on utilise import.meta.env
// Sur Vercel, les variables sans préfixe VITE_ sont accessibles via process.env au build
const getEnv = (name: string): string | undefined => {
  try {
    // @ts-ignore
    return import.meta.env[name] || (globalThis as any)?.process?.env?.[name];
  } catch (e) {
    return undefined;
  }
};

const supabaseUrl = getEnv('VITE_SUPABASE_URL') || getEnv('SUPABASE_URL') || 'https://akavrfcxnffhxclalvcw.supabase.co';
const supabaseAnonKey = getEnv('VITE_SUPABASE_ANON_KEY') || getEnv('SUPABASE_ANON_KEY') || 'sb_publishable_XVBf9w_ZULwrbX10maIr6Q_PrKCdPKS';

export const supabase = (supabaseUrl && supabaseUrl.startsWith('http')) 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey && supabaseUrl.startsWith('http'));
