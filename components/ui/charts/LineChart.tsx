"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart() {
  const data = {
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul"],
    datasets: [
      {
        label: "Users Growth",
        data: [120, 210, 320, 450, 530, 600, 690],
        borderColor: "rgba(59,130,246,1)",
        backgroundColor: "rgba(59,130,246,0.5)",
        tension: 0.3,
      },
    ],
  };

  return <Line data={data} />;
}
