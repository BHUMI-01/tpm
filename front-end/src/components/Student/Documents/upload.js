import React, { useEffect, useState, useCallback } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import { pdfjs } from "react-pdf";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

function UPLOAD() {
  const callback = useCallback();
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  const [tenthMarksheet, settenthMarksheet] = useState("");
  const Images = [];

  function covertToBase64(e) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    console.log(e.target.id);
    reader.onload = () => {
      console.log(reader.result);
      var Name = `${e.target.files[0].name}`;
      Images.push({ fileType: e.target.id, fileName:Name, dataImage: reader.result });
      console.log(Images);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  }

  function setDocuments() {
    localStorage.setItem("upload", JSON.stringify(Images));
  }
  function uploadImage() {
    const stdupload = JSON.parse(localStorage.getItem("upload"));
    fetch("http://localhost:5000/upload-image", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stdupload,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  const auth = JSON.parse(localStorage.getItem("stdqualify")).qualifyLevel;
  const authh = JSON.parse(localStorage.getItem("stdprofile")).disability;
  console.log(auth);
  console.log(authh);

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5">
        <MDBCardBody>
          <MDBCardHeader style={{ textAlign: "center" }}>
            UPLOAD DOCUMENTS
          </MDBCardHeader>
          <MDBRow style={{ height: "20px" }}></MDBRow>
          <form>
            <MDBRow>
              <MDBCol>
                <label htmlFor="file" style={{ paddingBottom: "10px" }}>
                  Upload High School Marksheet :
                </label>
                <input
                  id="tenthMarksheet"
                  accept="image/*, .pdf"
                  type="file"
                  onChange={covertToBase64}
                  required
                ></input>

                <button onClick={setDocuments}>Upload</button>
              </MDBCol>
              <MDBCol>
                <label htmlFor="file" style={{ paddingBottom: "10px" }}>
                  Upload Intermediate Marksheet :
                </label>
                <input
                  id="twelthMarksheet"
                  type="file"
                  accept=".png, .jpg, .jpeg, .pdf"
                  onChange={covertToBase64}
                ></input>
              </MDBCol>
            </MDBRow>
            <MDBRow style={{ height: "20px" }}></MDBRow>
            <MDBRow>
              <MDBCol>
                <label htmlFor="file" style={{ paddingBottom: "10px" }}>
                  Upload Diploma Marksheet :
                </label>
                <input
                  id="file"
                  type="file"
                  accept=".png, .jpg, .jpeg, .pdf"
                  onChange={covertToBase64}
                ></input>
              </MDBCol>
              <MDBCol></MDBCol>
            </MDBRow>
            <hr />

            {auth == "B.Tech" ? (
              <>
                <MDBRow style={{ height: "30px" }}>
                  <MDBCol>For Undergraduate:</MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <label htmlFor="Btech_marksheets">
                      Btech Marksheets (Semester Wise)
                    </label>
                    <select
                      className="form-control"
                      name="Btech_marksheets"
                      id="Btech_marksheets"
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
            ) : (
              <>
                <MDBRow style={{ height: "30px" }}>
                  <MDBCol>For PostGraduate:</MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <label htmlFor="file" style={{ paddingBottom: "10px" }}>
                      Upload Btech-Degree :
                    </label>
                    <input
                      id="file"
                      type="file"
                      accept=".png, .jpg, .jpeg, .pdf"
                      onChange={covertToBase64}
                    ></input>
                  </MDBCol>
                  <MDBCol>
                    <label htmlFor="file" style={{ paddingBottom: "10px" }}>
                      Upload Final Btech-Marksheet :
                    </label>
                    <input
                      id="file"
                      type="file"
                      accept=".png, .jpg, .jpeg, .pdf"
                      onChange={covertToBase64}
                    ></input>
                  </MDBCol>
                </MDBRow>
                <MDBRow style={{ height: "20px" }}></MDBRow>
                <MDBRow>
                  <MDBCol>
                    <label htmlFor="mtech_marksheets">
                      Mtech Marksheets (Semester Wise)
                    </label>
                    <select
                      className="form-control"
                      name="mtech_marksheets"
                      id="mtech_marksheets"
                    >
                      <option>--Select Semester--</option>
                      <option value="1st SEM"> 1st SEMESTER Marksheet</option>
                      <option value="2nd SEM"> 2nd SEMESTER Marksheet</option>
                      <option value="3rd SEM"> 3rd SEMESTER Marksheet</option>
                    </select>
                  </MDBCol>
                </MDBRow>
              </>
            )}

            <MDBRow style={{ height: "20px" }}></MDBRow>
            <hr />
            <MDBRow>
              {" "}
              {authh == "Yes" ? (
                <>
                  <MDBCol>
                    <label htmlFor="file" style={{ paddingBottom: "10px" }}>
                      Upload Disability Certificate :
                    </label>
                    <input
                      id="file"
                      type="file"
                      accept=".png, .jpg, .jpeg, .pdf"
                      onChange={covertToBase64}
                    ></input>
                  </MDBCol>
                </>
              ) : null}{" "}
              <MDBCol>
                <label htmlFor="file" style={{ paddingBottom: "10px" }}>
                  Upload Internship Certificate :
                </label>
                <input
                  id="file"
                  type="file"
                  accept=".png, .jpg, .jpeg, .pdf"
                  onChange={covertToBase64}
                ></input>
              </MDBCol>
            </MDBRow>
            <MDBRow style={{ height: "20px" }}></MDBRow>

            <MDBRow style={{ height: "20px" }}></MDBRow>
          </form>

          <MDBRow>
            <MDBCol>
              <MDBBtn type="submit" onClick={uploadImage}>
                Save
              </MDBBtn>
            </MDBCol>
            {/* <MDBCol>
              <MDBBtn onClick={uploadData}>Submit</MDBBtn>
            </MDBCol> */}
          </MDBRow>
          {/* 
          {allImage.map(( data) => {
            return (
              <Document
              key ={data._id}
                file={data.image}
                options={{
                  cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
                  cMapPacked: true,
                }}
              >
                <Page pageNumber={1} />
              </Document>
            );
          })} */}
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default UPLOAD;
