import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import Sidebar from './Sidebar'
import Header from './Header'
import myData from '../db.json'

function PersonalityTest() {

    // const [questions, setQuestions] = useState([])
    // const loadQuestions = async () => {
    //     const res = await axios.get('http://localhost:7000/questions')
    //     setQuestions(res.data)
    // }

    // useEffect(() => {
    //     loadQuestions()
    // }, [])

    const questions = myData.questions


    const deleteQuestion = (question) => {
        // Swal.fire({
        //     title: `Are You Sure To Delete this question!`,
        //     showCancelButton: true
        // }).then(async (data) => {
        //     if(data.isConfirmed){
        //         await axios.delete(`http://localhost:7000/questions/${question.id}`) 
        //         loadQuestions()
        //     }
        // })
    }


  return (
    <>
        <Sidebar/>

        <div className="main-content">
            <Header headTitle="Personality Test Page"/>

            <main>
                <section>
                    <Link className='btn btn-success mt-5' to={'/personalityTest/add'}>Add new Question</Link> 

                    <table className="table table-striped my-4 mx-0">
                        <thead>
                            <tr>
                                <th>Content</th>
                                <th>Operations</th>
                            </tr>
                        </thead> 
                        <tbody>
                            {
                                questions.map((question) => {
                                    return(
                                        <tr key={question.id}>
                                            <td>{question.content}</td>
                                            <td>
                                                <Link className='btn btn-primary me-2' to={`/personalityTest/edit/${question.id}`}>Edit</Link>
                                                <button className='btn btn-danger' onClick={() => deleteQuestion(question)} >Delete</button>
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

export default PersonalityTest