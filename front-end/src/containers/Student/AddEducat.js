import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { Button } from "../../components/Student/Education/Button";
import { Link } from "react-router-dom";
import AddQualify from "../../components/Student/Education/addqualify";

const AddEducat = () => {
  const [show, setShow] = useState(["Sample"]);

  const shootdiv = () => {
    setShow([...show, "Sample"]);
  }
  return (
    <>
      <MDBContainer fluid>
        <MDBCard className="text-black m-5">
          <MDBCardBody>
            <form>
              <h2>Qualification Details</h2>
              <MDBRow style={{ height: "20px" }}></MDBRow>
              {show.map((item, i) => (
                <MDBRow key={item}>
                  <AddQualify text={item} />
                  <MDBCol>
                    <Button onClick={shootdiv} text="Add Another Education" />
                  </MDBCol>
                  <MDBRow style={{ height: "15px" }} />
                </MDBRow>
              ))}
            </form>
            <MDBRow style={{ height: "50px" }}></MDBRow>
            <MDBRow>
              <MDBRow>
                <Link to="/student/uploaddoc"><MDBBtn type="submit">Next</MDBBtn></Link>
              </MDBRow>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default AddEducat;
