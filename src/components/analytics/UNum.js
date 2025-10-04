
import React from 'react'
import './Analytics.css'
import { BiUser } from 'react-icons/bi';


function UNum(props) {

  return (
    <>
            <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center p-0">
                    <BiUser style={{color:'#333'}} className='icon'/>
                    <div className='icon-def' style={{width:'70%', paddingTop:'7%'}}>
                        <h5 className="card-title">Total Users</h5>
                        <h3 className="card-title mb-4">{props.users.length}</h3> 
                    </div>
                </div>
            </div>
    </>
  )
}

export default UNum