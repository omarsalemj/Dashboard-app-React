import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

function ResetAdminPass() {
    
    const {adminID} = useParams()

    const [admin, setAdmin] = useState({})

    const loadAdmin = async () => {
        const res = await axios.get(`http://localhost:7000/admins/${adminID}`)
        setAdmin(res.data)
    }

    useEffect(() => {
        loadAdmin()
    }, [])

    const [password, setPassword] = useState('')

    let navigate = useNavigate()

    const formSubmit = async (e) => {
        e.preventDefault()

        await axios.put(`http://localhost:7000/admins/${adminID}`, {
            password: password,
            name: admin.name,
            gander: admin.gander,
            age: admin.age,
            personality: admin.personality,
            email: admin.email,
            phone: admin.phone,
            weight: admin.weight,
            tall: admin.tall,
            birthDay: admin.birthDay,
            birthMonth: admin.birthMonth,
            birthYear: admin.birthYear
        })

        Swal.fire({
            title: 'Password Reseted Successfully'
        })

        navigate('/admins')
    }


  return (
    <>
        <h1 className='my-3 mt-5 text-secondary text-center'>Reset Password</h1>

        <form className='col-md-6 col-9 mt-5 m-auto' onSubmit={formSubmit}>
        <div className="mb-4">
            <label htmlFor="oldPass" className="form-label fs-6 fw-bold">Old Password</label>
            <input type="text" placeholder='Old Password' className="form-control border-secondary" id="oldPass" aria-describedby="old pass"/>
        </div>
        <div className="mb-4">
            <label htmlFor="newPass" className="form-label fs-6 fw-bold">New Password</label>
            <input type="text" placeholder='New Password' className="form-control border-secondary" id="newPass" aria-describedby="new pass" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Confirm</button>
        <Link className='btn btn-danger ms-2' to={`/admins/`}>Cancel</Link>
        </form>

    </>
  )
}

export default ResetAdminPass;