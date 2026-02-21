"use client";

import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Web Besar Dunia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-white shadow p-4">
          <nav className="container mx-auto flex flex-wrap gap-4">
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/social/feed">Feed</Link>
            <Link href="/shop/products">Shop</Link>
            <Link href="/profile">Profile</Link>
          </nav>
        </header>

        <main className="container mx-auto py-6">
          {children}
        </main>

        <footer className="bg-gray-800 text-white p-4 text-center">
          © 2026 Your Big Web Project
        </footer>
      </body>
    </html>
  );
}
