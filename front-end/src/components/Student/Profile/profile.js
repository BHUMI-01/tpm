import Table from 'react-bootstrap/Table';
import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCol
}
    from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    const idd = JSON.parse(localStorage.getItem("student"))._id;
    const firstN = JSON.parse(localStorage.getItem("student")).firstName;
    const middleN = JSON.parse(localStorage.getItem("student")).middleName;
    const lastN = JSON.parse(localStorage.getItem("student")).lastName;
    const [profiles, setProfiles] = useState([]);
    useEffect(() => {
        getProfiles();
    }, []);

    const getProfiles = async () => {
        let result = await fetch(`http://localhost:5000/add-data/${idd}`, {
            headers: {
                "authorization": JSON.parse(localStorage.getItem("token")),
            },
        });
        result = await result.json();
        console.warn(result.stdprofile);
        setProfiles(result.stdprofile);
        localStorage.setItem("stdprofile", JSON.stringify(result.stdprofile));

    }
    console.log(profiles);
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
                                <td>{profiles.fatherName}</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Mother's Name</td>
                                <td>{profiles.motherName}</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Date of Birth</td>
                                <td>{profiles.dob}</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Gender</td>
                                <td>{profiles.gender}</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Enrollment Number</td>
                                <td>{profiles.enrollNum}</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Mobile No.</td>
                                <td>{profiles.mobNum}</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Alternate No.</td>
                                <td>{profiles.alternateNum}</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Disability</td>
                                <td>{profiles.disability}</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Aadhaar Number</td>
                                <td>{profiles.aadharNum}</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Blood Group</td>
                                <td>{profiles.bloodGroup}</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>Caste</td>
                                <td>{profiles.caste}</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>Religion</td>
                                <td>{profiles.religion}</td>
                            </tr>
                            <tr>
                                <td>16</td>
                                <td>Nationality</td>
                                <td>{profiles.nationality}</td>
                            </tr>
                            <tr>
                                <td>17</td>
                                <td>Province</td>
                                <td>{profiles.state}</td>
                            </tr>
                            <tr>
                                <td>18</td>
                                <td>City</td>
                                <td>{profiles.city}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <MDBRow style={{ height: "20px" }}></MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <Link to='/student/editstdprofile'><MDBBtn>Edit</MDBBtn></Link>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}

export default Profile;