import Card from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Overview</h1>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <p className="text-sm font-semibold text-gray-500">Users</p>
          <p className="text-2xl font-bold">1,234</p>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-gray-500">Sales</p>
          <p className="text-2xl font-bold">$45,678</p>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-gray-500">Visitors</p>
          <p className="text-2xl font-bold">12,345</p>
        </Card>
      </div>

      {/* Recent activity */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700">Recent Activity</h2>
        <div className="mt-4 space-y-2">
          <p className="text-gray-600">User John signed up</p>
          <p className="text-gray-600">Sale #5643 completed</p>
          <p className="text-gray-600">New message from support</p>
        </div>
      </div>
    </div>
  );
}
