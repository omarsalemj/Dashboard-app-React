import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import Sidebar from './Sidebar'
import Header from './Header'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { BsThreeDotsVertical } from 'react-icons/bs'
import {AiOutlineEye} from 'react-icons/ai'
import {GiRadioactive} from 'react-icons/gi'
import {RiDeleteBin2Line, RiLockPasswordLine} from 'react-icons/ri'
import myData from '../db.json'

import '../index.css'

function UsersList() {

    const theme = useTheme()
    const hidden = useMediaQuery(theme.breakpoints.down('md'))

    const [users, setUsers] = useState([])

    // const loadUsers = async () => {
    //     if(document.getElementById("searchUser").value === ""){
    //         const res = await axios.get('http://localhost:7000/users')
    //         setUsers(res.data)
    //     }
    // }

    // useEffect(() => {
    //     loadUsers()
    // })

    const loadUsers = () => {
        if(document.getElementById("searchUser").value === ""){
            const res = myData.users
            console.log(res)
            setUsers(res)
        }
    }

    useEffect(() => {
        loadUsers()
    }, [])


    const deleteUser = (user) => {
        // Swal.fire({
        //     title: `Are You Sure To Delete ${user.name}!`,
        //     showCancelButton: true
        // }).then(async (data) => {
        //     if(data.isConfirmed){
        //         await axios.delete(`http://localhost:7000/users/${user.id}`)
        //         loadUsers()
        //     }
        // })
    }

    const activateUser = (user) => {
        // Swal.fire({
        //     title: `${document.getElementById(user.id).innerHTML === "InActive" ? `Are You Sure To InActive ${user.name}!` : `Are You Sure To Active ${user.name}!`}`,
        //     showCancelButton: true
        // }).then(async (data) => {
        //     if(data.isConfirmed){
        //         if(user.activation === "1"){
        //             await axios.put(`http://localhost:7000/users/${user.id}`, {
        //                 activation: "0",
        //                 id: user.id,
        //                 password: user.password,
        //                 name: user.name,
        //                 gander: user.gander,
        //                 age: user.age,
        //                 personality: user.personality,
        //                 email: user.email,
        //                 phone: user.phone,
        //                 weight: user.weight,
        //                 tall: user.tall,
        //                 birthDay: user.birthDay,
        //                 birthMonth: user.birthMonth,
        //                 birthYear: user.birthYear,
        //                 achievement: user.achievement,
        //                 completedTaskes: user.completedTaskes,
        //                 ignoredTaskes: user.ignoredTaskes,
        //                 favTask: user.favTask
        //             })
        //         }else{
        //             await axios.put(`http://localhost:7000/users/${user.id}`, {
        //                 activation: "1",
        //                 id: user.id,
        //                 password: user.password,
        //                 name: user.name,
        //                 gander: user.gander,
        //                 age: user.age,
        //                 personality: user.personality,
        //                 email: user.email,
        //                 phone: user.phone,
        //                 weight: user.weight,
        //                 tall: user.tall,
        //                 birthDay: user.birthDay,
        //                 birthMonth: user.birthMonth,
        //                 birthYear: user.birthYear,
        //                 achievement: user.achievement,
        //                 completedTaskes: user.completedTaskes,
        //                 ignoredTaskes: user.ignoredTaskes,
        //                 favTask: user.favTask
        //             })
        //         }
        //     }
        // })
    }

    

    const findUser = async (fUser) =>{
        // const res = await axios.get(`http://localhost:7000/users`)
        const res = myData.users
        // const myUser = res.data.filter((user) => (user.id).startsWith(fUser));
        const myUser = res.filter((user) => (user.id).startsWith(fUser));
        setUsers(myUser)
    }

  return (
    <>
        <Sidebar/>

        <div className="main-content">
            <Header headTitle="Users Page"/>

            <main>
                <label className="fw-bold mb-2" htmlFor="searchUser">Search user by ID</label>
                <div className='col-lg-6 col-md-9'>
                    <input className="form-control border-secondary mb-4" id='searchUser' type="search" placeholder="Enter ID..." aria-label="Search" onChange={(e) => findUser(e.target.value)} />
                </div>

                <section style={{'overflowX': 'auto', paddingBottom: '125px'}}>
                    <table className="table table-striped my-4 mx-0" style={{textAlign: !hidden ? 'left' : 'center'}}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Statue</th>
                                <th>Name</th>
                                <th>Personality</th>
                                <th>Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user) => {
                                    return(
                                        <tr key={user.id} style={{display: 'table-row'}}>
                                            <td style={{padding: '15px'}}>{user.id}</td>
                                            <td style={{padding: '15px'}}><span style={user.activation === '1' ? {color: '#449909', backgroundColor: '#e2ffce', borderRadius: '16px', padding: '5px 10px'} : {color: 'red', backgroundColor: '#ffdbdb', borderRadius: '16px', padding: '5px 10px'}}>{user.activation === '1' ? "Active" : "InActive"}</span></td>
                                            <td style={{padding: '15px'}}>{!hidden? user.name : (user.name).split(' ')[0]}</td>
                                            <td style={{padding: '15px'}}>{user.personality}</td>
                                            <td style={{padding: '15px'}}>
                                                <div style={{display: !hidden ? 'block' : 'none'}}>
                                                    <Link className='btn btn-info me-2' to={`/users/userInfo/${user.id}`}>View</Link>
                                                    <Link className='btn btn-primary me-2' to={`/users/resetPass/${user.id}`}>Reset Pass</Link>
                                                    <button className='btn btn-danger' onClick={() => deleteUser(user)} >Delete</button>
                                                    <button id={user.id} className='btn btn-success ms-2' onClick={() => activateUser(user)} >{`${user.activation === '1' ? "InActive" : "Active"}`}</button>
                                                </div>
                                                <div className="dropdown" style={{display: !hidden ? 'none' : 'block'}}>
                                                    <BsThreeDotsVertical />
                                                    <div className="dropdown-content">
                                                        <Link to={`/users/userInfo/${user.id}`}><span><AiOutlineEye /></span> View</Link>
                                                        <Link to={`/users/resetPass/${user.id}`}><span><RiLockPasswordLine /></span> Reset Pass</Link>
                                                        <Link onClick={() => deleteUser(user)}><span><RiDeleteBin2Line /></span> Delete</Link>
                                                        <Link id={user.id} onClick={() => activateUser(user)}><span><GiRadioactive /></span> {`${user.activation === "1" ? "InActive" : "Active"}`}</Link>
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

export default UsersList