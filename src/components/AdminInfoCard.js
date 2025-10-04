import React from 'react'

function AdminInfoCard({admin}) {
  return (
    <>
        <div className="card col-md-8 m-auto">
            <div className='card-header fw-bold fs-4 text-center'>
                {admin.name}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><span className='fw-bold'>ID:</span> {admin.id}</li>
                <li className="list-group-item"><span className='fw-bold'>Gander:</span> {admin.gander}</li>
                <li className="list-group-item"><span className='fw-bold'>Age:</span> {admin.age}</li>
                <li className="list-group-item"><span className='fw-bold'>Personality:</span> {admin.personality}</li>
                <li className="list-group-item"><span className='fw-bold'>Email:</span> {admin.email}</li>
                <li className="list-group-item"><span className='fw-bold'>Phone:</span> {admin.phone}</li>
                <li className="list-group-item"><span className='fw-bold'>Weight:</span> {admin.weight}</li>
                <li className="list-group-item"><span className='fw-bold'>Tall:</span> {admin.tall}</li>
                <li className="list-group-item"><span className='fw-bold'>Birth date:</span> {admin.birthDay}/{admin.birthMonth}/{admin.birthYear}</li>
            </ul>
        </div>
    </>
  )
}

export default AdminInfoCard