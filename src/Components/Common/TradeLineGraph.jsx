import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import "apexcharts/dist/apexcharts.css";

const TradeLineGraph = (props) => {
  const series = [
    {
      data: [...props.data],
    },
  ];
  const options = {
    colors: [props?.color ?? "#f7931a"],
    chart: {
      tickPlacement: "between",
      id: "area-datetime",
      type: "area",
      zoom: {
        autoScaleYaxis: true,
      },
      toolbar: false,
      width: "100%",
    },
    stroke: {
      curve: "smooth",
      width: 1.5,
    },
    grid: {
      xaxis: { lines: { show: false } },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      style: "hollow",
    },
    xaxis: {
      type: "datetime",
      // min: new Date("13 June 2012").getTime(),
      tickAmount: 6,
    },
    yaxis: {
      opposite: true,
      labels: { show: false },
    },
    tooltip: {
      enabled: true,
      x: {
        format: "dd MMM yyyy",
      },
      y: {
        title: {
          formatter: (seriesName) => "Price",
        },
      },
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.8,
        stops: [0, 100, 100],
      },
      // type: "solid",
      // colors: ["transparent"],
    },
  };
  return (
    <div id="chart">
      <div id="chart-timeline">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={250}
        />
      </div>
    </div>
  );
};
export default TradeLineGraph;
