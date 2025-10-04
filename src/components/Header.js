import React from 'react'
import {FaBars} from 'react-icons/fa'

function Header(props) {
  return (
    <>
        <header>
            <div className="header-title-wrapper">
                <label htmlFor="menu-toggle">
                <span className="las la-bars" ><FaBars/></span>
                </label>
                <div className="header-title">
                <h1>{props.headTitle}</h1>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header