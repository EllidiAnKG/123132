import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xgowmnppmnlubktjvksv.supabase.co/';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhnb3dtbnBwbW5sdWJrdGp2a3N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyODQwODksImV4cCI6MjA0Mjg2MDA4OX0.v5M2K_Z_-GDrBy7ltEr6I1D-NCGlePWryCGqdhSjk3Q';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);