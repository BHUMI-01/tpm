import React from 'react'
import {
  MDBRow, MDBContainer, MDBCol, MDBBtn,
  MDBCard, MDBCardBody
} from 'mdb-react-ui-kit';
import Side from '../components/Sidebar';
import Profile from '../components/Student/Profile/profile';
import Address from '../components/Student/Address/address';
import Education from '../components/Student/Education/qualification';
import { Link } from 'react-router-dom';

const Page = () => {
  return (
    <div>
      <MDBRow>
        <MDBCol md={2}>
          <Side />
        </MDBCol>
        <MDBCol>
          <MDBCard className="text-black m-5">
            <MDBCardBody>
              <MDBRow>
                <MDBCol md={3}>
                  <img src='./AMU.png' alt='image' style={{ borderRadius: "25px solid", height: "200px" }} />
                </MDBCol>
                <MDBCol md={9}>
                  <MDBRow>
                    <h3>Name : </h3>
                  </MDBRow>
                  <MDBRow style={{ height: "20px" }}></MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <h5>Faculty Number : </h5>
                      <h5>CPI : </h5>
                      <h5>Course Name : </h5>
                    </MDBCol>
                    <MDBCol>
                      <h5><i className="fa-solid fa-envelope"></i> Email : </h5>
                      <h5><i className="fa-solid fa-phone"></i> Contact No : </h5>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>

          <MDBCard className="text-black m-5">
            <MDBCardBody>
              {/* 1st row */}
              <MDBRow>
                <MDBCol>
                  <MDBCard className="text-black m-5">
                    <MDBCardBody>
                      <Link to="/student/stdprofile"><h2>Profile</h2></Link>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard className="text-black m-5">
                    <MDBCardBody>
                    <Link to="/student/stdaddress"><h2>Address</h2></Link>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard className="text-black m-5">
                    <MDBCardBody>
                    <Link to="/student/stdqualify"><h2>Education</h2></Link>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>

              {/* 2nd row */}
              <MDBRow>
                <MDBCol>
                  <MDBCard className="text-black m-5">
                    <MDBCardBody>
                    <Link to="/student/stdprofile"><h2>Documents</h2></Link>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard className="text-black m-5">
                    <MDBCardBody>
                    <Link to="/student/stdprofile"><h2>Job Openings</h2></Link>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>

          {/* <MDBCard className="text-black m-5">
            <MDBCardBody>
              <MDBRow>
                <h2>Profile Deatils</h2>
                <Profile />
              </MDBRow>
            </MDBCardBody>
          </MDBCard>

          <MDBCard className="text-black m-5">
            <MDBCardBody>
              <MDBRow>
                <h2>Address Deatils</h2>
                <Address />
              </MDBRow>
            </MDBCardBody>
          </MDBCard>

          <MDBCard className="text-black m-5">
            <MDBCardBody>
              <MDBRow>
                <h2>Education Deatils</h2>
                <Education />
              </MDBRow>
            </MDBCardBody>
          </MDBCard> */}

        </MDBCol>
      </MDBRow>
    </div>
  )
}

export default Page
