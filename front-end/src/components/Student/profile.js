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
        let result = await fetch(`http://localhost:5000/profiles/${idd}`);
        result = await result.json();
        console.warn(result);
        setProfiles(result);
        localStorage.setItem("profile", JSON.stringify(result));
    }
    let len = profiles.length;
    // profiles = profiles[len-1];
    console.warn(len);
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
                                {/* {
                                    len <= 0 ?
                                        <td>#</td> :
                                        profiles.map((item, index) =>
                                            <td>{item.fatherName}</td>
                                        )[len - 1]
                                } */}
                                <td>{profiles.fatherName}</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Mother's Name</td>
                                {/* {
                                    len <= 0 ?
                                        <td>#</td> :
                                        profiles.map((item, index) =>
                                            <td>{item.motherName}</td>
                                        )[len - 1]
                                } */}
                                <td>{profiles.motherName}</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Date of Birth</td>
                                {/* {
                                    len <= 0 ?
                                        <td>#</td> :
                                        profiles.map((item, index) =>
                                            <td>{item.dob}</td>
                                        )[len - 1]
                                } */}
                                <td>{profiles.dob}</td>                               
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Gender</td>
                                {/* {
                                    len <= 0 ?
                                        <td>#</td> :
                                        profiles.map((item, index) =>
                                            <td>{item.gender}</td>
                                        )[len - 1]
                                } */}
                                <td>{profiles.gender}</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Enrollment Number</td>
                                {/* {
                                    len <= 0 ?
                                        <td>#</td> :
                                        profiles.map((item, index) =>
                                            <td>{item.enrollNum}</td>
                                        )[len - 1]
                                } */}
                                <td>{profiles.enrollNum}</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Mobile No.</td>
                                {/* {
                                    len <= 0 ?
                                        <td>#</td> :
                                        profiles.map((item, index) =>
                                            <td>{item.mobNum}</td>
                                        )[len - 1]
                                } */}
                                <td>{profiles.mobNum}</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Alternate No.</td>
                                {/* {
                                    len <= 0 ?
                                        <td>#</td> :
                                        profiles.map((item, index) =>
                                            <td>{item.alternateNum}</td>
                                        )[len - 1]
                                } */}
                                <td>{profiles.alternateNum}</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Disability</td>
                                {/* {
                                    len <= 0 ?
                                        <td>#</td> :
                                        profiles.map((item, index) =>
                                            <td>{item.disability}</td>
                                        )[len - 1]
                                } */}
                                <td>{profiles.disability}</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Aadhaar Number</td>
                                {/* {
                                    len <= 0 ?
                                        <td>#</td> :
                                        profiles.map((item, index) =>
                                            <td>{item.aadharNum}</td>
                                        )[len - 1]
                                } */}
                                <td>{profiles.aadharNum}</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Blood Group</td>
                                {/* {
                                    len <= 0 ?
                                        <td>#</td> :
                                        profiles.map((item, index) =>
                                            <td>{item.bloodGroup}</td>
                                        )[len - 1]
                                } */}
                                <td>{profiles.bloodGroup}</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>Caste</td>
                                {/* {
                                    len <= 0 ?
                                        <td>#</td> :
                                        profiles.map((item, index) =>
                                            <td>{item.caste}</td>
                                        )[len - 1]
                                } */}
                                <td>{profiles.caste}</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>Religion</td>
                                {/* {
                                    len <= 0 ?
                                        <td>#</td> :
                                        profiles.map((item, index) =>
                                            <td>{item.religion}</td>
                                        )[len - 1]
                                } */}
                                <td>{profiles.religion}</td>
                            </tr>
                            <tr>
                                <td>16</td>
                                <td>Nationality</td>
                                {/* {
                                    len <= 0 ?
                                        <td>#</td> :
                                        profiles.map((item, index) =>
                                            <td>{item.nationality}</td>
                                        )[len - 1]
                                } */}
                                <td>{profiles.nationality}</td>
                            </tr>
                            <tr>
                                <td>17</td>
                                <td>Province</td>
                                {/* {
                                    len <= 0 ?
                                        <td>#</td> :
                                        profiles.map((item, index) =>
                                            <td>{item.state}</td>
                                        )[len - 1]
                                } */}
                                <td>{profiles.state}</td>
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