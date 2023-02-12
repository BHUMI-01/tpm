import React from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Register2 = () => {


    return (
        <MDBContainer fluid>
            <MDBCard className="text-black m-5" style={{ borderRadius: "0px" }}>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol md={7} style={{ textAlign: "justify", padding: "40px" }}>
                            <h1>How do you want to use<br />Placement Cell?</h1>
                            <MDBRow style={{ height: "30px" }}></MDBRow>
                            <MDBCard style={{ borderRadius: "0px", width: "50%" }}>
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol md={1}><i class="fa-solid fa-magnifying-glass"></i></MDBCol>
                                        <MDBCol md={11}><Link to="/compregister">I'm here to hire tech talent.</Link></MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>

                            <MDBRow style={{ height: "30px" }}></MDBRow>
                            <MDBCard style={{ borderRadius: "0px", width: "50%" }}>
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol md={1}><i class="fa-solid fa-arrow-right-from-bracket"></i></MDBCol>
                                        <MDBCol md={11}><Link to="/stdregister">I'm here to participate.</Link></MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>


                        <MDBCol md={5}>
                            <MDBCardImage src="./training.jpeg" fluid />
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}

export default Register2;
