import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBRadio,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Country, State, City } from "country-state-city";
import AddTempaddress from "./AddTempAddress";

function AddPeraddress() {
  const [show, setShow] = useState(false);
  const [flatNo, setflatNo] = useState("");
  const [area, setarea] = useState("");
  const [landmark, setlandmark] = useState("");
  const [locality, setlocality] = useState("");
  const [city, setcity] = useState("");
  const [postalCode, setpostalCode] = useState("");
  const [country, setcountry] = useState("");
  const [province, setprovince] = useState("");
  console.log(show);
  useEffect(() => {
    const auth = localStorage.getItem("stdperaddress");
    const author = localStorage.getItem("stdtempaddress");
    if (auth) {
      getPerAddressDetails();
    }
    if(auth==author)
    {
      setShow(true);
    }

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

  const getPerAddressDetails = async () => {
    let result = JSON.parse(localStorage.getItem("stdperaddress"));
    console.log(result);
    if (!result) {
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

  const set_student_address = async () => {
    const profi = JSON.stringify({
      flatNo,
      area,
      landmark,
      locality,
      city,
      postalCode,
      country,
      province,
    });
    localStorage.setItem("stdperaddress", profi);
    if (show) {
      localStorage.setItem("stdtempaddress", profi);
    }
  };

  const CountryVar = Country.getAllCountries();
  const StateVar = State.getStatesOfCountry(country);
  const CityVar = City.getCitiesOfState(country, province);

  return (
    <>
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
              <form action="#">
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
                    <label htmlFor="street">
                      Area, Street, Sector, Village
                    </label>
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
                  <MDBRow>
                    <MDBCol>
                      <MDBBtn
                        type="submit"
                        onClick={() => {
                          set_student_address();
                          getPerAddressDetails();
                        }}
                      >
                        Save
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol>
                      <Link to="/student/addstdeducat">
                        <MDBBtn type="submit">Next</MDBBtn>
                      </Link>
                    </MDBCol>
                  </MDBRow>
                </MDBRow>
                <MDBRow style={{ height: "20px", paddingLeft:"20px" }}></MDBRow>
                <MDBRow  style={{ height: "20px", paddingLeft:"20px" }}>
                  <MDBRadio
                    name="flexRadioDefault"
                    checked={show}
                    onClick={() => setShow(!show)}
                    style={{ fontsize: "16px", fontweight: "bold"}}
                    id="flexRadioDefault1"
                    label="SAME AS CORRESSPONDING ADDRESS"
                  />
                </MDBRow>
              </form>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
      {show ? null : <AddTempaddress />}
    </>
  );
}

export default AddPeraddress;
