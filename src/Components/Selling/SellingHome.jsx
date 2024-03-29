import React, { useEffect } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import './Selling.css'

export default function SellingHome() {

    if (localStorage.getItem("role") !== "seller") {
        window.location.href = "/SignIn"
    }
  var userName = localStorage.getItem("userName");
  var password = localStorage.getItem("password");
  var balance = localStorage.getItem("balance");
  var phone = localStorage.getItem("phone");
  var email = localStorage.getItem("email");
  var role = localStorage.getItem("role");
    
    useEffect(() => {

        fetch(`http://localhost:8080/OnlineShopping-1.0-SNAPSHOT/api/v1/sellingCompany/getCompany/${localStorage.getItem("userName")}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then((response) => {
            if (response.status === 200) {
                response.json().then((result) => {
                    localStorage.setItem("balance", result.balance)
                })
            }
        }).catch((err) => {
            console.log(err)
        }
        )
    }, [])


  return (
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography tag="h5">{userName}</MDBTypography>
                  <MDBCardText>{role}</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    
                    <MDBRow className="pt-1"
                      style={
                        {
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }
                      }
                    >
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">$Balance</MDBTypography>
                        <MDBCardText className="text-muted">{balance}$</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{email}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">{phone}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <div className="d-flex justify-content-start">
                      <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}