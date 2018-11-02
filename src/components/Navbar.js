import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.jpg'

const Navbar = () => (
  <nav className="navbar is-black">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="MSPK" style={{ width: '288px', height: '200px' }} />
          </figure>
        </Link>
      </div>
      
      <div className="navbar-start">
        <Link className="navbar-item" to="/welcome">
          Welcome
        </Link>
        <Link className="navbar-item" to="/timetable">
          Timetable 
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
