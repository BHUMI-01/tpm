import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Editqualify = () => {
  const [qualifyLevel, setqualifyLevel] = useState("");
  const [qualifyName, setqualifyName] = useState("");
  const [passYear, setpassYear] = useState("");
  const [board, setBoard] = useState("");
  const [rollNum, setrollNum] = useState("");
  const [resultStatus, setResultStatus] = useState("");
  const [gradeSys, setgradeSys] = useState("");
  const [grade, setGrade] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getQualifyDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getQualifyDetails = async () => {
    let resu = await fetch(`http://localhost:5000/qualifyyy/${id}`);
    resu = await resu.json();
    setqualifyLevel(resu.qualifyLevel);
    setqualifyName(resu.qualifyName);
    setpassYear(resu.passYear);
    setBoard(resu.board);
    setrollNum(resu.rollNum);
    setResultStatus(resu.resultStatus);
    setgradeSys(resu.gradeSys);
    setGrade(resu.grade);
  };

  const update_qualify = async () => {
    const studentId = JSON.parse(localStorage.getItem("student"))._id;
    await fetch(
      `http://localhost:5000/add-student-qualify/${id}`,
      {
        method: "put",
        body: JSON.stringify({
          qualifyLevel,
          qualifyName,
          studentId,
          passYear,
          board,
          rollNum,
          resultStatus,
          gradeSys,
          grade,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // result = await result.json();
  };

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5">
        <MDBCardBody>
        <form>
            <MDBRow>
              <MDBCol>Qualification Details</MDBCol>
              <MDBCol>
                <Link to="/student/stdqualify">
                  <MDBBtn>Back</MDBBtn>
                </Link>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <label>Qualification Level :</label>
                <select
                  className="form-control select2"
                  name="qualification"
                  id="qualification"
                  required
                  aria-hidden="true"
                  value={qualifyLevel}
                  onChange={(e) => setqualifyLevel(e.target.value)}
                >
                  <option value="">Please select</option>
                  <option value="High School">High School</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Undergraduation(B.Tech)">
                    Undergraduation(B.Tech)
                  </option>
                  <option value="Graduation(M.Tech)">Graduation(M.Tech)</option>
                </select>
              </MDBCol>
              <MDBCol>
                <label>Course Name</label>
                <MDBInput
                  id="enumber"
                  type="text"
                  value={qualifyName}
                  onChange={(e) => setqualifyName(e.target.value)}
                  required
                ></MDBInput>
              </MDBCol>
            </MDBRow>

            <MDBRow style={{ height: "20px" }}></MDBRow>

            <MDBRow>
              <MDBCol>
                <label>Year Of Passing:</label>
                <MDBInput
                  id="enumber"
                  type="text"
                  value={passYear}
                  maxLength="4"
                  pattern="[0-9]+"
                  onChange={(e) => setpassYear(e.target.value)}
                  required
                ></MDBInput>
              </MDBCol>
              <MDBCol>
                <label>Roll No :</label>
                <MDBInput
                  id="enumber"
                  type="text"
                  value={rollNum}
                  pattern="[0-9]*[a-zA-Z]*[0-9]+"
                  onChange={(e) => setrollNum(e.target.value)}
                  required
                ></MDBInput>
              </MDBCol>
            </MDBRow>

            <MDBRow style={{ height: "20px" }}></MDBRow>

            <MDBRow>
              <MDBCol>
                <label>Board :</label>
                <MDBInput
                  id="enumber"
                  type="text"
                  value={board}
                  onChange={(e) => setBoard(e.target.value)}
                  required
                ></MDBInput>
              </MDBCol>
              <MDBCol>
                <label>Result :</label>
                <select
                  className="form-control select2"
                  name="result"
                  id="result"
                  required
                  aria-hidden="true"
                  value={resultStatus}
                  onChange={(e) => setResultStatus(e.target.value)}
                >
                  <option value="">Please select</option>
                  <option value="Passed">Passed</option>
                  <option value="Failed">Failed</option>
                  <option value="Awaited">Awaited</option>
                </select>
              </MDBCol>
            </MDBRow>

            <MDBRow style={{ height: "20px" }}></MDBRow>

            <MDBRow>
              <MDBCol>
                <label>Grading System :</label>
                <select
                  className="form-control select2"
                  name="grading system"
                  id="grading system"
                  required
                  aria-hidden="true"
                  value={gradeSys}
                  onChange={(e) => setgradeSys(e.target.value)}
                >
                  <option value="">Please select</option>
                  <option value="CPI">CPI</option>
                  <option value="CGPA">CGPA</option>
                  <option value="Percentage">Percentage</option>
                  </select>
              </MDBCol>
              <MDBCol>
                <label>Grade / % :</label>
                <MDBInput
                  id="enumber"
                  type="text"
                  value={grade}
                  pattern="[0-9]+"
                  onChange={(e) => setGrade(e.target.value)}
                  required
                ></MDBInput>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <MDBBtn type="submit" onClick={() => update_qualify()}>
                  Update
                </MDBBtn>
              </MDBCol>
              <MDBCol>
                <Link to="/student/stdqualify">
                  <MDBBtn>Back</MDBBtn>
                </Link>
              </MDBCol>
            </MDBRow>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Editqualify;
