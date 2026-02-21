"use client";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const data = {
    labels: ["Red","Blue","Yellow"],
    datasets: [
      {
        label: "Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgba(255,99,132,0.8)",
          "rgba(54,162,235,0.8)",
          "rgba(255,206,86,0.8)"
        ],
      },
    ],
  };

  return <Pie data={data} />;
}
