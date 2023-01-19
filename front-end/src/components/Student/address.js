import React from 'react'
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
function address() {
    return (
        <MDBContainer fluid>
            <MDBRow>
                <MDBCol>
                    <MDBCard className='text-black m-5'>
                        <MDBCardBody>
                            <h5>Permanent Address</h5>
                            <hr />
                            <MDBRow style={{ height: "20px" }}></MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <Link to='/editstdaddress'><MDBBtn>Edit</MDBBtn></Link>
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
                            <MDBRow style={{ height: "20px" }}></MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <Link to='/editstdaddress'><MDBBtn>Edit</MDBBtn></Link>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default address
