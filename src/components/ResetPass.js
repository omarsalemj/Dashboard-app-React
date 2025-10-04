import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

function ResetPass() {
    
    const {userID} = useParams()

    const [user, setUser] = useState({})

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:7000/users/${userID}`)
        setUser(res.data)
    }

    useEffect(() => {
        loadUser()
    }, [])

    const [password, setPassword] = useState('')

    let navigate = useNavigate()

    const formSubmit = async (e) => {
        e.preventDefault()

        await axios.put(`http://localhost:7000/users/${userID}`, {
            password: password,
            name: user.name,
            gander: user.gander,
            age: user.age,
            personality: user.personality,
            email: user.email,
            phone: user.phone,
            weight: user.weight,
            tall: user.tall,
            birthDay: user.birthDay,
            birthMonth: user.birthMonth,
            birthYear: user.birthYear,
            achievement: user.achievement,
            completedTaskes: user.completedTaskes,
            ignoredTaskes: user.ignoredTaskes,
            favTask: user.favTask
        })

        Swal.fire({
            title: 'Password Reseted Successfully'
        })

        navigate('/users')
    }


  return (
    <>
        <h1 className='my-3 mt-5 text-secondary text-center'>Reset Password</h1>

        <form className='col-md-6 col-9 mt-5 m-auto' onSubmit={formSubmit}>
        <div className="mb-4">
            <label htmlFor="oldPass" className="form-label fs-6 fw-bold">Old Password</label>
            <input type="text" placeholder='Old Password' className="form-control" id="oldPass" aria-describedby="old pass"/>
        </div>
        <div className="mb-4">
            <label htmlFor="newPass" className="form-label fs-6 fw-bold">New Password</label>
            <input type="text" placeholder='New Password' className="form-control" id="newPass" aria-describedby="new pass" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Confirm</button>
        <Link className='btn btn-danger ms-2' to={`/users/`}>Cancel</Link>
        </form>

    </>
  )
}

export default ResetPass;