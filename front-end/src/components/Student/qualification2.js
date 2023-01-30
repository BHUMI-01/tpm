import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBTable,
    MDBTableHead,
    MDBTableBody
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
        let result = await fetch(`http://localhost:5000/qualifyEntry/${idd}`);
        result = await result.json();
        // console.warn(result);
        setQualify(result);
        localStorage.setItem("qualify", JSON.stringify(result));
    }
    // // console.warn(typeof(qualifies.result));
    // const setAdd = (qL) => {
    //     localStorage.setItem("qualifyVal", qL);
    // }
    
    return (
        <MDBContainer fluid>
            <MDBCard className='text-black m-5'>
                <MDBCardBody style={{ height: '40px', width: '400px', }}>
                    <Link to="/addstdqualify"><MDBBtn type='save'>Add Academic Details</MDBBtn></Link>
                </MDBCardBody>
                <MDBRow style={{ height: "60px" }}></MDBRow>
                <MDBCardBody>
                    <h5>Academic Qualification List</h5>
                    <hr />
                    <MDBTable striped>
                        <MDBTableHead>
                            <tr>
                             
                                <th>Qualification Level</th>
                                <th>Name of Qualification</th>
                                <th>Year of Passing</th>
                                <th>Roll No.</th>
                                <th>Board</th>
                                <th>Result</th>
                                <th>Grading Type</th>
                                <th>Grade</th>
                                <th>Action</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {
                                qualifies.result === "No User Found"?
                                <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    :
                                    
                                qualifies.map((item) =>
                                    <tr key ={item._id}>
                                        <td>{item.qualifyLevel}</td>
                                        <td>{item.qualifyName}</td>
                                        <td>{item.passYear}</td>
                                        <td>{item.rollNum}</td>
                                        <td>{item.board}</td>
                                        <td>{item.resultStatus}</td>
                                        <td>{item.gradeSys}</td>
                                        <td>{item.grade}</td>
                                        <td><Link to={`/editstdqualify/${item._id}/${item.qualifyLevel}`}><MDBBtn>edit</MDBBtn></Link></td>
                                    </tr>
                                )

                            }
                        </MDBTableBody>
                    </MDBTable>
                    <MDBRow style={{ height: "20px" }}></MDBRow>
                    <MDBRow>

                    </MDBRow>

                </MDBCardBody>
            </MDBCard>
        </MDBContainer >
    )
}

export default Qualification
