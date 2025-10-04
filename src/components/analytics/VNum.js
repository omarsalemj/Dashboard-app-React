import React from 'react'
import './Analytics.css'
import { BsEye } from 'react-icons/bs';


function VNum(props) {

  return (
    <>
            <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center p-0">
                    <BsEye style={{color:'#008'}} className='icon'/>
                    <div className='icon-def' style={{width:'70%', paddingTop:'7%'}}>
                        <h5 className="card-title">Total Visitors</h5>
                        <h3 className="card-title mb-4">4,113</h3>
                    </div>
                </div>
            </div>
    </>
  )
}

export default VNum