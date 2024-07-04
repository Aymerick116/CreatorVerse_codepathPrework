

import { createClient } from '@supabase/supabase-js';

const URL = 'https://rupydjjjfmwctcquzysf.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1cHlkampqZm13Y3RjcXV6eXNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk5MzAwMzcsImV4cCI6MjAzNTUwNjAzN30.IA_fOtusxhaPq13BO4t0KuKtN1KtfDpVFboBZKVJFpU';

const supabase = createClient(URL, API_KEY);

export const supabase = createClient(URL, API_KEY);