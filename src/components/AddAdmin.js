import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import myData from '../db.json'

function AddAdmin() {

    // const [personalities, setPersonalities] = useState([])

    // const loadPersonalities = async () =>{
    //     const res = await axios.get('http://localhost:7000/personalities')
    //     setPersonalities(res.data)
    // }

    // useEffect(() => {
    //     loadPersonalities()
    // }, [])

    const personalities = myData.personalities

    const [id, setID] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [gander, setGander] = useState('')
    const [age, setAge] = useState(0)
    const [personality, setPersonality] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [birthDay, setBirthday] = useState(0)

    let navigate = useNavigate()

    const formSubmit = async (e) => {
        e.preventDefault()

        await axios.post('http://localhost:7000/admins', {
            id: id,
            name: name,
            password: password,
            gander: gander,
            age: age,
            personality: personality,
            email: email,
            phone: phone,
            birthDay: birthDay
        })

        Swal.fire({
            title: 'Admin Added Successfully'
        })

        navigate('/admins')
    }

  return (
    <>

        <h1 className='my-3 mt-5 text-center text-secondary'>Add New Admin</h1>

        <form className='col-md-6 col-9 mt-5 m-auto mb-5' onSubmit={formSubmit}>
            <div className="mb-4">
                <label htmlFor="adminID" className="form-label fs-6 fw-bold" placeholder='ID...'>Admin ID</label>
                <input type="text" className="form-control border-secondary" id="adminID" aria-describedby="admin ID" onChange={(e) => setID(e.target.value)} />
            </div>
            <div className="mb-4">
                <label htmlFor="adminName" className="form-label fs-6 fw-bold" placeholder='Name...'>Full name</label>
                <input type="text" className="form-control border-secondary" id="adminName" aria-describedby="admin name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-4">
                <label htmlFor="adminPass" className="form-label fs-6 fw-bold" placeholder='Password...'>Password</label>
                <input type="text" className="form-control border-secondary" id="adminPass" aria-describedby="admin pass" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="mb-4">
                <label htmlFor="adminGander" className="form-label fs-6 fw-bold" placeholder='Name...'>Gander</label>
                <select className="form-control border-secondary form-select" id="adminGander" aria-describedby="admin gander" onChange={(e) => setGander(e.target.value)} >
                    <option>-select gander-</option>
                    <option defaultValue='male'>male</option>
                    <option defaultValue='female'>female</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="adminAge" className="form-label fs-6 fw-bold" placeholder='Age...'>Age</label>
                <input type="number" className="form-control border-secondary" id="adminAge" aria-describedby="admin name" onChange={(e) => setAge(e.target.value)} />
            </div>
            <div className="mb-4">
                <label htmlFor="adminPersonality" className="form-label fs-6 fw-bold" placeholder='Personality...'>Personality</label>
                <select className="form-control border-secondary form-select" id="adminPersonality" aria-describedby="admin personality" onChange={(e) => setPersonality(e.target.value)} >
                    <option>-select personality-</option>
                    {
                        personalities.map((personality) => {
                            return(
                                <option defaultValue={personality.name} key={personality.id} >{personality.name}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="adminEmail" className="form-label fs-6 fw-bold" placeholder='Email...'>Email</label>
                <input type="email" className="form-control border-secondary" id="adminEmail" aria-describedby="admin email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-4">
                <label htmlFor="adminPhone" className="form-label fs-6 fw-bold" placeholder='Phone...'>Phone</label>
                <input type="text" className="form-control border-secondary" id="adminPhone" aria-describedby="admin phone" onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="mb-4">
                <label htmlFor="adminBirthDate" className="form-label fs-6 fw-bold">Birth date</label>
                <input type="date" className="form-control border-secondary" id="adminBirhtDate" aria-describedby="admin date" onChange={(e) =>{
                    setBirthday(e.target.value)
                    console.log(e.target.value)
                }} />
            </div>
            
            <button type="submit" className="btn btn-success mt-3 mb-5">Add Admin</button>
            <Link className='btn btn-danger ms-2 mt-3 mb-5' to={`/admins/`}>Cancel</Link>
        </form>

    </>
  )
}

export default AddAdmin