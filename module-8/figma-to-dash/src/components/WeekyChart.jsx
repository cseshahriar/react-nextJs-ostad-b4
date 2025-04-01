import React, { useState } from "react";
import WeeklyChart from "react-apexcharts";

const WeekyChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Deposit",
        data: [10, 20, 30, 25, 15, 40, 35],
        color:'#16DBCC'
      },
      {
        name: "Withdraw",
        data: [5, 10, 20, 15, 10, 25, 30],
        color:'#1814F3'
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800,
        },
      },
      
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "20%",
          endingShape: "rounded",
          dataLabels: {
            position: "top",
          },
          barHeight: "100%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yaxis: {
        title: {
          text: "Amount (in USD)"
        }
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: (val) => `$${val}K`,
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
      },
    },
  });
  return (
    <WeeklyChart options={chartData.options} series={chartData.series} type="bar" height={350} />

  );
};

export default WeekyChart;
