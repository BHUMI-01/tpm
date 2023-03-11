import React, { useState, useEffect } from 'react'
import {
  MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody,
  MDBCard, MDBCardBody
} from 'mdb-react-ui-kit';
import Side from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

const Page = () => {
  const authorize = JSON.parse(localStorage.getItem("token"));
  const [firstN, setFirst] = useState("");
  const [middleN, setMiddle] = useState("");
  const [lastN, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, [])
  const getData = async () => {
    if (authorize) {
      const idd = JSON.parse(localStorage.getItem("student"))._id;
      setFirst(JSON.parse(localStorage.getItem("student")).firstName);
      setMiddle(JSON.parse(localStorage.getItem("student")).middleName);
      setLast(JSON.parse(localStorage.getItem("student")).lastName);
      setEmail(JSON.parse(localStorage.getItem("student")).email);
      let result = await fetch(`http://localhost:5000/add-data/${idd}`, {
        headers: {
          authorization: JSON.parse(localStorage.getItem("token")),
        },
      });
      result = await result.json();
      console.log(result.stdprofile);
      setData(result.stdprofile);
    } else {
      navigate("/");
    }
  };

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
                    <h3>{firstN} {middleN} {lastN}</h3>
                  </MDBRow>
                  <MDBRow style={{ height: "20px" }}></MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <h6>Faculty Number : {data.faculty}</h6>
                      <h6>Course Name : {data.course}</h6>
                      <h6>Department : {data.department}</h6>
                      <h6>CPI : { }</h6>
                    </MDBCol>
                    <MDBCol>
                      <h6><i className="fa-solid fa-envelope"></i> Email : {email}</h6>
                      <h6><i className="fa-solid fa-phone"></i> Contact No : {data.mobNum}</h6>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>

          <MDBCard className="text-black m-5">
            <MDBCardBody>
              {/* 1st row */}
              <MDBTable striped>
                <MDBTableHead>
                  <tr>
                    <th>Company Name</th>
                    <th>Postition</th>
                    <th>Job Type</th>
                    <th>Apply By</th>
                    <th>Application status</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
            </MDBCardBody>
          </MDBCard>



        </MDBCol>
      </MDBRow>
    </div>
  )
}

export default Page
