import React from 'react'
import Achievement from './Achievement'

function UserInfoCard({user}) {
  return (
    <>
        <div className="card col-md-9 m-auto">
            <div className='card-header fw-bold fs-4 text-center'>
                {user.name}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item w-50 text-center m-auto"><span className='fw-bold'>Achievement:</span><Achievement/></li>
                <li className="list-group-item"><span className='fw-bold'>ID:</span> {user.id}</li>
                <li className="list-group-item"><span className='fw-bold'>Password:</span> {user.password}</li>
                <li className="list-group-item"><span className='fw-bold'>Gander:</span> {user.gander}</li>
                <li className="list-group-item"><span className='fw-bold'>Age:</span> {user.age}</li>
                <li className="list-group-item"><span className='fw-bold'>Personality:</span> {user.personality}</li>
                <li className="list-group-item"><span className='fw-bold'>Email:</span> {user.email}</li>
                <li className="list-group-item"><span className='fw-bold'>Phone:</span> {user.phone}</li>
                <li className="list-group-item"><span className='fw-bold'>Weight:</span> {user.weight}</li>
                <li className="list-group-item"><span className='fw-bold'>Tall:</span> {user.tall}</li>
                <li className="list-group-item"><span className='fw-bold'>Birth date:</span> {user.birthDay}/{user.birthMonth}/{user.birthYear}</li>
                <li className="list-group-item"><span className='fw-bold'>Completed Taskes:</span> {user.completedTaskes}</li>
                <li className="list-group-item"><span className='fw-bold'>Ignored Taskes:</span> {user.ignoredTaskes}</li>
                <li className="list-group-item"><span className='fw-bold'>Fav Task:</span> {user.favTask}</li>
            </ul>
        </div>
    </>
  )  
}

export default UserInfoCard