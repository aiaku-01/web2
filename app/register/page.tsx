"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e: any) {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    console.log(data, error);
    alert(error ? error.message : "User created!");
  }

  return (
    <form onSubmit={handleRegister} className="p-10">
      <input
        type="email"
        placeholder="Email"
        className="border p-2 block mb-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 block mb-2"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-black text-white px-4 py-2">
        Register
      </button>
    </form>
  );
}
