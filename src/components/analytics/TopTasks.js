import React, { useEffect, useState } from 'react'
import axios from 'axios'
import myData from '../../db.json'

import './Analytics.css'

function TopTasks() {

    // const [tasks, setTasks] = useState([])
    // const loadTasks = async () => {
    //     const res = await axios.get('http://localhost:7000/tasks')
    //     setTasks(res.data)
    // }

    // useEffect(() => {
    //     loadTasks()
    // }, [])

    const tasks = myData.tasks

  return (
    <>
        <div className='p-3'>
            <table className="table table-striped mx-0">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Duration (.Avg/minute)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((task) => {
                            return(
                                <tr key={task.id}>
                                    <td>{task.title}</td>
                                    <td>{task.duration}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}

export default TopTasks