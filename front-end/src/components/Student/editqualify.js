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
    import { useState, useEffect } from 'react';
    import {
        Link, useNavigate
      } from 'react-router-dom';

const Editqualify=()=> {
    const [qualifyLevel, setqualifyLevel] = useState("");
    const [qualifyName, setqualifyName] = useState("");
    const [passYear, setpassYear] = useState("");
    const [board, setBoard] = useState("");
    const [rollNum, setrollNum] = useState("");
    const [resultStatus, setResultStatus] = useState("");
    const [gradeSys, setgradeSys] = useState("");
    const [grade, setGrade] = useState("");
   
    
    useEffect(() => {
        getQualifyDetails();
    }, [])

    const getQualifyDetails = async () => {
        const idd = JSON.parse(localStorage.getItem("student"))._id;
        let result = await fetch(`http://localhost:5000/qualify/${idd}`);
        result = await result.json();
        setqualifyLevel(result.qualifyLevel);
        setqualifyName(result.qualifyName);
        setpassYear(result.passYear);
        setBoard(result.board);
        setrollNum(result.rollNum);
        setResultStatus(result.resultStatus);
        setgradeSys(result.gradeSys);
        setGrade(result.grade);
    }

    const update_qualify = async () => {
        const studentId = JSON.parse(localStorage.getItem("student"))._id;
        let result = await fetch(`http://localhost:5000/add-student-qualify/${studentId}`, {
            method: 'put',
            body: JSON.stringify({
                qualifyLevel, qualifyName,studentId, passYear, board, rollNum, resultStatus, gradeSys, grade }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // setfatherName(result.fatherName);
        result = await result.json();
        console.warn(result);
    }

    const add_student_qualify = async () => {
        const studentId = JSON.parse(localStorage.getItem("student"))._id;
        let result = await fetch("http://localhost:5000/add-qualify", {
            method: 'post',
            body: JSON.stringify({
                qualifyLevel,studentId, qualifyName, passYear, board, rollNum, resultStatus, gradeSys, grade }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // setfatherName(result.fatherName);
        result = await result.json();

        console.warn(result);
    }

    const save_update = () => {
        const auth = JSON.parse(localStorage.getItem("qualify"))._id;
        const authh = JSON.parse(localStorage.getItem("qualify")).result;
        if (auth) {
            return <Link to='/stdqualify'><MDBBtn type='submit' onClick={update_qualify}>Update</MDBBtn></Link>

        }
        else if (authh) {

            return <Link to='/stdqualify'><MDBBtn type='submit' onClick={add_student_qualify}>Save</MDBBtn></Link>
        }
    }

    return (
        <MDBContainer fluid>
            <MDBCard className='text-black m-5'>
                <MDBCardBody>
                    <form>
                        <MDBRow>
                            <MDBCol>
                                <label>Qualification Level :</label>
                                <MDBInput id='enumber' type='text' value={qualifyLevel}
                                    onChange={(e) => setqualifyLevel(e.target.value)} required></MDBInput>
                            </MDBCol>
                            <MDBCol>
                                <label>Name of Qualification :</label>
                                <MDBInput id='enumber' type='text' value={qualifyName}
                                    onChange={(e) => setqualifyName(e.target.value)} required></MDBInput>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow style={{ height: "20px" }}></MDBRow>

                        <MDBRow>
                            <MDBCol>
                                <label>Year Of Passing:</label>
                                <MDBInput id='enumber' type='text' value={passYear}
                                    onChange={(e) => setpassYear(e.target.value)} required></MDBInput>
                            </MDBCol>
                            <MDBCol>
                                <label>Roll No :</label>
                                <MDBInput id='enumber' type='text' value={rollNum}
                                    onChange={(e) => setrollNum(e.target.value)} required></MDBInput>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow style={{ height: "20px" }}></MDBRow>

                        <MDBRow>
                            <MDBCol>
                                <label>Board :</label>
                                <MDBInput id='enumber' type='text' value={board}
                                    onChange={(e) => setBoard(e.target.value)} required></MDBInput>
                            </MDBCol>
                            <MDBCol>
                                <label>Result :</label>
                                <MDBInput id='enumber' type='text' value={resultStatus}
                                    onChange={(e) => setResultStatus(e.target.value)} required></MDBInput>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow style={{ height: "20px" }}></MDBRow>

                        <MDBRow>
                            <MDBCol>
                                <label>Grading System :</label>
                                <MDBInput id='enumber' type='text' value={gradeSys}
                                    onChange={(e) => setgradeSys(e.target.value)} required></MDBInput>
                            </MDBCol>
                            <MDBCol>
                                <label>Grade / % :</label>
                                <MDBInput id='enumber' type='text' value={grade}
                                    onChange={(e) => setGrade(e.target.value)} required></MDBInput>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow style={{ height: "20px" }}></MDBRow>

                        <MDBRow>
                            <MDBCol>{save_update()}</MDBCol>
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

export default Editqualify
