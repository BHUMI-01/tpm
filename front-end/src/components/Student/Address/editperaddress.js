import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Country, State, City } from "country-state-city";

function EditPeraddress() {
  const [flatNo, setflatNo] = useState("");
  const [area, setarea] = useState("");
  const [landmark, setlandmark] = useState("");
  const [locality, setlocality] = useState("");
  const [city, setcity] = useState("");
  const [postalCode, setpostalCode] = useState("");
  const [country, setcountry] = useState("");
  const [province, setprovince] = useState("");

  useEffect(() => {
    getPerAddressDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setEmpty = () => {
    setflatNo("");
    setarea("");
    setlandmark("");
    setlocality("");
    setcity("");
    setpostalCode("");
    setcountry("");
    setprovince("");
  };
  const idd = JSON.parse(localStorage.getItem("student"))._id;
  const getPerAddressDetails = async () => {
    let result = await fetch(`http://localhost:5000/peraddresses/${idd}`);
    result = await result.json();
    if (result.result === "No User Found") {
      setEmpty();
    } else {
      setflatNo(result.flatNo);
      setarea(result.area);
      setlandmark(result.landmark);
      setlocality(result.locality);
      setcity(result.city);
      setpostalCode(result.postalCode);
      setcountry(result.country);
      setprovince(result.province);
    }
  };
  const add_studentper_address = async () => {
    const studentId = JSON.parse(localStorage.getItem("student"))._id;
    await fetch("http://localhost:5000/add-stdper-address", {
      method: "post",
      body: JSON.stringify({
        flatNo,
        area,
        landmark,
        locality,
        city,
        postalCode,
        country,
        province,
        studentId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // result = await result.json();
  };

  const update_address = async () => {
    const studentId = JSON.parse(localStorage.getItem("student"))._id;
    await fetch(`http://localhost:5000/add-per-address/${idd}`, {
      method: "put",
      body: JSON.stringify({
        flatNo,
        area,
        landmark,
        locality,
        city,
        postalCode,
        country,
        province,
        studentId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // result = await result.json();
  };

  const save_update = () => {
    if (localStorage.getItem("profile")) {
      const auth = JSON.parse(localStorage.getItem("peraddress"))._id;
      const authh = JSON.parse(localStorage.getItem("peraddress")).result;
      if (auth) {
        return (
          <Link to="/student/stdaddress">
            <MDBBtn type="submit" onClick={() => update_address()}>
              Update
            </MDBBtn>
          </Link>
        );
      } else if (authh) {
        return (
          <Link to="/student/stdaddress">
            <MDBBtn type="submit" onClick={() => add_studentper_address()}>
              Save
            </MDBBtn>
          </Link>
        );
      }
    } else {
      return (
        <MDBRow>
          <MDBCol>
            <MDBBtn type="submit" onClick={() => add_studentper_address()}>
              Save
            </MDBBtn>
          </MDBCol>
          <MDBCol>
            <Link to="/student/addstdqualify">
              <MDBBtn>Next</MDBBtn>
            </Link>
          </MDBCol>
        </MDBRow>
      );
    }
  };
  const CountryVar = Country.getAllCountries();
  const StateVar = State.getStatesOfCountry(country);
  const CityVar = City.getCitiesOfState(country, province);

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
              EDIT PERMANENT ADDRESS
            </MDBCol>
          </MDBRow>
          <MDBRow style={{ height: "20px" }}></MDBRow>
          <MDBRow>
            <form>
              <MDBRow>
                <MDBCol>
                  <label className="required" htmlFor="details">
                    Flat, House no., Building, Company, Apartment
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="details"
                    id="details"
                    required
                    value={flatNo}
                    onChange={(e) => setflatNo(e.target.value)}
                  />
                </MDBCol>
                <MDBCol>
                  <label htmlFor="street">Area, Street, Sector, Village</label>
                  <input
                    className="form-control"
                    type="text"
                    name="street"
                    id="street"
                    value={area}
                    required
                    onChange={(e) => setarea(e.target.value)}
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol>
                  <label htmlFor="landmark">Landmark</label>
                  <input
                    className="form-control"
                    type="text"
                    name="landmark"
                    id="landmark"
                    value={landmark}
                    onChange={(e) => setlandmark(e.target.value)}
                  />
                </MDBCol>
                <MDBCol>
                  <label className="required" htmlFor="locality">
                    Locality
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="locality"
                    id="locality"
                    value={locality}
                    onChange={(e) => setlocality(e.target.value)}
                    required
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <label className="required" htmlFor="country_id">
                    Country
                  </label>
                  <select
                    className="form-control select2"
                    name="country_id"
                    id="country_id"
                    value={country}
                    onChange={(e) => setcountry(e.target.value)}
                    required
                    aria-hidden="true"
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
                <MDBCol>
                  <label htmlFor="province_id">Province</label>
                  <select
                    className="form-control"
                    name="province_id"
                    id="province_id"
                    value={province}
                    onChange={(e) => setprovince(e.target.value)}
                    required
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
              </MDBRow>

              <MDBRow>
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
                <MDBCol>
                  <label className="required" htmlFor="postal_code">
                    Postal Code
                  </label>
                  <input
                    id="postal_code"
                    className="form-control"
                    type="text"
                    name="postal_code"
                    value={postalCode}
                    onChange={(e) => setpostalCode(e.target.value)}
                    required
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow style={{ height: "20px" }}></MDBRow>
              <MDBRow>
                <MDBCol>{save_update()}</MDBCol>
                <MDBCol>
                  <Link to="/student/stdaddress">
                    <MDBBtn>Back</MDBBtn>
                  </Link>
                </MDBCol>
              </MDBRow>
            </form>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default EditPeraddress;
