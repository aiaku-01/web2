"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e: any) {
    e.preventDefault();

    if (!supabase) {
      alert("Supabase ENV belum tersedia");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    console.log(data, error);
    alert(error ? error.message : "User created!");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <form
        onSubmit={handleRegister}
        className="bg-zinc-900 p-8 rounded-xl w-80 space-y-4"
      >
        <h1 className="text-xl font-bold text-center">Register</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded bg-zinc-800"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 rounded bg-zinc-800"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-white text-black p-2 rounded font-semibold"
        >
          Create Account
        </button>
      </form>
    </main>
  );
}
