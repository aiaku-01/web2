"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          BigWeb
        </Link>
        <nav className="space-x-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/register">Register</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/social/feed">Feed</Link>
          <Link href="/shop/products">Shop</Link>
          <Link href="/profile">Profile</Link>
        </nav>
      </div>
    </header>
  );
}
