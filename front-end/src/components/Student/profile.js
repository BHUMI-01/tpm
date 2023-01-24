import Table from 'react-bootstrap/Table';
import React from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCol
}
    from 'mdb-react-ui-kit';
    import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
function profile() {
    return (
        <MDBContainer fluid>
            <MDBCard className='text-black m-5'>
                <MDBCardBody>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Details</th>
                                <th>Values</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>First Name</td>
                                <td>{firstN}</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Middle Name</td>
                                <td>{middleN}</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Last Name</td>
                                <td>{lastN}</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Father's Name</td>
                                {
                                 profiles.map((item, index)=>
                                    <td>{item.fatherName}</td>
                                    )
                                }
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Mother's Name</td>
                                {
                                 profiles.map((item, index)=>
                                    <td>{item.motherName}</td>
                                    )
                                }
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Date of Birth</td>
                                {
                                 profiles.map((item, index)=>
                                    <td>{item.dob}</td>
                                    )
                                }
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Gender</td>
                                {
                                 profiles.map((item, index)=>
                                    <td>{item.gender}</td>
                                    )
                                }
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Enrollment Number</td>
                                <td>#</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Mobile No.</td>
                                <td>#</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Alternate No.</td>
                                <td>#</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Disability</td>
                                <td>#</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Aadhaar Number</td>
                                <td>#</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Blood Group</td>
                                <td>#</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>Caste</td>
                                {
                                 profiles.map((item, index)=>
                                    <td>{item.caste}</td>
                                    )
                                }
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>Religion</td>
                                <td>#</td>
                            </tr>
                            <tr>
                                <td>16</td>
                                <td>Nationality</td>
                                <td>#</td>
                            </tr>
                            <tr>
                                <td>17</td>
                                <td>Province</td>
                                <td>#</td>
                            </tr>
                        </tbody>
                    </Table>
                    <MDBRow style={{ height: "20px" }}></MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <Link to='/editstdprofile'><MDBBtn>Edit</MDBBtn></Link>
                        </MDBCol>
                    </MDBRow>

                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}

export default Profile;