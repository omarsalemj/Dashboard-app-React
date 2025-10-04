import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BNum from './analytics/BNum'
import INum from './analytics/INum'
import Overview from './analytics/Overview'
import TaskStatue from './analytics/TaskStatue'
import TopPersonalities from './analytics/TopPersonalities'
import TopTasks from './analytics/TopTasks'
import UNum from './analytics/UNum'
import UsersGander from './analytics/UsersGander'
import VNum from './analytics/VNum'
import Sidebar from './Sidebar'
import Header from './Header'
import myData from '../db.json'

function Home() {


  // const [users, setUsers] = useState([])

  // const loadUsers = async () => {
  //   const res = await axios.get('http://localhost:7000/users')
  //   setUsers(res.data)
  // }

  // useEffect(() => {
  //     loadUsers()
  // })

  const users = myData.users



  return (
    <>
      <Sidebar/>

      <div className="main-content">
        <Header headTitle="Analystics"/>

        <main>
          <section>
            <h3 className="section-head">Overview</h3>
            <Overview />
            <div className="analystics">
              <INum/>
              <VNum/>
              <UNum users={users} />
              <BNum/>
            </div>
          </section>
          <section>
            <div className='block-grid'>
              <div className="tasksStatue-card">
                <h3 className="section-head">Tasks Statue Rate</h3>
                <div className="tasksStatue-content w-card">
                  <TaskStatue  users={users}/>
                </div>
              </div>
              <div className="usersGL-card">
                <h3 className="section-head">Users By Gander And LifeStage</h3>
                <div className="usersGL-content w-card">
                  <UsersGander/>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className='block-grid'>
              <div className="topTasks-card">
                <h3 className="section-head">Top Tasks</h3>
                <div className="topTasks-content w-card">
                  <TopTasks/>
                </div>
              </div>
              <div className="personalities-card">
                <h3 className="section-head">Top Personalities</h3>
                <div className="personalities-content w-card">
                  <TopPersonalities users={users}/>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default Home