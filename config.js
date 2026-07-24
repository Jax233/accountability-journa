// ====== FILL THESE IN FROM YOUR SUPABASE PROJECT ======
// Dashboard → Project Settings → API
const SUPABASE_URL = 'https://efbsorwhkphgwbosbzgz.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_tbLVR-4BU40AGBwVl3h2vQ_T_SqBB4p';
// =======================================================

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Redirects to login if no active session. Call at the top of every protected page.
async function requireSession(){
  const { data: { session } } = await sb.auth.getSession();
  if(!session){
    window.location.href = 'login.html';
    return null;
  }
  return session;
}
