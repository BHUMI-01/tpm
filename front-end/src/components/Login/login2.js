import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
}
  from 'mdb-react-ui-kit';
import './login.css';

const Login2 = () => {
  return (
    <div>
      <MDBRow>
        <MDBCol md={6}>
          <MDBCard className='text-black m-5' style={{ borderRadius: '0px' }}>
            <MDBCardBody style={{ textAlign: "center" }}>
              <MDBRow style={{ height: "70px" }} />
              <MDBBtn style={{ height: "40px", backgroundColor: "green" }}>Bussiness</MDBBtn>
              <MDBRow style={{ height: "10px" }} />
              <h2>For <span style={{ color: "green" }}> Companies</span></h2>
              <MDBRow style={{ height: "30px" }} />
              <p>We are the market–leading technical interview platform to<br /> identify and hire developers with the right skills.</p>
              <MDBRow style={{ height: "40px" }} />
              <Link to="/complogin"><MDBBtn>Login</MDBBtn></Link>
              <MDBRow style={{ height: "20px" }} />
              <p>Don't have an account?<br />
                <Link to="/compregister">SignUp</Link>
              </p>
              <MDBRow style={{ height: "70px" }} />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md={6}>
          <MDBCard className='text-black m-5' style={{ borderRadius: '0px' }}>
            <MDBCardBody style={{ textAlign: "center" }}>
              <MDBRow style={{ height: "70px" }} />
              <MDBBtn style={{ height: "40px", backgroundColor: "green" }}>Academic</MDBBtn>
              <MDBRow style={{ height: "10px" }} />
              <h2>For <span style={{ color: "green" }}> Students</span></h2>
              <MDBRow style={{ height: "30px" }} />
              <p>Join over thounsands of stdents, manage<br /> their profilies and get hired.</p>
              <MDBRow style={{ height: "40px" }} />
              <Link to="/stdlogin"><MDBBtn>Login</MDBBtn></Link>
              <MDBRow style={{ height: "20px" }} />
              <p>Don't have an account?<br />
                <Link to="/stdregister">SignUp</Link>
              </p>
              <MDBRow style={{ height: "70px" }} />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default Login2;