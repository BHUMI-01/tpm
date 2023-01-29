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
import { useEffect, useState } from 'react';

const Qualification = () => {
    const idd = JSON.parse(localStorage.getItem("student"))._id;
    const [qualifies, setQualify] = useState([]);
    useEffect(() => {
        getQualify();
    }, []);

    const getQualify = async () => {
        let result = await fetch(`http://localhost:5000/qualify/${idd}`);
        result = await result.json();
        // console.warn(result);
        setQualify(result);
        localStorage.setItem("qualify", JSON.stringify(result));
    }
    // console.warn(typeof(qualifies.result));
    return (
        <MDBContainer fluid>
            <MDBCard className='text-black m-5'>
                <MDBCardBody style={{ height: '40px', width: '400px', }}><MDBBtn type='success' >Add Academic Details</MDBBtn></MDBCardBody>
                <MDBRow style={{ height: "60px" }}></MDBRow>
                <MDBCardBody>
                    <h5>Academic Qualification List</h5>
                    <hr />
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
                            {
                                qualifies.result == "No User Found"
                                    ?
                                    <tr>
                                        <th>-</th>
                                        <th>-</th>
                                        <th>-</th>
                                        <th>-</th>
                                        <th>-</th>
                                        <th>-</th>
                                        <th>-</th>
                                        <th>-</th>
                                    </tr>
                                    :
                                    <tr>
                                        <th>{qualifies.qualifyLevel}</th>
                                        <td>{qualifies.qualifyLevel}</td>
                                        <th>{qualifies.passYear}</th>
                                        <th>{qualifies.rollNum}</th>
                                        <th>{qualifies.board}</th>
                                        <th>{qualifies.resultStatus}</th>
                                        <th>{qualifies.gradeSys}</th>
                                        <th>{qualifies.grade}</th>
                                    </tr>
                            }
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

export default Qualification
