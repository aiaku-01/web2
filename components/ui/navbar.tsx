"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* BRAND */}
        <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          BigWeb
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex gap-6 text-sm font-medium text-gray-800 dark:text-gray-200">
          <Link href="/">Home</Link>
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/register">Register</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/social/feed">Feed</Link>
          <Link href="/shop/products">Shop</Link>
          <Link href="/profile">Profile</Link>
          <ThemeToggle />
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden text-gray-800 dark:text-gray-200"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>

        {/* MOBILE MENU */}
        {open && (
          <nav className="absolute top-full left-0 w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 flex flex-col gap-4 px-6 py-4 lg:hidden">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/auth/login" onClick={() => setOpen(false)}>Login</Link>
            <Link href="/auth/register" onClick={() => setOpen(false)}>Register</Link>
            <Link href="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
            <Link href="/social/feed" onClick={() => setOpen(false)}>Feed</Link>
            <Link href="/shop/products" onClick={() => setOpen(false)}>Shop</Link>
            <Link href="/profile" onClick={() => setOpen(false)}>Profile</Link>
            <ThemeToggle />
          </nav>
        )}

      </div>
    </header>
  );
}
