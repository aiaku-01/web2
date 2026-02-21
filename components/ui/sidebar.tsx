"use client";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:flex lg:flex-col lg:flex-shrink-0">
      
      {/* Mobile toggle */}
      <button
        className="lg:hidden px-4 py-2 text-gray-700 dark:text-gray-200"
        onClick={() => setOpen(!open)}
      >
        {open ? "✖ Close" : "☰ Menu"}
      </button>

      {/* Sidebar content */}
      <aside className={`${open ? "block" : "hidden"} lg:block bg-white dark:bg-gray-900 lg:w-64 p-6 shadow-md`}>
        <nav className="flex flex-col gap-3 text-gray-800 dark:text-gray-200 text-sm font-medium">
          <Link href="/dashboard">Overview</Link>
          <Link href="/dashboard/analytics">Analytics</Link>
          <Link href="/dashboard/settings">Settings</Link>
          <Link href="/dashboard/reports">Reports</Link>
        </nav>
      </aside>
    </div>
  );
}
