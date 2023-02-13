import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

const Stdregister = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("student");
    if (auth) {
      navigate('/stdprofile');
      
    }
  })

  const collectData = async () => {
    let result = await fetch("http://localhost:5000/register", {
      method: 'post',
      body: JSON.stringify({ firstName, middleName, lastName, email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.log(result);
    if (result.result != "user already enrolled") {
      localStorage.setItem("student", JSON.stringify(result));
      navigate('/');
    }
    else {
      alert("User Already Registered");
    }
  }

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <form>
                <h3>Sign Up</h3>

                <div className="mb-3">
                  <label>First name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Middle name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label>Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>

                <MDBRow className="mb-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </MDBRow>

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

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary"
                    onClick={() => collectData()}>
                    Sign Up
                  </button>
                </div>
                <p className="forgot-password text-right">
                  Already registered <a href="/stdlogin">sign in?</a>
                </p>
              </form>
            </MDBCol>
            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage src="./training.jpeg" fluid />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Stdregister;