"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    if (!supabase) return

    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.push("/login")
      } else {
        setUser(data.user)
      }
    })
  }, [router])

  if (!user) return <p className="p-10 text-white">Loading...</p>

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Email: {user.email}</p>
    </div>
  )
}
