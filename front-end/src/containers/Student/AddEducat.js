import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRadio,
} from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
import { Button } from "../../components/Student/Education/Button";
import { Link } from "react-router-dom";
import AddQualify from "../../components/Student/Education/addqualify";

const AddEducat = () => {
  const [show, setShow] = useState(["Sample"]);
  const [qualifyLevel, setqualifyLevel] = useState("");
  const [qualifyName, setqualifyName] = useState("");
  const [passYear, setpassYear] = useState("");
  const [board, setBoard] = useState("");
  const [rollNum, setrollNum] = useState("");
  const [resultStatus, setResultStatus] = useState("");
  const [gradeSys, setgradeSys] = useState("");
  const [grade, setGrade] = useState("");
  useEffect(() => {
    const auth = localStorage.getItem("stdqualify");
    if (auth) {
      getQualifyDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setEmpty = () => {
    setqualifyLevel("");
    setqualifyName("");
    setpassYear("");
    setBoard("");
    setrollNum("");
    setResultStatus("");
    setgradeSys("");
    setGrade("");
  };

  const getQualifyDetails = async () => {
    let result = JSON.parse(localStorage.getItem(qualifyLevel));
    console.log(result);
    if (!result) {
      setEmpty();
    } else {
      setqualifyLevel(result.qualifyLevel);
      setqualifyName(result.qualifyName);
      setpassYear(result.passYear);
      setBoard(result.board);
      setrollNum(result.rollNum);
      setResultStatus(result.resultStatus);
      setgradeSys(result.gradeSys);
      setGrade(result.grade);
    }
  };

  const set_student_qualify = async () => {
    const profi = JSON.stringify({
      qualifyLevel,
      qualifyName,
      passYear,
      board,
      rollNum,
      resultStatus,
      gradeSys,
      grade,
    });
    localStorage.setItem(qualifyLevel, profi);
  };
  // <MDBContainer>
  //     <MDBCard
  //       onClick={() => setShow(!show)}
  //       style={{
  //         width: "155px", backgroundColor: "lightgreen"
  //       }}>
  //       <MDBCardBody>
  //         Add Education
  //       </MDBCardBody>
  //     </MDBCard>
  //   </MDBContainer>
  const shootdiv = () => {
    setShow([...show, "Sample"])
  }
  return (
    <>
      <MDBContainer fluid>
        <MDBCard className="text-black m-5">
          <MDBCardBody>
            <form>
              <h2>Qualification Details</h2>
              {/* <AddQualify /> */}
              <MDBRow style={{ height: "20px" }}></MDBRow>
              <MDBRow>
              
                <Button onClick={shootdiv} text="Call Component"/>
                {show.map((item, i)=>(<AddQualify text={item}/>))}
              </MDBRow>
            </form>
            <MDBRow style={{ height: "50px" }}></MDBRow>
            <MDBRow>
              <MDBRow>
                <MDBCol>
                  <MDBBtn
                    type="submit"
                    onClick={() => {
                      set_student_qualify();
                    }}
                  >
                    Save
                  </MDBBtn>
                </MDBCol>
                <MDBCol>
                  <Link to="/student/uploaddoc"><MDBBtn type="submit">Next</MDBBtn></Link>
                </MDBCol>
              </MDBRow>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default AddEducat;
