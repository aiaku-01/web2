import { createSupabaseServerClient } from '@/lib/server/supabase'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome, {user.email}</p>
      <form action="/logout">
        <button className="mt-4 px-4 py-2 bg-white text-black rounded">Logout</button>
      </form>
    </main>
  )
}
