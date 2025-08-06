# ArkOS Dashboard

## Setup Steps

### 1. Create Supabase
- In Supabase UI → SQL Editor → paste and run `tools.sql`

### 2. Load Tools
```bash
npm install @supabase/supabase-js
export SUPA_URL=https://<your-project>.supabase.co
export SUPA_KEY=<your_supabase_anon_key>
node scripts/upload_tools.js
