import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import myData from '../../db.json'


import './Analytics.css'

function UsersGander() {

    // const [lifeStage, setLifeStage] = useState([])

    // const loadLifeStage = async () => {
    //     const res = await axios.get('http://localhost:7000/lifeStage')
    //     setLifeStage(res.data)
    // }
  
    // useEffect(() => {
    //     loadLifeStage()
    // }, [])


    const lifeStage = myData.lifeStage



    const labels = ["16 - 25", "26 - 35", "36 - 45", "46 - 55", "56 and Up"];

    if (!lifeStage.male || !lifeStage.female) {
        return null
    }

    const data = {
        labels: labels,
        datasets: [
        {
            label: "Male",
            backgroundColor: "rgb(54, 162, 235)",
            data: [lifeStage.male.first, lifeStage.male.second, lifeStage.male.third, lifeStage.male.fourth, lifeStage.male.fifth]
        },
        {
            label: "Female",
            backgroundColor: "rgb(255, 99, 132)",
            data: [lifeStage.female.first, lifeStage.female.second, lifeStage.female.third, lifeStage.female.fourth, lifeStage.female.fifth],
        },
        ],
    };

  return (
    <>
        <Bar data={data} />
    </>
  )
}

export default UsersGander