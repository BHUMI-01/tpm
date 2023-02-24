import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Student() {
  let file = "";
  const handleFileUpload = async (e) => {
    const fill = e.target.files[0];
    const base64 = await convertToBase64(fill);
    console.log(base64);
    // console.log(typeof(base64));
    file = base64;
    console.warn(file);
  };
  const auth = localStorage.getItem("stdqualify").qualifyLevel;
  // const uploadFile = async () => {
  //     const studentId = JSON.parse(localStorage.getItem("student"))._id;
  //     let result = await fetch("http://localhost:5000/upload-file", {
  //         method: 'post',
  //         body: JSON.stringify({
  //             file, studentId
  //         }),
  //         headers: {
  //             'Content-Type': 'application/json'
  //         }
  //     });

  //     result = await result.json();
  //     localStorage.setItem("upload", result);
  //     console.warn(result.file);

  // }

  const uploadData = async () => {
    const studentId = JSON.parse(localStorage.getItem("student"))._id;
    const stdprofile = JSON.parse(localStorage.getItem("stdprofile"));
    const stdperadd = JSON.parse(localStorage.getItem("stdperaddress"));
    const stdtempadd = JSON.parse(localStorage.getItem("stdtempaddress"));
    const stdeducat = JSON.parse(localStorage.getItem("stdqualify"));
    await fetch("http://localhost:5000/add-data", {
      method: "post",
      body: JSON.stringify({
        studentId,
        stdprofile,
        stdperadd,
        stdtempadd,
        stdeducat,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const save_update = () => {
    if (localStorage.getItem("profile")) {
      return (
        <Link to="/student/stdqualify">
          <MDBBtn type="submit">Save</MDBBtn>
        </Link>
      );
    } else {
      return (
        <MDBRow>
          <MDBCol>
            <MDBBtn type="submit">Save</MDBBtn>
          </MDBCol>
          <MDBCol>
            <MDBBtn onClick={uploadData}>Submit</MDBBtn>
          </MDBCol>
        </MDBRow>
      );
    }
  };

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5">
        <MDBCardBody>
          <MDBCardHeader>Upload Documents</MDBCardHeader>
          <MDBRow style={{ height: "20px" }}></MDBRow>
          <form>
            {auth=="B.Tech"?
            <>
                        <MDBRow style={{ height: "30px" }}><MDBCol>For Undergraduate:</MDBCol></MDBRow>
            <MDBRow >
              <MDBCol>
                <label htmlFor="Btech_marksheets">Btech Marksheets (Semester Wise)</label>
                <select
                  className="form-control"
                  name="Btech_marksheets"
                  id="Btech_marksheets"
                  required
                >
                  <option>--Select Semester--</option>
                  <option value="1st SEM"> 1st SEMESTER Marksheet</option>
                  <option value="2nd SEM"> 2nd SEMESTER Marksheet</option>
                  <option value="3rd SEM"> 3rd SEMESTER Marksheet</option>
                  <option value="4th SEM"> 4th SEMESTER Marksheet</option>
                  <option value="5th SEM"> 5th SEMESTER Marksheet</option>
                  <option value="6th SEM"> 6th SEMESTER Marksheet</option>
                  <option value="7th SEM"> 7th SEMESTER Marksheet</option>
                </select>
              </MDBCol>
            </MDBRow>
            </>
            :
            <>
            <MDBRow style={{ height: "20px" }}></MDBRow>
            <MDBRow style={{ height: "30px" }}><MDBCol>For PostGraduate:</MDBCol></MDBRow>
            <MDBRow>
                <MDBCol>
            <label htmlFor="file" style={{paddingBottom:"10px"}}>Upload Btech-Degree :</label>
            <input
              id="file"
              type="file"
              accept=".png, .jpg, .jpeg, .pdf"
              onChange={(e) => handleFileUpload(e)}
              required
            ></input>
            </MDBCol>
            <MDBCol>
            <label htmlFor="file" style={{paddingBottom:"10px"}}>Upload Final Btech-Marksheet :</label>
            <input
              id="file"
              type="file"
              accept=".png, .jpg, .jpeg, .pdf"
              onChange={(e) => handleFileUpload(e)}
              required
            ></input>
            </MDBCol>
            </MDBRow>
            <MDBRow style={{ height: "20px" }}></MDBRow>
            <MDBRow >
              <MDBCol>
                <label htmlFor="mtech_marksheets">Mtech Marksheets (Semester Wise)</label>
                <select
                  className="form-control"
                  name="mtech_marksheets"
                  id="mtech_marksheets"
                  required
                >
                  <option>--Select Semester--</option>
                  <option value="1st SEM"> 1st SEMESTER Marksheet</option>
                  <option value="2nd SEM"> 2nd SEMESTER Marksheet</option>
                  <option value="3rd SEM"> 3rd SEMESTER Marksheet</option>
                </select>
              </MDBCol>
            </MDBRow>
           </>}
            <MDBRow style={{ height: "20px" }}></MDBRow>
          </form>

          <MDBRow>{save_update()}</MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Student;

function convertToBase64(fill) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(fill);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
