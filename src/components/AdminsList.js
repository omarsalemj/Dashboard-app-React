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
import {RiDeleteBin2Line, RiLockPasswordLine} from 'react-icons/ri'
import myData from '../db.json'

function AdminsList() {

    const theme = useTheme()
    const hidden = useMediaQuery(theme.breakpoints.down('md'))

    // const [admins, setAdmins] = useState([])

    // const loadAdmins = async () => {
    //     const res = await axios.get('http://localhost:7000/admins')
    //     setAdmins(res.data)
    // }

    // useEffect(() => {
    //     loadAdmins()
    // })

    const admins = myData.admins

    const deleteAdmin = (admin) => {
        // Swal.fire({
        //     title: `Are You Sure To Delete ${admin.name}!`,
        //     showCancelButton: true
        // }).then(async (data) => {
        //     if(data.isConfirmed){
        //         await axios.delete(`http://localhost:7000/admins/${admin.id}`)
        //         loadAdmins()
        //     }
        // })
    }

  return (
    <>
        <Sidebar/>

        <div className="main-content">
            <Header headTitle="admins Page"/>

            <Link className='btn btn-success mt-5' to={'/admins/add'}>Add new admin</Link>

            <main>
                <section style={{'overflowX': 'auto', paddingBottom: '110px'}}>
                    <table className="table table-striped my-4 mx-0 w-100" style={{textAlign: !hidden ? 'left' : 'center'}}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Personality</th>
                                <th>Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                admins.map((admin) => {
                                    return(
                                        <tr key={admin.id} style={{display: 'table-row'}}>
                                            <td style={{padding: '15px'}}>{admin.id}</td>
                                            <td style={{padding: '15px'}}>{!hidden ? admin.name : (admin.name).split(' ')[0]}</td>
                                            <td style={{padding: '15px'}}>{admin.personality}</td>
                                            <td style={{padding: '15px'}}>
                                                <div style={{display: !hidden ? 'block' : 'none'}}>
                                                    <Link className='btn btn-info me-2' to={`/admins/adminInfo/${admin.id}`}>View</Link>
                                                    <Link className='btn btn-primary me-2' to={`/admins/resetAdminPass/${admin.id}`}>Reset Pass</Link>
                                                    <button className='btn btn-danger' onClick={() => deleteAdmin(admin)} >Delete</button>
                                                </div>
                                                <div className="dropdown" style={{display: !hidden ? 'none' : 'block'}}>
                                                <BsThreeDotsVertical />
                                                    <div className="dropdown-content"> 
                                                        <Link to={`/admins/adminInfo/${admin.id}`}><span><AiOutlineEye /></span> View</Link>
                                                        <Link to={`/admins/resetAdminPass/${admin.id}`}><span><RiLockPasswordLine /></span> Reset Pass</Link>
                                                        <Link onClick={() => deleteAdmin(admin)}><span><RiDeleteBin2Line /></span> Delete</Link>
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

export default AdminsList