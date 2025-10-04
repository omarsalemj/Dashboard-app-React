import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import './Sidebar.css'
import AdminInfoCard from './AdminInfoCard'
import myData from '../db.json'

function AdminInfo() {

    // const {adminID} = useParams()

    // const [admin, setAdmin] = useState({})

    // const loadAdmin = async () => {
    //     const res = await axios.get(`http://localhost:7000/admins/${adminID}`)
    //     setAdmin(res.data)
    // }

    // useEffect(() => {
    //     loadAdmin()
    // }, [])

    const {adminID} = useParams()
    
        const [admin, setAdmin] = useState({})
    
        const loadAdmin = () => {
            const admins = myData.admins
            const res = admins.filter(admin => admin.id === adminID)
            console.log(res[0])
            setAdmin(res[0])
        }
    
        useEffect(() => {
            loadAdmin()
        }, [])


    return (
        <>
            <Sidebar/>

            <div className='main-content'>
                <Header headTitle="Admin Info"/>

                <main>
                    <section>
                        <div className='adminInfo-card'>
                            <div className='achievement-content'>
                                <AdminInfoCard admin={admin}/>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default AdminInfo