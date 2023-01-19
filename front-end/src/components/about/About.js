import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "./about.css";
function About() {
    return (
        <Container style={{marginBottom: "50px"}}>
            <Row>
                <h1 className='mainh1'>Training And Placement (ZHCET)</h1>
                <hr />
            </Row>

            <Row style={{ marginTop: "20px" }}>
                <Col>
                    <img src='https://api.amu.ac.in/storage//images/10166/slider/1616226469_2.jpg'
                        className='mainimg' alt='img' />
                </Col>

                <Col>
                    <figure _ngcontent-amu-c8="" class="user-img-area">
                        <div _ngcontent-amu-c8="" class="head-area">
                            <img _ngcontent-amu-c8="" alt="ph" src="https://api.amu.ac.in/storage//images/empphoto/1597899549_saeed.jpg"
                                className='user-img-head' />
                        </div>
                        <div _ngcontent-amu-c8="" class="name-area">
                            <div _ngcontent-amu-c8="">
                                <a _ngcontent-amu-c8="" href="/non-teaching/zhcet/mohd-farhan-saeed"> Mr. Mohd. Farhan Saeed</a>
                            </div>
                        </div>
                        <div _ngcontent-amu-c8="" class="designation-area first"> Training and Placement Officer and Training &amp; Placement Officer </div>
                    </figure>
                </Col>
            </Row>


            <Container>
                <Row><h2 style={{ marginTop: "30px" }}>HOME PAGE</h2></Row>
                <Row>
                    <Col>
                        <hr />
                        <p style={{ width: "900px", textAlign: "justify"}}>
                            The Training and Placement Office provides job opportunities, arranges Campus Interviews
                            by various Government Departments and Companies of National and International repute.
                            Students take the help of this office for their Training and Employment. It also caters
                            to the need of Instructional and Industrial requirements through state of the art facilities,
                            new technologies and human resources in collaboration with all the Department of studies.
                        </p>
                    </Col>
                    <Col>
                        <div _ngcontent-amu-c8="" class="left-area links-right">
                            <div _ngcontent-amu-c8="" class="links-area">
                                <div _ngcontent-amu-c8="" class="default-heading boder-none d-flex">
                                    <h2 _ngcontent-amu-c8="">Related Links</h2>
                                </div>
                                <div _ngcontent-amu-c8="" class="example-list">
                                    <div _ngcontent-amu-c8="" class="example-box shadow d-flex justify-content-between">
                                        <div _ngcontent-amu-c8="" class="drag-content">
                                            <a _ngcontent-amu-c8="" href="/training-and-placement/zhcet/home-page">Home Page</a>
                                        </div>
                                    </div>
                                    <div _ngcontent-amu-c8="" class="example-box shadow d-flex justify-content-between">
                                        <div _ngcontent-amu-c8="" class="drag-content">
                                            <a _ngcontent-amu-c8="" href="https://www.amu.ac.in/training-and-placement/zhcet/staff-members">Staff Members</a>
                                        </div>
                                    </div>
                                    <div _ngcontent-amu-c8="" class="example-box shadow d-flex justify-content-between">
                                        <div _ngcontent-amu-c8="" class="drag-content">
                                            <a _ngcontent-amu-c8="" href="https://www.amu.ac.in/training-and-placement/zhcet/notice-and-circular">Notice and Circular</a>
                                        </div>
                                    </div>
                                    <div _ngcontent-amu-c8="" class="example-box shadow d-flex justify-content-between">
                                        <div _ngcontent-amu-c8="" class="drag-content">
                                            <a _ngcontent-amu-c8="" href="https://www.amu.ac.in/training-and-placement/zhcet/useful-download">Useful Download</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div _ngcontent-amu-c8="" class="login-logout">
                                <a _ngcontent-amu-c8="" class="btn btn-primary" queryparamshandling="merge" href="/role-login?type=training-and-placement&amp;head=training-and-placement-officer&amp;slug=zhcet">
                                    <i _ngcontent-amu-c8="" class="fa fa-sign-out"></i>
                                    Login</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </Container>
    )
}

export default About
