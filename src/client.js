import { createClient } from '@supabase/supabase-js'

const URL = 'https://dqjioxrhracgaeitxdrp.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxamlveHJocmFjZ2FlaXR4ZHJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NjY5MjgsImV4cCI6MjAyODU0MjkyOH0.wxpiBilz2zQrhR7oColBlhBiXMJtKZvg6UwvNAs98gc';

export const supabase = createClient(URL, API_KEY);