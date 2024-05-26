import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tszuhglhlpcsvsaxixpl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzenVoZ2xobHBjc3ZzYXhpeHBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3MDE5NDEsImV4cCI6MjAyOTI3Nzk0MX0.RzOtQfxE_LTGhuGxu-Ky_TyrE7y2E2I2_NOkBV0x8UA'
export const supabase = createClient(supabaseUrl, supabaseKey)

