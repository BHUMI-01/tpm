import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody
}
  from 'mdb-react-ui-kit';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("student");
    if (auth) {
      navigate('/');
    }
  })

  const handlelogin = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.warn(result);
    if (result.firstName && result.lastName) {
      localStorage.setItem("student", JSON.stringify(result));
      navigate('/');
    }
    // else{
    //   alert("Please enter correct details");
    // }
  }

  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <MDBRow>

            <MDBCol col='6' className="mb-5">
              <form >
                <h3>Sign In</h3>

                <div className="mb-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label className="custom-control-label" htmlFor="customCheck1">
                      Remember me
                    </label>
                  </div>
                </div>

                <div className="d-grid">
                  <button type="submit" onClick={handlelogin} className="btn btn-primary">
                    Submit
                  </button>
                </div>
                <p className="forgot-password text-right">
                  <a href="/register">Sign Up</a>
                </p>
              </form>

            </MDBCol>

            <MDBCol col='6' className="mb-5">
              <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 class="mb-4">Training and Placement Portal For Students</h4>
                  <p class="small mb-0">Students can login here and providing their personal details,
                    academic qualifications and other details related to the placement.
                  </p>
                </div>

              </div>

            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Login;