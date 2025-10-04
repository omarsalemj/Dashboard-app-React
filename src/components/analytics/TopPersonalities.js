import axios from 'axios'
import React, { useEffect, useState } from 'react'
import myData from '../../db.json'

import './Analytics.css'

function TopPersonalities() {

    // const [personalities, setPersonalities] = useState([])

    // const loadPersonalities = async () =>{
    //     const res = await axios.get('http://localhost:7000/personalities')
    //     setPersonalities(res.data)
    // }

    // useEffect(() => {
    //     loadPersonalities()
    // }, [])

    const personalities = myData.personalities

  return (
    <>
            <div className='p-4'>
                <div className='color-bar d-flex p-0 mb-4'>
                    {
                        personalities.map((personality) => {
                            return(
                                <div key={personality.id} style={{backgroundColor:personality.color, height:'10px', width:`${personality.percent}%`}}></div>
                            )
                        })
                    }
                </div>

                <div>
                    {
                        personalities.map((personality) => {
                            return(
                                <div className='d-flex justify-content-between border-bottom border-1 p-3'>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div style={{width:'10px', height:'10px', backgroundColor:personality.color}}></div>
                                        <p className='my-0 ms-3'>{personality.name}</p>
                                    </div>
                                    <p className='m-0'>{personality.count} User</p>
                                    <p className='m-0'>{personality.percent} %</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    </>
  )
}

export default TopPersonalities