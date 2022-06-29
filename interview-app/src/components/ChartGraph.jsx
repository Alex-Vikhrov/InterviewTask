import React, { useState, useEffect } from "react";
import { Chart as ChartJs, LineElement, PointElement, CategoryScale, LinearScale } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const ChartGraph = () => {

  const data = {
    labels:  ["Teal", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes" ,
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 255, 255,0.2)"
        ],
        borderColor: [
          "teal",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 2
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      indexAxis: 'y',
      x: {
        beginAtZero: true
      }
    },
    legend: {
      labels: {
        fontSize: 26
      }
    }
  };

  return (
    <div className="graph">
      <Line data={data} width={800} height={400} options={options}/>
    </div>
  );
};
export default ChartGraph;
