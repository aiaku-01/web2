"use client";

export default function ResetPassword() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
      <form className="space-y-4">
        <input type="email" placeholder="Your registered email" className="w-full border p-2 rounded" />
        <button className="w-full bg-yellow-600 text-white py-2 rounded">Send Reset Link</button>
      </form>
    </div>
  );
}
