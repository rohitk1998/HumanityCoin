import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

export const LineGraph = ({ chartData, color }) => {

  console.log(chartData, "chartData >>>")

  const chartCanvas = useRef(null);

  useEffect(() => {
    const ctx = chartCanvas.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["1h", "24h", "7d", "30d", "60d", "90d"],
        datasets: [
          {
            label: "Percent Change",
            data: chartData,
            borderColor: color,
            fill: false,
            tension: 0.5,
            borderWidth: 1,
          },
        ],
      },
      options: {
        elements: {
          point: {
            radius: 0,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
      },
    });

    // Cleanup function
    return () => {
      chart.destroy();
    };
  }, [color]);

  return <canvas ref={chartCanvas}></canvas>;
};
