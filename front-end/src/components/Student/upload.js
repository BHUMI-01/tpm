import React from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
}
    from 'mdb-react-ui-kit';

function student() {
    return (
        <MDBContainer fluid>
            <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                <MDBCardBody>
                    <form>
                        <label>Upload Resume :</label>
                        <input  type="file" required></input>
                        <MDBRow style={{ height: "20px" }}></MDBRow>
                        <label>Upload class X marsheet :</label>
                        <input  type="file" required></input>
                        <MDBRow style={{ height: "20px" }}></MDBRow>
                        <label>Upload class XII marksheet :</label>
                        <input  type="file" required></input>
                        <MDBRow style={{ height: "20px" }}></MDBRow>
                        <label>Upload Transcript :</label>
                        <input  type="file" required></input>
                        <MDBRow style={{ height: "20px" }}></MDBRow>
                        <label>Upload Other certificates :</label>
                        <input  type="file"></input>
                    </form>
                    <MDBRow style={{ height: "20px" }}></MDBRow>
                    <MDBBtn type='submit'>Save</MDBBtn>
                </MDBCardBody>
            </MDBCard>

        </MDBContainer>
  )
}

export default student
