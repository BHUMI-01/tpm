import React from 'react';
import './Navbar.css';
import { Container } from 'react-bootstrap'
import {
  Link, useNavigate
} from 'react-router-dom';

function navbar() {
  const auth = localStorage.getItem("student");
  const authh = localStorage.getItem("recruiter");
  const navigate = useNavigate;

  const shoot = () => {
    if (localStorage.getItem("student")) {
      const name = JSON.parse(localStorage.getItem("student")).firstName;
      return <li><Link to='/stddash'><i className="fa-solid fa-user"></i> {name}</Link></li>
    }
    else if (localStorage.getItem("recruiter")) {
      return <li><Link to="/recruiter">Profile</Link></li>
    }
    else {
      return <li><Link to="/admin">Profile</Link></li>
    }
  }

  const logout = () => {
    localStorage.clear();
    navigate('/register');
  }

  return (
    <div>
      {
        auth || authh
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
