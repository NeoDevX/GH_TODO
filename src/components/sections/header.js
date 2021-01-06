import React from 'react';
import logo from '../../assets/images/logo.png'
import './sections.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="gh_blog"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" 
        aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="header-links">
          <span className='phone'>
            +996(555)-21-61-86
          </span>
          <span className="github">
            github.com/SabyrbekovJanbolot          
          </span>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/todo">Todo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/calculator">Calculator</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}