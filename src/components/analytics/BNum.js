import React from 'react'
import './Analytics.css'
import { FcLeave } from 'react-icons/fc';


function BNum(props) {

  return (
    <>
            <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center p-0">
                    <FcLeave className='icon'/>
                    <div className='icon-def' style={{width:'70%', paddingTop:'7%'}}>
                        <h5 className="card-title">Bounce Rate</h5>
                        <h3 className="card-title mb-4">23%</h3>
                    </div>
                </div>
            </div>
    </>
  )
}

export default BNum