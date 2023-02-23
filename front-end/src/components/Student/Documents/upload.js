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

    const uploadData = async () => {
        const studentId = JSON.parse(localStorage.getItem("student"))._id;
        const stdprofile = JSON.parse(localStorage.getItem("stdprofile"));
        const stdperadd = JSON.parse(localStorage.getItem("stdperaddress"));
        const stdtempadd = JSON.parse(localStorage.getItem("stdtempaddress"));
        const stdeducat = JSON.parse(localStorage.getItem("stdqualify"));
        await fetch("http://localhost:5000/add-data", {
            method: 'post',
            body: JSON.stringify({
                studentId, stdprofile, stdperadd, stdtempadd, stdeducat
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    const save_update = () => {
        if (localStorage.getItem("upload")) {
            return <MDBRow>
                <MDBCol><MDBBtn type='submit'>Save</MDBBtn></MDBCol>
                <MDBCol><Link to="/"><MDBBtn >Back</MDBBtn></Link></MDBCol>
            </MDBRow>
        }
        else {
            return <MDBRow>
                <MDBCol><MDBBtn type='submit'>Save</MDBBtn></MDBCol>
                <MDBCol><Link to="/"><MDBBtn onClick={uploadData}>Submit</MDBBtn></Link></MDBCol>
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