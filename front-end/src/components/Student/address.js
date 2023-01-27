import React , {useState, useEffect} from 'react'
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
function Address() {
    const [peraddresses, setPeraddress]= useState([]);
    const [tempaddresses, setTempaddress]= useState([]);
    const idd = JSON.parse(localStorage.getItem("student"))._id;
    useEffect(() =>{
        getPerAddress();
        getTempAddress();
    });

    const getPerAddress = async () =>{
        let result = await fetch(`http://localhost:5000/peraddresses/${idd}`);
        result = await result.json();
        setPeraddress(result);
    }
    const getTempAddress = async () =>{
        let result = await fetch(`http://localhost:5000/tempaddresses/${idd}`);
        result = await result.json();
        setTempaddress(result);
    }
    console.warn(peraddresses);
    console.warn(tempaddresses);
    
    return (
        <MDBContainer fluid>
            <MDBRow>
                <MDBCol>
                   
                    <MDBCard className='text-black m-5'>
                        <MDBCardBody>
                            <h5>Permanent Address</h5>
                            <hr />
                            {
                                 peraddresses.map((item)=>
                                 <>
                                 <MDBRow style={{ height: "30px", paddingLeft:"20px" }}>{item.flatNo}, {item.area}, {item.landmark}, {item.locality}</MDBRow>
                                 <MDBRow style={{ height: "30px", paddingLeft:"20px" }}>{item.city}, {item.postalCode}</MDBRow>
                                 <MDBRow style={{ height: "30px", paddingLeft:"20px" }}>{item.country}, {item.province}</MDBRow>
                                   </> 
                                    )
                            }
                            <MDBRow>
                                <MDBCol>
                                    <Link to='/editstdperaddress'><MDBBtn>Edit</MDBBtn></Link>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol>
                    <MDBCard className='text-black m-5'>
                        <MDBCardBody>
                            <h5>Temporary Address</h5>
                            <hr />
                            {
                                 tempaddresses.map((item)=>
                                 <>
                                 <MDBRow style={{ height: "30px", paddingLeft:"20px" }}>{item.flatNo}, {item.area}, {item.landmark}, {item.locality}</MDBRow>
                                 <MDBRow style={{ height: "30px", paddingLeft:"20px" }}>{item.city}, {item.postalCode}</MDBRow>
                                 <MDBRow style={{ height: "30px", paddingLeft:"20px" }}>{item.country}, {item.province}</MDBRow>
                                   </> 
                                    )
                            }
                            <MDBRow>
                                <MDBCol>
                                    <Link to='/editstdtempaddress'><MDBBtn>Edit</MDBBtn></Link>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Address
