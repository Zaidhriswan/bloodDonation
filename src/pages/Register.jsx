import React from 'react'

export default function Register() {
  return (
    <div>
      <h1 className='display-3 text-center p-2 text-danger'>Register for donation</h1>
      <div className='w-75 mx-auto my-5 shadow bg-danger p-5 rounded'>
        <input type="text" className='form-control my-2' placeholder='Your Name'/>
        <input type="text" className='form-control my-2' placeholder='Your Email'/>
        <input type="text" className='form-control my-2' placeholder='Your Blood Group'/>
        <input type="text" className='form-control my-2' placeholder='Your Phone Number'/>
        <textarea className="form-control my-2" placeholder='Your Address'></textarea>
        <button className='btn btn-light my-2 w-100'>Sumbit</button>
      </div>
    </div>
  )
}
