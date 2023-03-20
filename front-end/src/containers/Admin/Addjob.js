import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBInput,
  MDBCardBody,
  MDBCol,
  MDBTextArea
} from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

const AddJob = () => {
  const navigate = useNavigate();
  const [companyName, setcompanyName] = useState("");
  const [position, setposition] = useState("");
  const [lastApplyDate, setlastApplyDate] = useState("");
  const [requirements, setrequirements] = useState("");
  const [stipend, setstipend] = useState("");
  const [supportiveDocs, setsupportiveDocs] = useState("");
  const [description, setdescription] = useState("");
  useEffect(() => {
    const authorize = localStorage.getItem("token");
    if (authorize) {
      getJobs();
    } else {
      navigate("/");
    }
  }, []);

  const getJobs = async () => {
    let result = JSON.parse(localStorage.getItem("jobs"));
    if (result) {
      setcompanyName(result.companyName);
      setposition(result.position);
      setstipend(result.stipend);
      setlastApplyDate(result.lastApplyDate);
      setdescription(result.description);
      setrequirements(result.requirements);
    }
  };

  const set_Job = async () => {
    const profi = JSON.stringify({
      companyName,
      position,
      lastApplyDate,
      requirements,
      stipend,
      supportiveDocs,
      description,
    });
    localStorage.setItem("jobs", profi);
  };

  const covertToBase64 = (e) => {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result); 
      setsupportiveDocs(reader.result);
    };
  };

  const uploadJob = async () => {
    await fetch("http://localhost:5000/upload-job", {
      method: "post",
      body: JSON.stringify({
        companyName,
        position,
        lastApplyDate,
        requirements,
        stipend,
        supportiveDocs,
        description,
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: JSON.parse(localStorage.getItem("token")),
      },
    });
  };

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              ADD JOB OPPORTUNITY
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow style={{ height: "20px" }}></MDBRow>
          <form onSubmit={uploadJob}>
            <MDBRow>
              <MDBCol>
                <label>Company Name: </label>
                <MDBInput
                  id="companyName"
                  required
                  type="text"
                  value={companyName}
                  onChange={(e) => setcompanyName(e.target.value)}
                ></MDBInput>
              </MDBCol>
              <MDBCol>
                <label>Position Name: </label>
                <MDBInput
                  id="position"
                  required
                  type="text"
                  value={position}
                  onChange={(e) => setposition(e.target.value)}
                ></MDBInput>
              </MDBCol>
            </MDBRow>
            <MDBRow style={{ height: "20px" }}></MDBRow>
            <MDBRow>
              <MDBCol>
                <label>Last Date For Registration: </label>
                <MDBInput
                  id="lastApplyBy"
                  required
                  type="date"
                  value={lastApplyDate}
                  onChange={(e) => setlastApplyDate(e.target.value)}
                ></MDBInput>
              </MDBCol>
              <MDBCol>
                <label>Stipend : </label>
                <MDBInput
                  id="stipend"
                  required
                  type="text"
                  value={stipend}
                  onChange={(e) => setstipend(e.target.value)}
                ></MDBInput>
              </MDBCol>
              
            </MDBRow>

            <MDBRow style={{ height: "20px" }}></MDBRow>
            <MDBRow>
              <MDBCol>
                <label>Upload SupportiveDocs: </label>
                <input
                  id="supportivedoc"
                  accept=".pdf, .jpg, .jpeg, .doc"
                  type="file"
                  onChange={covertToBase64}
                ></input>
              </MDBCol>
            </MDBRow>
            <MDBRow style={{ height: "20px" }}></MDBRow>
            <MDBRow>
              <MDBCol>
                <label>Requirements: </label>
                <MDBTextArea
                  id="description"
                  required
                  type="text"
                  value={requirements}
                  rows={4}
                  onChange={(e) => setrequirements(e.target.value)}
                ></MDBTextArea>
              </MDBCol>
              <MDBCol>
                <label>Description: </label>
                <MDBTextArea
                  id="description"
                  required
                  type="text"
                  rows={4}
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                ></MDBTextArea>
              </MDBCol>
            </MDBRow>
            <MDBRow style={{ height: "20px" }}></MDBRow>
            <MDBRow>
              <MDBCol>
                <MDBBtn type="submit" onClick={set_Job}>
                  Save
                </MDBBtn>
              </MDBCol>
            </MDBRow>
            {/* <MDBCol>
                <label>Middle Name: </label>
                <MDBInput
                  id="middlename"
                  value={middleN}
                  type="text"
                  disabled
                ></MDBInput>
              </MDBCol>
              <MDBCol>
                <label>Last Name: </label>
                <MDBInput
                  id="lastname"
                  value={lastN}
                  required
                  type="text"
                  disabled
                ></MDBInput>
              </MDBCol>
            </MDBRow>
            <MDBRow style={{ height: "20px" }}></MDBRow>
            <MDBRow>
              <MDBCol>
                <label>Father's Name: </label>
                <MDBInput
                  id="fname"
                  type="text"
                  value={fatherName}
                  onChange={(e) => setfatherName(e.target.value)}
                  pattern="[a-zA-Z][a-zA-Z ]+"
                  required
                ></MDBInput>
              </MDBCol>
              <MDBCol>
                <label>Mother's Name: </label>
                <MDBInput
                  id="mname"
                  type="text"
                  value={motherName}
                  onChange={(e) => setmotherName(e.target.value)}
                  pattern="[a-zA-Z][a-zA-Z ]+"
                  required
                ></MDBInput>
              </MDBCol>
              <MDBCol>
                <label>Blood Group: </label>
                <MDBInput
                  id="enumber"
                  type="text"
                  value={bloodGroup}
                  onChange={(e) => setbloodGroup(e.target.value)}
                  pattern="(A|B|AB|0)[+-]$"
                  required
                ></MDBInput>
              </MDBCol>
            </MDBRow>

            <MDBRow style={{ height: "20px" }}></MDBRow>
            <MDBRow>
              <MDBCol>
                <label>Department: </label>
                <MDBInput
                  id="fname"
                  type="text"
                  value={department}
                  onChange={(e) => setDepartmnet(e.target.value)}
                  pattern="[A-Z][a-zA-Z ]+"
                  title="For example: Computer Engineering, First letter should be capital"
                  required
                ></MDBInput>
              </MDBCol>
              <MDBCol>
                <label>Faculty Number: </label>
                <MDBInput
                  id="mname"
                  type="text"
                  value={faculty}
                  maxLength="8"
                  onChange={(e) => setFacultyNum(e.target.value)}
                  title="For example: 19COB001"
                  required
                ></MDBInput>
              </MDBCol>
              <MDBCol>
                <label>Roll Number: </label>
                <MDBInput
                  id="enumber"
                  type="text"
                  value={rollNum}
                  onChange={(e) => setrollNum(e.target.value)}
                  maxLength="5"
                  pattern="[A-Z]+[0-9]{4}"
                  title="For example: A7667, FIRST LETTER SHOULD BE CAPITAL"
                  required
                ></MDBInput>
              </MDBCol>
            </MDBRow>

            <MDBRow style={{ height: "20px" }}></MDBRow>
            <MDBRow>
              <MDBCol>
                <label>Date</label>
                <MDBInput
                  id="dob"
                  type="date"
                  value={dob}
                  onChange={(e) => setdob(e.target.value)}
                  required
                ></MDBInput>
              </MDBCol>
              <MDBCol>
                <label>Enrollment No:</label>
                <MDBInput
                  id="enumber"
                  type="text"
                  value={enrollNum}
                  onChange={(e) => setenrollNum(e.target.value)}
                  maxLength="6"
                  pattern="[A-Z][A-Z]+[0-9]{4}"

                  required
                ></MDBInput>
              </MDBCol>

              <MDBCol>
                <label>Aadhaar No.: </label>
                <MDBInput
                  id="mnumber"
                  type="tel"
                  value={aadharNum}
                  onChange={(e) => setaadharNum(e.target.value)}
                  pattern="[0-9]+"
                  maxLength="12"
                  required
                ></MDBInput>
              </MDBCol>
            </MDBRow>
            <MDBRow style={{ height: "20px" }}></MDBRow>
            <MDBRow>
              <MDBCol>
                <label className="required" htmlFor="disability">
                  Disability:{" "}
                </label>
                <select
                  className="form-control select2"
                  name="disability"
                  id="disability"
                  required
                  aria-hidden="true"
                  value={disability}
                  onChange={(e) => setDisability(e.target.value)}
                >
                  <option value="">Please select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </MDBCol>
              <MDBCol>
                <label>Religion: </label>
                <select
                  className="form-control select2"
                  name="religion"
                  id="religion"
                  required
                  aria-hidden="true"
                  value={religion}
                  onChange={(e) => setreligion(e.target.value)}
                >
                  <option value="">Please select</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Christian">Christian</option>
                  <option value="Sikh">Sikh</option>
                  <option value="Budhist">Budhist</option>
                  <option value="other2">other</option>
                </select>
              </MDBCol>
              <MDBCol>
                <label>Caste: </label>
                <select
                  className="form-control select2"
                  name="caste"
                  id="caste"
                  required
                  aria-hidden="true"
                  value={caste}
                  onChange={(e) => setcaste(e.target.value)}
                >
                  <option value="">Please select</option>
                  <option value="GEN">GEN</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                  <option value="GEN-EWS">GEN-EWS</option>
                  <option value="OBC">OBC</option>
                  <option value="other">other</option>
                </select>
              </MDBCol>
            </MDBRow>
            <MDBRow style={{ height: "20px" }}></MDBRow>
            <MDBRow>
              <MDBCol>
                <label className="required" htmlFor="gender">
                  Gender:{" "}
                </label>
                <select
                  className="form-control select2"
                  name="gender"
                  id="gender"
                  required
                  aria-hidden="true"
                  value={gender}
                  onChange={(e) => setgender(e.target.value)}
                >
                  <option value="">Please select</option>
                  <option value="Male">MALE</option>
                  <option value="Female">FEMALE</option>
                  <option value="Other">Other</option>
                </select>
              </MDBCol>

              <MDBCol>
                <label>Mobile Number</label>
                <PhoneInput
                  country={"in"}
                  value={mobNum}
                  onChange={setmobNum}
                />
              </MDBCol>
              <MDBCol>
                <label>Alternate Number</label>
                <PhoneInput
                  country={"in"}
                  value={alternateNum}
                  onChange={setalternateNum}
                />
              </MDBCol>
            </MDBRow>
            
            <MDBRow style={{ height: "20px" }}></MDBRow>
            <MDBRow>
              <MDBCol>
                <label className="required" htmlFor="disability">
                  Course Name:{" "}
                </label>
                <select
                  className="form-control select2"
                  name="course"
                  id="course"
                  required
                  aria-hidden="true"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                >
                  <option value="">Please select</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="M.Tech">M.Tech</option>
                </select>
              </MDBCol>
            </MDBRow>

            <MDBRow style={{ height: "20px" }}></MDBRow>

            <MDBRow></MDBRow>

            <MDBRow style={{ height: "20px" }}></MDBRow>
            <MDBRow>
              <MDBRow>
                <MDBCol>
                  <MDBBtn
                    type="submit"
                    onClick={() => { update_profile(); }}
                  >
                    Update
                  </MDBBtn>
                </MDBCol>
                <MDBCol>
                  <Link to='/student/stdprofile'><MDBBtn>Back</MDBBtn></Link>
                </MDBCol>
              </MDBRow>
            </MDBRow> */}
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default AddJob;
