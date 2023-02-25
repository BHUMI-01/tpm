import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AddQuali = () => {
  const [qualifyLevel, setqualifyLevel] = useState("");
  const [qualifyName, setqualifyName] = useState("");
  const [passYear, setpassYear] = useState("");
  const [board, setBoard] = useState("");
  const [rollNum, setrollNum] = useState("");
  const [resultStatus, setResultStatus] = useState("");
  const [gradeSys, setgradeSys] = useState("");
  const [grade, setGrade] = useState("");

  // const setEmpty = () => {
  //   setqualifyLevel("");
  //   setqualifyName("");
  //   setpassYear("");
  //   setBoard("");
  //   setrollNum("");
  //   setResultStatus("");
  //   setgradeSys("");
  //   setGrade("");
  // };

  // const getQualifyDetails = async () => {
  //   let result = JSON.parse(localStorage.getItem("stdqualify"));
  //   console.log(result);
  //   if (!result) {
  //     setEmpty();
  //   } else {
  //     setqualifyLevel(result.qualifyLevel);
  //     setqualifyName(result.qualifyName);
  //     setpassYear(result.passYear);
  //     setBoard(result.board);
  //     setrollNum(result.rollNum);
  //     setResultStatus(result.resultStatus);
  //     setgradeSys(result.gradeSys);
  //     setGrade(result.grade);
  //   }
  // };

  // const set_student_qualify = async () => {
  //   const profi = JSON.stringify({
  //     qualifyLevel,
  //     qualifyName,
  //     passYear,
  //     board,
  //     rollNum,
  //     resultStatus,
  //     gradeSys,
  //     grade,
  //   });
  //   const varii = JSON.parse(localStorage.getItem("stdqualify"));
  //   localStorage.setItem("stdqualify", JSON.stringify(
  //     [varii, profi]
  //   ));
  // };

  return (
    <>
     
        
          <hr/>
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
          <MDBRow style={{ height: "20px" }}></MDBRow>
 
    </>
  );
};

export default AddQuali;
