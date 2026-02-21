"use client";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-100 text-gray-900">
        <Navbar />
        <main className="container mx-auto px-6 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
