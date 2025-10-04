import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

function EditTask() {
    
    const {taskID} = useParams()

    const [task, setTask] = useState({})


    const loadTask = async () => {
        const res = await axios.get(`http://localhost:7000/tasks/${taskID}`)
        setTask(res.data) 
    }

    useEffect(() => {
        loadTask()
    }, [])

    const [title, setTitle] = useState('')
    const [duration, setDuration] = useState(0)

    let navigate = useNavigate()

    const formSubmit = async (e) => {
        e.preventDefault()

        await axios.put(`http://localhost:7000/tasks/${taskID}`, {
            title: title,
            duration: duration
        })

        Swal.fire({
            title: 'Task Edited Successfully'
        })

        navigate('/tasks')
    }


  return (
    <>
        <h1 className='my-3 mt-5 text-secondary text-center'>Edit Task</h1>

        <form className='col-md-6 col-9 mt-5 m-auto' onSubmit={formSubmit}>
        <div className="mb-4">
            <label htmlFor="taskTitle" className="form-label fs-6 fw-bold" placeholder='Title..'>Task Title</label>
            <input type="text" defaultValue={task.title} className="form-control border-secondary" id="taskTitle" aria-describedby="task title" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="mb-4">
            <label htmlFor="taskDuration" className="form-label fs-6 fw-bold" placeholder='Duration..'>Task Duration</label>
            <input type="number" defaultValue={task.price} className="form-control border-secondary" id="taskDuration" aria-describedby="task price" onChange={(e) => setDuration(+e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Edit Task</button>
        <Link className='btn btn-danger ms-2' to={`/tasks/`}>Cancel</Link>
        </form>

    </>
  )
}

export default EditTask