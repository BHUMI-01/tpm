import React from 'react';
import './Navbar.css';
import { Container } from 'react-bootstrap'

import {
  Link, useNavigate
} from 'react-router-dom';

function navbar() {
  const auth = localStorage.getItem("student");
  const navigate = useNavigate;

  const shoot = () => {
    const val = JSON.parse(localStorage.getItem("student")).status;
    if (val == "Student") {
      return <div className="menu">
        <li><Link to="/stdprofile">Profile</Link></li>
        <li><Link to="/stdaddress">Address</Link></li>
        <li><Link to="/stdqualify">Qualification</Link></li>
        <li><Link to="/uploaddoc">Documents</Link></li>
      </div>
    }
    else if(val == "Recruiter"){
      return <ul>
        <li><Link to="/recruiter">Profile</Link></li>
      </ul>
    }
    else if(val=="Admin"){
      return <ul>
        <li><Link to="/admin">Profile</Link></li>
      </ul>
    }
  }

  const logout = () => {
    localStorage.clear();
    navigate('/register');
  }

  return (
    <div>
      {
        auth
          ?
          <nav className="navbar">
            <Container>
              <div className="logo">Placement Cell</div>
              <ul className="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                <div className="menu">
                  <li><Link to="/">Home</Link></li>
                  {shoot()}
                  <li><Link onClick={() => logout()} to="/register">Logout</Link></li>
                </div>
              </ul>
            </Container>
          </nav>
          :
          <nav className="navbar">
            <Container>
              <div className="logo">Placement Cell</div>
              <ul className="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                <div className="menu">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/register">Register</Link></li>
                  <li><Link to="/login">Login</Link></li>
                </div>
              </ul>
            </Container>
          </nav>
      }
    </div>
  )
}

export default navbar
