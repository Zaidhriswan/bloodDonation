import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='sticky-top'>
         <nav className="navbar navbar-expand-lg navbar-light shadow">
            <div className="container-fluid">
                <Link className="navbar-brand text-danger fw-bold p-1" to="/">Blood Donation Camp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/'} className='nav-link'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'about'} className='nav-link'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'register'} className='nav-link'>Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'faq'} className='nav-link'>Faq</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
