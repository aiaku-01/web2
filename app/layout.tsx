"use client";

import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
        
        {/* NAVBAR */}
        <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            
            <h1 className="text-xl font-bold tracking-wide">
              BIG<span className="text-blue-500">WEB</span>
            </h1>

            <nav className="hidden md:flex gap-6 text-sm">
              <Link href="/" className="hover:text-blue-400 transition">Home</Link>
              <Link href="/login" className="hover:text-blue-400 transition">Login</Link>
              <Link href="/register" className="hover:text-blue-400 transition">Register</Link>
              <Link href="/dashboard" className="hover:text-blue-400 transition">Dashboard</Link>
            </nav>

          </div>
        </header>

        {/* MAIN */}
        <main className="max-w-7xl mx-auto px-6 py-12">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="border-t border-gray-800 py-6 text-center text-gray-400 text-sm">
          © 2026 Big Web Project — The Future Platform
        </footer>

      </body>
    </html>
  );
}
