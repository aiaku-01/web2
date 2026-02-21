export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-6">
      <aside className="w-64 bg-white p-6 rounded-md shadow-md">
        <h3 className="font-bold mb-4">Dashboard Sidebar</h3>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
