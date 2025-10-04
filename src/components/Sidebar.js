import React from 'react'
import { Link } from 'react-router-dom'
import {FcBarChart, FcQuestions} from 'react-icons/fc'
import {FcTodoList} from 'react-icons/fc'
import {FiLogOut, FiUsers} from 'react-icons/fi'
import {GrUserAdmin} from 'react-icons/gr'

import myLogo from '../images/myLogo.png'

function Sidebar() {
  return (
    <>
      <input type="checkbox" id="menu-toggle" />
      <div className="overlay">
        <label htmlFor="menu-toggle" />
      </div>


      <div className="sidebar">
        <div className="sidebar-container">
          <div className="brand">
            <Link className='brand-t' to="/home" style={{display: 'block', textAlign: 'center'}}>
              <img src={myLogo} alt='logo' width={100}/>
            </Link>
          </div>
          <div className="sidebar-menu">
            <ul>
              <li>
                  <span><FcBarChart/></span>
                  <span><Link className='a' to={"/home"}>Analytics</Link></span>
              </li>
              <li>
                  <span><GrUserAdmin/></span>
                  <span><Link className='a' to={"/admins"}>Admins</Link></span>
              </li>
              <li>
                  <span><FcTodoList/></span>
                  <span><Link className='a' to={"/tasks"}>Tasks</Link></span>
              </li>
              <li>
                  <span><FiUsers/></span>
                  <span><Link className='a' to={'/users'}>Users</Link></span>
              </li>
              <li>
                  <span><FcQuestions/></span>
                  <span><Link className='a' to={'/personalityTest'}>Personality Test</Link></span>
              </li>
              <li>
                  <span><FiLogOut/></span>
                  <span><Link className='a' to={'/'}>LogOut</Link></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
