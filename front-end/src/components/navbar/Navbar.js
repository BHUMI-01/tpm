import React from 'react';
import './Navbar.css';
import { Container } from 'react-bootstrap'

import {
  Link, useNavigate
} from 'react-router-dom';

function navbar() {
  const auth = localStorage.getItem("student");
  const navigate= useNavigate;
  const logout =()=>{
    localStorage.clear();
    navigate('/register');
  }
  return (
    
    <div>
      {
        auth 
        ?
        <nav class="navbar">
        <Container>
          <div class="logo">Placement Cell</div>
          <ul class="nav-links">
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" class="hamburger">&#9776;</label>
            <div class="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/stdprofile">Profile</Link></li>
            <li><Link to="/stdaddress">Address</Link></li>
            <li><Link to="/stdqualify">Qualification</Link></li>
            <li><Link to="/uploaddoc">Documents</Link></li>
              <li><Link onClick={logout} to="/register">Logout</Link></li>
              </div>
          </ul>
        </Container>
      </nav>
      :
      <nav class="navbar">
        <Container>
          <div class="logo">Placement Cell</div>
          <ul class="nav-links">
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" class="hamburger">&#9776;</label>
            <div class="menu">
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
