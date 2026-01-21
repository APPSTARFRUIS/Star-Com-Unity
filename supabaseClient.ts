import { createClient } from '@supabase/supabase-js';

// Configuration avec vos identifiants réels
const supabaseUrl = 'https://akavrfcxnffhxclalvcw.supabase.co';
const supabaseAnonKey = 'sb_publishable_XVBf9w_ZULwrbX10maIr6Q_PrKCdPKS';

// Initialisation sécurisée
export const supabase = (supabaseUrl && supabaseUrl.startsWith('http')) 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

// Helper pour vérifier si la config est prête
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey && supabaseUrl.startsWith('http'));