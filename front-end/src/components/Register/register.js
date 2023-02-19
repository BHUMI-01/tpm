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
import { Link } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("student");
    if (auth) {
      navigate('/')
    }
  })
  const collectData = async () => {
    console.warn(firstName, lastName, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: 'post',
      body: JSON.stringify({ firstName, lastName, email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("student", JSON.stringify(result));
    navigate('/');
  }

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "0px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md={7} style={{ textAlign: "justify", padding: "40px" }}>
              <h1>How do you want to use<br />Placement Cell?</h1>
              <MDBRow style={{ height: "30px" }}></MDBRow>
              <MDBCard style={{ borderRadius: "0px", width: "50%" }}>
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol md={1}><i className="fa-solid fa-magnifying-glass"></i></MDBCol>
                    <MDBCol md={11}><Link to="/compregister">I'm here to hire tech talent.</Link></MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>

              <MDBRow style={{ height: "30px" }}></MDBRow>
              <MDBCard style={{ borderRadius: "0px", width: "50%" }}>
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol md={1}><i className="fa-solid fa-arrow-right-from-bracket"></i></MDBCol>
                    <MDBCol md={11}><Link to="/stdregister">I'm here to participate.</Link></MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Register;
