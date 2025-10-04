import React from 'react'
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

import './Analytics.css'

function TaskStatue(props) {

    let totalCompletedTasks = 0
    let totalIgnoredTasks = 0

    props.users.map((user) => {
      return totalCompletedTasks = totalCompletedTasks + user.completedTasks
    })
    
    props.users.map((user) => {
      return totalIgnoredTasks = totalIgnoredTasks + user.ignoredTasks
    })

    const labels = ['Finished', 'Ignored'];
    const data = {
    labels: labels,
    datasets: [
        {
        label: "Statue rate %",
        backgroundColor: [
            "rgb(54, 162, 235)",
            "rgb(255, 99, 132)"
        ],
        data: [50, 20],
        },
    ],
    };

  return (
    <>
        <Pie data={data} />
    </>
  )
}

export default TaskStatue