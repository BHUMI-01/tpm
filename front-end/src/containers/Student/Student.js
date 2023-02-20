import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtnGroup
} from 'mdb-react-ui-kit';
import { Link, Outlet } from 'react-router-dom';

function Student() {
    return (
        <MDBContainer className="my-5 gradient-form">
            <MDBRow>
                <h2 className='text-center bg-success text-bg-dark p-2'>Student PANEL</h2>
                <MDBRow>
                    <h2 style={{ height: "40px" }}></h2>
                    <MDBBtnGroup horizontal="true" style={{ padding: "10px" }}>
                        <MDBCol md={3} style={{ textAlign: "center" }}>
                            <Link to="/student/stdprofile" >
                            <i className="fa-regular fa-circle"> Profile</i>
                            </Link>
                        </MDBCol>
                        
                        <MDBCol md={3} style={{ textAlign: "center" }}>
                            <Link to="/student/stdaddress" >
                            <i className="fa-regular fa-circle"> Address</i>
                            </Link>
                        </MDBCol>
                        
                        <MDBCol md={3} style={{ textAlign: "center" }}>
                            <Link to="/student/stdqualify" >
                            <i className="fa-regular fa-circle"> Qualification</i>
                            </Link>
                        </MDBCol>
                        
                        <MDBCol md={3} style={{ textAlign: "center" }}>
                            <Link to="/student/uploaddoc" >
                            <i className="fa-regular fa-circle"> Documents</i>
                            </Link>
                        </MDBCol>
                        
                    </MDBBtnGroup>
                </MDBRow>

                <MDBRow>
                    <Outlet />
                </MDBRow>
            </MDBRow>
        </MDBContainer>
    )
}

export default Student