import React from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCol,
}
    from 'mdb-react-ui-kit';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Student() {
    let file = "";
    const handleFileUpload = async (e) => {
        const fill = e.target.files[0];
        const base64 = await convertToBase64(fill);
        console.log(base64);
        // console.log(typeof(base64));
        file = base64;
        console.warn(file);
    }
    const uploadFile = async () => {
        const studentId = JSON.parse(localStorage.getItem("student"))._id;
        let result = await fetch("http://localhost:5000/upload-file", {
            method: 'post',
            body: JSON.stringify({
                file, studentId
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        result = await result.json();
        localStorage.setItem("upload", result);
        console.warn(result.file);

    }
    const save_update = () => {
        if (localStorage.getItem("profile")) {
            return <Link to='/student/stdqualify'><MDBBtn type='submit' onClick={() => uploadFile()}>Save</MDBBtn></Link>
        }
        else {
            return <MDBRow>
                <MDBCol><MDBBtn type='submit' onClick={uploadFile}>Save</MDBBtn></MDBCol>
                <MDBCol><Link to='/'><MDBBtn>Submit</MDBBtn></Link></MDBCol>
            </MDBRow>
        }
    }

    return (
        <MDBContainer fluid>
            <MDBCard className='text-black m-5'>
                <MDBCardBody>
                    <MDBCardHeader>Upload Documents</MDBCardHeader>
                    <MDBRow style={{ height: "20px" }}></MDBRow>
                    <form>

                        <label htmlFor='file'>Upload Resume :</label>
                        <input
                            id='file'
                            type="file"
                            accept=".png, .jpg, .jpeg, .pdf"
                            onChange={(e) => handleFileUpload(e)}
                            required
                        ></input>




                        {/* <MDBRow style={{ height: "20px" }}></MDBRow>
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
                        <input  type="file"></input> */}
                    </form>

                    <MDBRow>
                        {save_update()}
                    </MDBRow>

                </MDBCardBody>
            </MDBCard>

        </MDBContainer>
    )
}

export default Student

function convertToBase64(fill) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(fill);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}