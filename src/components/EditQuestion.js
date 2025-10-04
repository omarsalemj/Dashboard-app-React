import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

function EditQuestion() {
    
    const {questionID} = useParams()

    const [question, setQuestion] = useState({})


    const loadQuestion = async () => {
        const res = await axios.get(`http://localhost:7000/questions/${questionID}`)
        setQuestion(res.data) 
    }

    useEffect(() => {
        loadQuestion()
    }, [])

    const [content, setContent] = useState('')

    let navigate = useNavigate()

    const formSubmit = async (e) => {
        e.preventDefault()

        await axios.put(`http://localhost:7000/questions/${questionID}`, {
            content: content,
        })

        Swal.fire({
            title: 'Question Edited Successfully'
        })

        navigate('/personalityTest')
    }


  return (
    <>
        <h1 className='my-3 mt-5 text-secondary text-center'>Edit Question</h1>

        <form className='col-md-6 col-9 mt-5 m-auto' onSubmit={formSubmit}>
        <div className="mb-4">
            <label htmlFor="questionTitle" className="form-label fs-6 fw-bold" placeholder='Title..'>question Content</label>
            <input type="text" defaultValue={question.content} className="form-control border-secondary" id="questionTitle" aria-describedby="question title" onChange={(e) => setContent(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Edit Question</button>
        <Link className='btn btn-danger ms-2' to={`/personalityTest/`}>Cancel</Link>
        </form>

    </>
  )
}

export default EditQuestion