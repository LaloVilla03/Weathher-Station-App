import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SbUrl;
const supabaseKey = import.meta.env.VITE_SbKey;

export const supabase = createClient(supabaseUrl, supabaseKey);