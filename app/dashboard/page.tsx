import { createSupabaseServerClient } from '@/lib/server/supabase'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const supabase = createSupabaseServerClient()
  const { data } = await supabase.auth.getUser()

  if (!data.user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-2xl mb-4">Dashboard</h1>
      <p>Email: {data.user.email}</p>
    </div>
  )
}
