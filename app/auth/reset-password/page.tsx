"use client";
import { useState } from "react";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
      <form className="space-y-4">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          className="w-full border p-2 rounded"
        />
        <button className="w-full bg-yellow-500 text-white p-2 rounded">
          Send Reset Link
        </button>
      </form>
    </div>
  );
}
