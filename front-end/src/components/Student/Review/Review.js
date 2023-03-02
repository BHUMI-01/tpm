import React ,{ useState }from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRadio
} from "mdb-react-ui-kit";
import { Link ,useNavigate} from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Review = () => {
    const [nextButton, setnextbutton] = useState(true);
  const Student = JSON.parse(localStorage.getItem("student"));
  const StudentProfile = JSON.parse(localStorage.getItem("stdprofile"));
  const PerAddress = JSON.parse(localStorage.getItem("stdperaddress"));
  const StdQualification = JSON.parse(localStorage.getItem("stdqualify"));
    const navigate = useNavigate();
  const handleEdit = () => {
    navigate("/student/addstdprofile");
  };

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

  const NextButton = () => {
    navigate("/student");
  };

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
            <form>
          <MDBRow>
            <MDBCol
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              REVIEW FORM
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow>
            <MDBCol
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Profile Details
            </MDBCol>
          </MDBRow>
          <MDBRow style={{ height: "20px" }}></MDBRow>

          <MDBRow>
            <MDBCol>
              <label>First Name: </label>
              <MDBInput
                id="firstname"
                required
                type="text"
                value={Student.firstName}
                disabled
              ></MDBInput>
            </MDBCol>
            <MDBCol>
              <label>Middle Name: </label>
              <MDBInput
                id="middlename"
                value={Student.middleName}
                type="text"
                disabled
              ></MDBInput>
            </MDBCol>
            <MDBCol>
              <label>Last Name: </label>
              <MDBInput
                id="lastname"
                value={Student.lastName}
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
                value={StudentProfile.fatherName}
                pattern="[A-Z][a-zA-Z ]+"
                title="For example: Ramesh, First letter should be capital"
                disabled
              ></MDBInput>
            </MDBCol>
            <MDBCol>
              <label>Mother's Name: </label>
              <MDBInput
                id="mname"
                type="text"
                value={StudentProfile.motherName}
                pattern="[A-Z][a-zA-Z ]+"
                title="For example: Anita, First letter should be capital"
                disabled
              ></MDBInput>
            </MDBCol>
            <MDBCol>
              <label>Blood Group: </label>
              <MDBInput
                id="enumber"
                type="text"
                value={StudentProfile.bloodGroup}
                pattern="(A|B|AB|O)[+-]$"
                title="For example: B+, There should be no gap b/w letter & +/-"
                disabled
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
                value={StudentProfile.dob}
                disabled
              ></MDBInput>
            </MDBCol>
            <MDBCol>
              <label>Enrollment No:</label>
              <MDBInput
                id="enumber"
                type="text"
                value={StudentProfile.enrollNum}
                maxLength="6"
                pattern="[A-Z][A-Z]+[0-9]{4}"
                title="For example: GY6389, First two letters should be capital!"
                disabled
              ></MDBInput>
            </MDBCol>

            <MDBCol>
              <label>Aadhaar No.: </label>
              <MDBInput
                id="mnumber"
                type="tel"
                value={StudentProfile.aadharNum}
                pattern="[0-9]+"
                maxLength="12"
                title="Aadhar Number should be of 16 continuous digits."
                disabled
              ></MDBInput>
            </MDBCol>
          </MDBRow>

          <MDBRow style={{ height: "20px" }}></MDBRow>
          <MDBRow>
            <MDBCol>
              <label className="required" htmlFor="disability">
                Disability:{" "}
              </label>
              <MDBInput
                className="form-control select2"
                name="disability"
                id="disability"
                disabled
                value={StudentProfile.disability}
              ></MDBInput>
            </MDBCol>
            <MDBCol>
              <label>Religion: </label>
              <MDBInput
                className="form-control select2"
                name="religion"
                id="religion"
                disabled
                value={StudentProfile.religion}
              ></MDBInput>
            </MDBCol>
            <MDBCol>
              <label>Caste: </label>
              <MDBInput
                className="form-control select2"
                name="caste"
                id="caste"
                disabled
                aria-hidden="true"
                value={StudentProfile.caste}
              ></MDBInput>
            </MDBCol>
          </MDBRow>

          <MDBRow style={{ height: "20px" }}></MDBRow>

          <MDBRow>
            <MDBCol>
              <label className="required" htmlFor="gender">
                Gender:{" "}
              </label>
              <MDBInput
                className="form-control select2"
                name="gender"
                id="gender"
                disabled
                aria-hidden="true"
                value={StudentProfile.gender}
              ></MDBInput>
            </MDBCol>

            <MDBCol>
              <label className="required" htmlFor="country_id">
                Country:{" "}
              </label>
              <MDBInput
                className="form-control select2"
                name="country_id"
                id="country_id"
                aria-hidden="true"
                value={StudentProfile.nationality}
                disabled
              ></MDBInput>
            </MDBCol>
            <MDBCol>
              <label htmlFor="province_id">State:</label>
              <MDBInput
                className="form-control"
                name="province_id"
                id="province_id"
                disabled
                value={StudentProfile.state}
              ></MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow style={{ height: "20px" }}></MDBRow>
          <MDBRow>
            <MDBCol>
              <label htmlFor="city_id">City:</label>
              <MDBInput
                className="form-control"
                name="city_id"
                id="city_id"
                disabled
                value={StudentProfile.city}
              ></MDBInput>
            </MDBCol>
            <MDBCol>
              <label>Mobile Number</label>
              <PhoneInput value={StudentProfile.mobNum} disabled />
            </MDBCol>
            <MDBCol>
              <label>Alternate Number</label>
              <PhoneInput value={StudentProfile.alternateNum} disabled />
            </MDBCol>
          </MDBRow>

          <MDBRow style={{ height: "20px" }}></MDBRow>
          <hr />

          <MDBRow>
            <MDBCol
              md="5"
              lg="3"
              className=" d-flex align-items-center"
              style={{
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              PERMANENT ADDRESS
            </MDBCol>
            <MDBCol>
              <label className="required" htmlFor="details">
                Flat, House no., Building, Company, Apartment
              </label>
              <MDBInput
                className="form-control"
                type="text"
                name="details"
                id="details"
                disabled
                value={PerAddress.flatNo}
              />

              <MDBRow style={{ height: "10px" }}></MDBRow>
              <label htmlFor="street">Area, Street, Sector, Village</label>
              <MDBInput
                className="form-control"
                type="text"
                name="street"
                id="street"
                value={PerAddress.area}
                disabled
              />
              <MDBRow style={{ height: "10px" }}></MDBRow>
              <label htmlFor="landmark">Landmark</label>
              <MDBInput
                className="form-control"
                type="text"
                name="landmark"
                id="landmark"
                value={PerAddress.landmark}
                disabled
              />
              <MDBRow style={{ height: "10px" }}></MDBRow>
              <label className="required" htmlFor="locality">
                Locality
              </label>
              <MDBInput
                className="form-control"
                type="text"
                name="locality"
                id="locality"
                value={PerAddress.locality}
                disabled
              />
            </MDBCol>

            <MDBCol>
              <MDBRow style={{ height: "24px" }}></MDBRow>
              <label className="required" htmlFor="country_id">
                Country
              </label>
              <MDBInput
                className="form-control select2"
                name="country_id"
                id="country_id"
                value={PerAddress.country}
                disabled
              />
              <MDBRow style={{ height: "10px" }}></MDBRow>
              <label htmlFor="province_id">Province</label>
              <MDBInput
                className="form-control"
                name="province_id"
                id="province_id"
                value={PerAddress.province}
                disabled
              />

              <MDBRow style={{ height: "10px" }}></MDBRow>
              <label htmlFor="city_id">City:</label>
              <MDBInput
                className="form-control"
                name="city_id"
                id="city_id"
                disabled
                value={PerAddress.city}
              />
              <MDBRow style={{ height: "10px" }}></MDBRow>
              <label className="required" htmlFor="postal_code">
                Postal Code
              </label>
              <MDBInput
                id="postal_code"
                className="form-control"
                type="text"
                name="postal_code"
                value={PerAddress.postalCode}
                maxLength="6"
                disabled
              />
            </MDBCol>
          </MDBRow>

          <MDBRow style={{ height: "20px" }}></MDBRow>
          <hr />
          <MDBRow>
            <MDBCol
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "18px",
                paddingBottom: "20px",
              }}
            >
              QUALIFICATION
            </MDBCol>
          </MDBRow>
          {StdQualification.map((item, i) => (
            <>
              <MDBRow key={item.qualifyLevel}>
                <MDBCol
                  md="5"
                  lg="3"
                  className=" d-flex align-items-center"
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  {item.qualifyLevel}
                </MDBCol>
                <MDBCol>
                  <label>Course Name</label>
                  <MDBInput
                    id="enumber"
                    type="text"
                    value={item.qualifyName}
                    disabled
                  ></MDBInput>
                  <MDBRow style={{ height: "10px" }}></MDBRow>
                  <label>Year Of Passing:</label>
                  <MDBInput
                    id="enumber"
                    type="text"
                    value={item.passYear}
                    maxLength="4"
                    pattern="[0-9]+"
                    disabled
                  ></MDBInput>
                  <MDBRow style={{ height: "10px" }}></MDBRow>
                  <label>Result :</label>
                  <MDBInput
                    className="form-control select2"
                    name="result"
                    id="result"
                    disabled
                    aria-hidden="true"
                    value={item.resultStatus}
                  />

                  <MDBRow style={{ height: "10px" }}></MDBRow>

                  <label>Grade / % :</label>
                  <MDBInput
                    id="enumber"
                    type="text"
                    value={item.grade}
                    pattern="[0-9]+"
                    disabled
                  ></MDBInput>
                </MDBCol>
                <MDBCol>
                  <label>Roll No :</label>
                  <MDBInput
                    id="enumber"
                    type="text"
                    value={item.rollNum}
                    disabled
                  ></MDBInput>
                  <MDBRow style={{ height: "10px" }}></MDBRow>
                  <label>Board :</label>
                  <MDBInput
                    id="enumber"
                    type="text"
                    value={item.board}
                    disabled
                  ></MDBInput>
                  <MDBRow style={{ height: "10px" }}></MDBRow>

                  <label>Grading System :</label>
                  <MDBInput
                    className="form-control select2"
                    name="grading system"
                    id="grading system"
                    disabled
                    aria-hidden="true"
                    value={item.gradeSys}
                  />
                </MDBCol>
              </MDBRow>
              <hr />
            </>
          ))}

          <MDBRow style={{ height: "20px" }}></MDBRow>
          <MDBRow style={{ height: "40px", paddingLeft: "20px" }}>
                  <MDBRadio
                    name="flexRadioDefault"
                    onClick={() => setnextbutton(false)}
                    style={{ fontsize: "16px", fontweight: "bold" }}
                    id="flexRadioDefault1"
                    label="I have read all the information carefully!"
                  />
                </MDBRow>
          <MDBRow>
            <MDBRow>
              <MDBCol>
                <MDBBtn type="button" onClick={handleEdit}>
                  Edit
                </MDBBtn>
              </MDBCol>
              <MDBCol>
    
                <MDBBtn
                  type="submit"
                  onClick={() => {
                    uploadData();
                    NextButton();
                  }}
                    disabled={nextButton}
                >
                  Submit
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBRow>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Review;