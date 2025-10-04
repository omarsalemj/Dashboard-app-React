import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";


const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Installations",
      backgroundColor: "rgb(54, 162, 235)",
      borderColor: "rgb(54, 162, 235)",
      data: [219, 1024, 912, 807, 1213, 1200, 950],
    },
  ],
};

function Overview() {
      


  return (
    <>
        <div className="chart mb-2">
        <Line data={data} />
        </div>
    </>
  )
}

export default Overview
