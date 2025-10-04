import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function MyVerticallyCenteredModal(props) {

    const [category, setCategory] = useState('')
    let navigate = useNavigate()

    const ConfirmCategory = async (e) => {

        await axios.post('http://localhost:7000/taskCategories', {
            category: category
        })

        Swal.fire({
            title: 'Category Added Successfully'
        })

        navigate('/tasks/add')
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Category:</h6>
          <form>
            <input type='text' required style={{width: '50%', borderRadius: '7px', outline: 'none', border: '2px solid #999', padding: '8px'}} onChange={(e) => {
                if(e.target.value === ''){
                    setCategory('Unknown')
                }else{
                    setCategory(e.target.value)
                }
            }} />
            <button type='submit' className='btn btn-success' style={{display: 'block', marginTop: '20px', padding: '8px 20px'}} onClick={ConfirmCategory}>Confirm</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function AddTask() {

    const [taskCategories, setTaskCategories] = useState([])
    const loadTaskCategories = async () => {
        const res = await axios.get('http://localhost:7000/taskCategories')
        setTaskCategories(res.data)
    }

    useEffect(() => {
        loadTaskCategories()
    }, [])

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [duration, setDuration] = useState(0)

    let navigate = useNavigate()

    const formSubmit = async (e) => {
        e.preventDefault()

        await axios.post('http://localhost:7000/tasks', {
            title: title,
            category: category,
            duration: duration
        })

        Swal.fire({
            title: 'Task Added Successfully'
        })

        navigate('/tasks')
    }


    const [modalShow, setModalShow] = React.useState(false);

  return (
    <>

        <h1 className='my-3 mt-5 text-center text-secondary'>Add New Task</h1>

        <form className='col-md-6 col-9 mt-5 m-auto' onSubmit={formSubmit}>
            <div className="mb-4">
                <label htmlFor="taskTitle" className="form-label fs-6 fw-bold" placeholder='Title..'>Task Title</label>
                <input type="text" className="form-control border-secondary" id="taskTitle" aria-describedby="task title" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="mb-4">
                <label htmlFor="taskCategory" className="form-label fs-6 fw-bold" placeholder='Category..'>Task Category</label>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <select style={{width: '72%'}} className="form-control border-secondary form-select" id="taskCategory" aria-describedby="task category" onChange={(e) => setCategory(e.target.value)} >
                        <option>-select category-</option>
                        {
                            taskCategories.map((category) => {
                                return(
                                    <option defaultValue={category.category} key={category.id} >{category.category}</option>
                                )
                            })
                        }
                    </select>
                    <button style={{width: '25%'}} className="btn btn-primary" onClick={(e) => {
                        e.preventDefault()
                         setModalShow(true)}
                        }>Add New Category
                    </button>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="taskDuration" className="form-label fs-6 fw-bold" placeholder='Duration..'>Task Duration</label>
                <input type="number" className="form-control border-secondary" id="taskDuration" aria-describedby="product price" onChange={(e) => setDuration(+e.target.value)} />
            </div>
            <button type="submit" className="btn btn-success">Add Task</button>
            <Link className='btn btn-danger ms-2' to={`/tasks/`}>Cancel</Link>
        </form>

    </>
  )
}

export default AddTask