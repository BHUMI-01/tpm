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
    const [addresses, setaddress]= useState([]);
    const idd = JSON.parse(localStorage.getItem("student"))._id;
    useEffect(() =>{
        getAddress();
    }, []);

    const getAddress = async () =>{
        let result = await fetch(`http://localhost:5000/addresses/${idd}`);
        result = await result.json();
        setaddress(result);
    }
    console.warn(addresses);
    
    return (
        <MDBContainer fluid>
            <MDBRow>
                <MDBCol>
                   
                    <MDBCard className='text-black m-5'>
                        <MDBCardBody>
                            <h5>Permanent Address</h5>
                            <hr />
                            {
                                 addresses.map((item)=>
                                 <MDBRow style={{ height: "30px", paddingLeft:"20px" }}>{item.type}</MDBRow>
                                    )
                            }
                            <MDBRow>
                                <MDBCol>
                                    <Link to='/editstdaddress'><MDBBtn>Edit</MDBBtn></Link>
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
                            <MDBRow style={{ height: "20px" }}></MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <Link to='/editstdaddress'><MDBBtn>Edit</MDBBtn></Link>
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
