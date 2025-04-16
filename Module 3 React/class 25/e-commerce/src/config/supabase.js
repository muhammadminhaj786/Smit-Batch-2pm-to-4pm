import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://vuaxmyndmqheweuttavv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1YXhteW5kbXFoZXdldXR0YXZ2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDc5NjU5NSwiZXhwIjoyMDYwMzcyNTk1fQ.F7fT6DE15kysC2Kfpkyub5PaeZ79ajWQF-RKoPHIlc0')
