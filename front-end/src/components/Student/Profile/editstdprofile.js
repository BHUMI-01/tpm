import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { Country, State, City } from "country-state-city";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Editstdprofile = () => {
  const [fatherName, setfatherName] = useState("");
  const [motherName, setmotherName] = useState("");
  const [gender, setgender] = useState("");
  const [dob, setdob] = useState("");
  const [enrollNum, setenrollNum] = useState("");
  const [mobNum, setmobNum] = useState("");
  const [alternateNum, setalternateNum] = useState("");
  const [disability, setDisability] = useState("");
  const [aadharNum, setaadharNum] = useState("");
  const [bloodGroup, setbloodGroup] = useState("");
  const [caste, setcaste] = useState("");
  const [religion, setreligion] = useState("");
  const [nationality, setnationality] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const navigate = useNavigate;
  const firstN = JSON.parse(localStorage.getItem("student")).firstName;
  const middleN = JSON.parse(localStorage.getItem("student")).middleName;
  const lastN = JSON.parse(localStorage.getItem("student")).lastName;
  const idd = JSON.parse(localStorage.getItem("student"))._id;
  useEffect(() => {
    const auth = localStorage.getItem("stdprofile");
    if (auth) {
      getProductDetails();
    }
  }, []);

  const setEmpty = () => {
    setfatherName("");
    setmotherName("");
    setDisability("");
    setaadharNum("");
    setalternateNum("");
    setmobNum("");
    setenrollNum("");
    setbloodGroup("");
    setcaste("");
    setdob("");
    setgender("");
    setnationality("");
    setreligion("");
    setstate("");
    setcity("");
  };
  const getProductDetails = async () => {
    let result = JSON.parse(localStorage.getItem("stdprofile"));
    console.log(result);

    if (!result) {
      setEmpty();
    } else {
      setfatherName(result.fatherName);
      setmotherName(result.motherName);
      setDisability(result.disability);
      setaadharNum(result.aadharNum);
      setalternateNum(result.alternateNum);
      setmobNum(result.mobNum);
      setenrollNum(result.enrollNum);
      setbloodGroup(result.bloodGroup);
      setcaste(result.caste);
      setdob(result.dob);
      setgender(result.gender);
      setnationality(result.nationality);
      setreligion(result.religion);
      setstate(result.state);
      setcity(result.city);
    }
  };

  // const update_profile = async () => {
  //     const studentId = JSON.parse(localStorage.getItem("student"))._id;
  //     let result = await fetch(`http://localhost:5000/add-student-prof/${idd}`, {
  //         method: 'put',
  //         body: JSON.stringify({
  //             fatherName, motherName, gender, dob, enrollNum, mobNum, alternateNum, disability, aadharNum
  //             , bloodGroup, caste, religion, nationality, state, studentId
  //         }),
  //         headers: {
  //             'Content-Type': 'application/json'
  //         }
  //     });
  //     result = await result.json();
  //     if (result) {
  //         navigate('/stdprofile')
  //     }
  // }

  const add_student_profile = async () => {
    const studentId = JSON.parse(localStorage.getItem("student"))._id;
    const stdprofile = JSON.parse(localStorage.getItem("stdprofile"));
    let result = await fetch("http://localhost:5000/add-data", {
      method: "post",
      body: JSON.stringify({
        studentId,
        stdprofile,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
  };

  const set_student_profile = async () => {
    const profi = JSON.stringify({
      fatherName,
      motherName,
      gender,
      dob,
      enrollNum,
      mobNum,
      alternateNum,
      disability,
      aadharNum,
      bloodGroup,
      caste,
      religion,
      nationality,
      state,
      city,
    });
    localStorage.setItem("stdprofile", profi);
  };
  const save_update = () => {
    return (
      <MDBRow>
        <MDBCol>
          <MDBBtn
            type="submit"
            onClick={() => {
              set_student_profile();
              getProductDetails();
            }}
          >
            Save
          </MDBBtn>
        </MDBCol>
        <MDBCol>
          <MDBBtn type="submit" onClick={() => add_student_profile()}>
            Submit
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    );
  };

  const CountryVar = Country.getAllCountries();
  const StateVar = State.getStatesOfCountry(nationality);
  const CityVar = City.getCitiesOfState(nationality, state);

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
              EDIT PROFILE
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow style={{ height: "20px" }}></MDBRow>
          <form>
            <MDBRow>
              <MDBCol>
                <label>First Name: </label>
                <MDBInput
                  id="firstname"
                  required
                  type="text"
                  value={firstN}
                  disabled
                ></MDBInput>
              </MDBCol>
              <MDBCol>
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
                <label className="required" htmlFor="country_id">
                  Country:{" "}
                </label>
                <select
                  className="form-control select2"
                  name="country_id"
                  id="country_id"
                  aria-hidden="true"
                  value={nationality}
                  required
                  onChange={(e) => setnationality(e.target.value)}
                >
                  <option>--Select Country--</option>

                  {CountryVar.map((item) => {
                    return (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </MDBCol>
            </MDBRow>
            <MDBRow style={{ height: "20px" }}></MDBRow>
            <MDBRow>
              <MDBCol>
                <label htmlFor="province_id">State:</label>
                <select
                  className="form-control"
                  name="province_id"
                  id="province_id"
                  required
                  value={state}
                  onChange={(e) => setstate(e.target.value)}
                >
                  <option>--Select State--</option>

                  {StateVar.map((item) => {
                    return (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </MDBCol>
              <MDBCol>
                <label htmlFor="city_id">City:</label>
                <select
                  className="form-control"
                  name="city_id"
                  id="city_id"
                  required
                  value={city}
                  onChange={(e) => setcity(e.target.value)}
                >
                  <option>--Select City--</option>

                  {CityVar.map((item) => {
                    return (
                      <option key={item.latitude} value={item.name}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </MDBCol>
            </MDBRow>
            <MDBRow>
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
                  country={"us"}
                  value={alternateNum}
                  onChange={setalternateNum}
                />
              </MDBCol>
            </MDBRow>

            <MDBRow style={{ height: "20px" }}></MDBRow>
            <MDBRow>{save_update()}</MDBRow>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Editstdprofile;
