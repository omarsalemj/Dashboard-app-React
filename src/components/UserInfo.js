import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Achievement from './Achievement'
import Header from './Header'
import Sidebar from './Sidebar'
import './Sidebar.css'
import UserInfoCard from './UserInfoCard'
import myData from '../db.json'

function UserInfo() {

    // const {userID} = useParams()

    // const [user, setUser] = useState({})

    // const loadUser = async () => {
    //     const res = await axios.get(`http://localhost:7000/users/${userID}`)
    //     setUser(res.data)
    // }

    // useEffect(() => {
    //     loadUser()
    // }, [])


    const {userID} = useParams()
    
        const [user, setUser] = useState({})
    
        const loadUser = async () => {
            const users = myData.users
            const res = users.filter(user => user.id === userID)
            setUser(res[0])
        }
    
        useEffect(() => {
            loadUser()
        }, [])


    return (
        <>
            <Sidebar/>

            <div className='main-content'>
                <Header headTitle="User Info"/>

                <main>
                    <section>
                        <div className='userInfo-card'>
                            <div className='achievement-content'>
                                <UserInfoCard user={user}/>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default UserInfo