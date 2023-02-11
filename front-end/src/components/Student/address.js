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
import { Link } from 'react-router-dom';
function Address() {
    const [peraddresses, setPeraddress] = useState([]);
    const [tempaddresses, setTempaddress] = useState([]);
    const idd = JSON.parse(localStorage.getItem("student"))._id;
    useEffect(() => {
        getPerAddress();
        getTempAddress();
    }, []);

    const getPerAddress = async () => {
        let result = await fetch(`http://localhost:5000/peraddresses/${idd}`);
        result = await result.json();
        setPeraddress(result);
        localStorage.setItem("peraddress", JSON.stringify(result));
    }
    
    const getTempAddress = async () => {
        let result = await fetch(`http://localhost:5000/tempaddresses/${idd}`);
        result = await result.json();
        setTempaddress(result);
        localStorage.setItem("tempaddress", JSON.stringify(result));
    }

    return (
        <MDBContainer fluid>
            <MDBRow>
                <MDBCol>
                    <MDBCard className='text-black m-5'>
                        <MDBCardBody>
                            <h5>Permanent Address</h5>
                            <hr />
                            <MDBRow style={{ height: "30px", paddingLeft: "20px" }}>{peraddresses.flatNo}, {peraddresses.area}, {peraddresses.landmark}, {peraddresses.locality}</MDBRow>
                            <MDBRow style={{ height: "30px", paddingLeft: "20px" }}>{peraddresses.city}, {peraddresses.postalCode}</MDBRow>
                            <MDBRow style={{ height: "30px", paddingLeft: "20px" }}>{peraddresses.country}, {peraddresses.province}</MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <Link to='/editstdperaddress'><MDBBtn>Edit</MDBBtn></Link>
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
                            <MDBRow style={{ height: "30px", paddingLeft: "20px" }}>{tempaddresses.flatNo}, {tempaddresses.area}, {tempaddresses.landmark}, {tempaddresses.locality}</MDBRow>
                            <MDBRow style={{ height: "30px", paddingLeft: "20px" }}>{tempaddresses.city}, {tempaddresses.postalCode}</MDBRow>
                            <MDBRow style={{ height: "30px", paddingLeft: "20px" }}>{tempaddresses.country}, {tempaddresses.province}</MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <Link to='/editstdtempaddress'><MDBBtn>Edit</MDBBtn></Link>
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
