import React, { useState, useEffect } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
}
    from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
function Address() {
    const authorize = JSON.parse(localStorage.getItem("token"));
    const navigate = useNavigate();
    const [peraddresses, setPeraddress] = useState([]);
    const [tempaddresses, setTempaddress] = useState([]);

    useEffect(() => {
        getPerAddress();
        getTempAddress();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getPerAddress = async () => {
        if (authorize) {
            const idd = JSON.parse(localStorage.getItem("student"))._id;
            let result = await fetch(`http://localhost:5000/add-data/${idd}`, {
                headers: {
                    "authorization": JSON.parse(localStorage.getItem("token")),
                },
            });
            result = await result.json();
            setPeraddress(result.stdperadd);
            localStorage.setItem("stdperaddress", JSON.stringify(result.stdperadd));
        }
        else {
            navigate("/");
        }
    }

    const getTempAddress = async () => {
        if (authorize) {
            const idd = JSON.parse(localStorage.getItem("student"))._id;
            let result = await fetch(`http://localhost:5000/add-data/${idd}`, {
                headers: {
                    "authorization": JSON.parse(localStorage.getItem("token")),
                },
            });
            result = await result.json();
            setTempaddress(result.stdtempadd);
            localStorage.setItem("stdperaddress", JSON.stringify(result.stdtempadd));
        }
        else {
            navigate("/");
        }
    }

    return (
        <MDBContainer fluid>
            <MDBRow>
                <MDBCol>
                    <MDBCard className='text-black m-5'>
                        <MDBCardBody>
                            <h5>Permanent Address</h5>
                            <hr />
                            <MDBRow style={{ height: "30px", paddingLeft: "20px" }}>{peraddresses.flatNo} {peraddresses.area} {peraddresses.landmark} <br></br>{peraddresses.locality}</MDBRow><br></br><br></br><br></br>
                            <MDBRow style={{ height: "30px", paddingLeft: "20px" }}>{peraddresses.city} {peraddresses.postalCode}</MDBRow>
                            <MDBRow style={{ height: "30px", paddingLeft: "20px" }}>{peraddresses.country} {peraddresses.province}</MDBRow><br></br>
                            <MDBRow>
                                <MDBCol>
                                    <Link to='/student/editstdperaddress'><MDBBtn>Edit</MDBBtn></Link>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol>
                    <MDBCard className='text-black m-5'>
                        <MDBCardBody>
                            <h5>Temporary Address</h5>
                            <hr />
                            <MDBRow style={{ height: "30px", paddingLeft: "20px" }}>{tempaddresses.flatNo} {tempaddresses.area} {tempaddresses.landmark}<br></br> {tempaddresses.locality}</MDBRow><br></br><br></br><br></br>
                            <MDBRow style={{ height: "30px", paddingLeft: "20px" }}>{tempaddresses.city} {tempaddresses.postalCode}</MDBRow><br></br>
                            <MDBRow style={{ height: "30px", paddingLeft: "20px" }}>{tempaddresses.country} {tempaddresses.province}</MDBRow><br></br>
                            <MDBRow>
                                <MDBCol>
                                    <Link to='/student/editstdtempaddress'><MDBBtn>Edit</MDBBtn></Link>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Address
