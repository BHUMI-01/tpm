import React from 'react';
import Table from 'react-bootstrap/Table';
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

function qualification() {
    return (
        <MDBContainer fluid>
            <MDBCard className='text-black m-5'>
                <MDBCardBody style={{height:'40px', width: '400px',}}><MDBBtn type='success' >Add Academic Details</MDBBtn></MDBCardBody>
                <MDBRow style={{ height: "60px" }}></MDBRow>
                <MDBCardBody>
                    <h5>Academic Qualification List</h5>
                    <hr/>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Qualification Level</th>
                                <th>Name of Qualification</th>
                                <th>Year of Passing</th>
                                <th>Roll No.</th>
                                <th>Board</th>
                                <th>Result</th>
                                <th>Grading Type</th>
                                <th>Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>#</th>
                                <th>#</th>
                                <th>#</th>
                                <th>#</th>
                                <th>#</th>
                                <th>#</th>
                                <th>#</th>
                                <th>#</th>
                            </tr>
                        </tbody>
                    </Table>
                    <MDBRow style={{ height: "20px" }}></MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <Link to='/editstdqualify'><MDBBtn>Edit</MDBBtn></Link>
                        </MDBCol>
                    </MDBRow>

                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    )
}

export default qualification
