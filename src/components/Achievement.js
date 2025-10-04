import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import myData from '../db.json'

import './analytics/Analytics.css'

function Achievement() {

    // const {userID} = useParams()

    // const [user, setUser] = useState({})

    // const loadUser = async () => {
    //     const res = await axios.get(`http://localhost:7000/users/${userID}`)
    //     setUser(res.data)
    // }

    // useEffect(() => {
    //     loadUser()
    // }, [])

    const {userID} = useParams()

    const [user, setUser] = useState({})

    const loadUser = async () => {
        const users = myData.users
        const res = users.filter(user => user.id === userID)
        setUser(res[0])
    }

    useEffect(() => {
        loadUser()
    }, [])


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
        data: [user.achievement, 100-user.achievement],
        },
    ],
    };

  return (
    <>
        <Pie data={data} />
    </>
  )
}

export default Achievement