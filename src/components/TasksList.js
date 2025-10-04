import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import Sidebar from './Sidebar'
import Header from './Header'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { BsThreeDotsVertical } from 'react-icons/bs'
import {RiDeleteBin2Line} from 'react-icons/ri'
import { AiOutlineEdit } from 'react-icons/ai'
import myData from '../db.json'

function TasksList() {

    const theme = useTheme()
    const hidden = useMediaQuery(theme.breakpoints.down('md'))

    // const [tasks, setTasks] = useState([])
    // const loadTasks = async () => {
    //     const res = await axios.get('http://localhost:7000/tasks')
    //     setTasks(res.data)
    // }

    // useEffect(() => { 
    //     loadTasks()
    // }, [])

    const tasks = myData.tasks


    const deleteTask = (task) => {
        // Swal.fire({
        //     title: `Are You Sure To Delete ${task.title}!`,
        //     showCancelButton: true
        // }).then(async (data) => {
        //     if(data.isConfirmed){
        //         await axios.delete(`http://localhost:7000/tasks/${task.id}`)
        //         loadTasks()
        //     }
        // })
    }


  return (
    <>
        <Sidebar/>

        <div className="main-content">
            <Header headTitle="Tasks Page"/>

            <main>
                <section>
                    <Link className='btn btn-success mt-5' to={'/tasks/add'}>Add new task</Link> 

                    <table className="table table-striped my-4 mx-0" style={{textAlign: !hidden ? 'left' : 'center'}}>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Duration (.Avg/minute)</th>
                                <th>Operations</th>
                            </tr>
                        </thead> 
                        <tbody>
                            {
                                tasks.map((task) => {
                                    return(
                                        <tr key={task.id}>
                                            <td style={{padding: '13px'}}>{task.title}</td>
                                            <td style={{padding: '13px'}}>{task.category}</td>
                                            <td style={{padding: '13px'}}>{task.duration}</td>
                                            <td style={{padding: '13px'}}>
                                                <div style={{display: !hidden ? 'block' : 'none'}}>
                                                    <Link className='btn btn-primary me-2' to={`/tasks/edit/${task.id}`}>Edit</Link>
                                                    <button className='btn btn-danger' onClick={() => deleteTask(task)} >Delete</button>
                                                </div>
                                                <div className="dropdown" style={{display: !hidden ? 'none' : 'block'}}>
                                                    <BsThreeDotsVertical />
                                                    <div className="dropdown-content" style={{width: '170%'}}>
                                                        <Link to={`/tasks/edit/${task.id}`}><span><AiOutlineEdit /></span> Edit</Link>
                                                        <Link onClick={() => deleteTask(task)}><span><RiDeleteBin2Line /></span> Delete</Link>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </section>
            </main>
        </div>

    </>
  )
}

export default TasksList