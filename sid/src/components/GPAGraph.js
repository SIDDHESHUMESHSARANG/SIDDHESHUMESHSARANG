"use client";
import React from "react";
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
import ChartDataLabels from "chartjs-plugin-datalabels"; // 1. Import plugin

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels, // 2. Register plugin
);

const GpaDarkChart = () => {
  const data = {
    labels: ["Sem 1", "Sem 2", "Sem 3"],
    datasets: [
      {
        label: "GPA Score",
        data: [8.82, 8.91, 9.27],
        borderColor: "rgb(96, 165, 250)",
        backgroundColor: "rgba(96, 165, 250, 0.2)",
        pointBackgroundColor: "rgb(249, 115, 22)",
        pointBorderColor: "#fff",
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.2,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        bounds: 'ticks',

        grid: { color: "rgba(255, 255, 255, 0.1)" },
        ticks: { 
          color: "#e2e8f0",
          padding: 1, // Adds distance between label and line
        },
      },
      y: {
        min: 8.5,
        max: 9.5,
        ticks: { color: "#e2e8f0", stepSize: 0.2 },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: { color: "#e2e8f0" },
      },
      title: {
        display: true,
        text: "Semester wise Academic Progress",
        color: "#f8fafc",
        font: { size: 14 },
      },
      // 3. Configure data labels styling
      datalabels: {
        display: true,
        align: "top", // Position text above the point
        anchor: "end", // Anchor text at the end of the point node
        color: "#f8fafc", // Bright white text for dark mode
        font: {
          weight: "bold",
          size: 12,
        },
        offset: 3, // Space in pixels between dot and text
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default GpaDarkChart;
