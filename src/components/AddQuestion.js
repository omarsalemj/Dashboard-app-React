import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

function AddQuestion() {

    const [content, setContent] = useState('')

    let navigate = useNavigate()

    const formSubmit = async (e) => {
        e.preventDefault()

        await axios.post('http://localhost:7000/questions', {
            content: content,
        })

        Swal.fire({
            title: 'Question Added Successfully'
        })

        navigate('/personalityTest')
    }

  return (
    <>

        <h1 className='my-3 mt-5 text-center text-secondary'>Add New Question</h1>

        <form className='col-md-6 col-9 mt-5 m-auto' onSubmit={formSubmit}>
            <div className="mb-4">
                <label htmlFor="questionTitle" className="form-label fs-6 fw-bold" placeholder='Title..'>Question Content</label>
                <input type="text" className="form-control border-secondary" id="questionTitle" aria-describedby="question title" onChange={(e) => setContent(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-success">Add Question</button>
            <Link className='btn btn-danger ms-2' to={`/personalityTest/`}>Cancel</Link>
        </form>

    </>
  )
}

export default AddQuestion