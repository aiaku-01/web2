import LineChart from "@/components/ui/charts/LineChart";
import BarChart from "@/components/ui/charts/BarChart";
import PieChart from "@/components/ui/charts/PieChart";

export default function Analytics() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-800">Analytics Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">User Growth</h2>
          <LineChart />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Sales Overview</h2>
          <BarChart />
        </div>

        <div className="bg-white p-4 rounded shadow md:col-span-2">
          <h2 className="text-lg font-semibold mb-2">Revenue Distribution</h2>
          <PieChart />
        </div>
      </div>
    </div>
  );
}
