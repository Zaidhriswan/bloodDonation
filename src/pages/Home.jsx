import React from 'react'

export default function Home() {
  return (
    <div>
      <div className="container py-5 text-center">
        <h1 className='fw-bolder text-danger display-2'>Welcome to Blood Donation Camp</h1>
        <p>Your Donation can save lives,join us on our mission to help those in need</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://i.pinimg.com/474x/86/17/13/8617139d9bf074fab241c3c3bae809fb.jpg" alt="" className='card-img-top'/>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://static.vecteezy.com/system/resources/previews/013/177/029/non_2x/blood-donation-poster-for-health-charity-design-vector.jpg" alt="" className='card-img-top'/>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blood-donation-camp-design-template-fa50a260c6750463b91c41269f4b122c_screen.jpg?ts=1733158916" alt="" className='card-img-top'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
