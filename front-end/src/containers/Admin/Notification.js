import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBTable,
  MDBTableBody,
  MDBCardBody,
  MDBCol,
  MDBTableHead,
} from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Notification = () => {
  return (
    <MDBContainer>
      <MDBRow style={{ height: "20px" }}></MDBRow>
      <MDBRow>
        <Link to="/admin/addJob">
          <MDBBtn>ADD Job</MDBBtn>
        </Link>
      </MDBRow>

    </MDBContainer>
  );
};

export default Notification;
