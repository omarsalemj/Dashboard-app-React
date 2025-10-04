import React from 'react'
import './Analytics.css'
import { MdOutlineFileDownload } from 'react-icons/md';


function INum(props) {

  return (
    <>
            <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center p-0">
                    <MdOutlineFileDownload style={{color:'#080'}} className='icon'/>
                    <div className='icon-def' style={{width:'70%', paddingTop:'7%'}}>
                        <h5 className="card-title">Total Installations</h5>
                        <h3 className="card-title mb-4">4,275</h3>
                    </div>
                </div>
            </div>
    </>
  )
}

export default INum