import React from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
function editqualify() {
    return (
        <MDBContainer fluid>
            <MDBCard className='text-black m-5'>
                <MDBCardBody>
                    <form>
                        <label>First Name :</label>
                        <input type="text"></input>
                        <MDBRow style={{ height: "20px" }}></MDBRow>

                        <MDBRow>
                            <MDBCol>
                                <MDBBtn type='submit'>Save</MDBBtn>
                            </MDBCol>
                            <MDBCol>
                                <Link to='/stdqualify'><MDBBtn>Back</MDBBtn></Link>
                            </MDBCol>
                        </MDBRow>
                    </form>

                </MDBCardBody>
            </MDBCard>

        </MDBContainer>
    )
}

export default editqualify
