import React, { useEffect } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import './Customer.css'
import { useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
export default function CustomerHome() {
    if(localStorage.getItem("role")!=="Customer"){
        window.location.href="/SignIn"
    }
    var [role,setRole]=useState(localStorage.getItem("role"))

    console.log(document.cookie)
    var [user,setUser]=useState({
        username:"",
        password:"",
        balance:"",
        phone:"",
        email:"",
        address:"",
        firstName:"",
        secondName:"",
    })
    //get the user info from local storage
    useEffect(() => {
        axios.get("http://localhost:8080/OnlineShopping-1.0-SNAPSHOT/api/v1/customer/getCustomer",{
            headers:{
                "Content-Type":"application/json",
                "Cookie":localStorage.getItem("JSESSIONID")
            },
            withCredentials:true
        }).then((response)=>{
            
            if(response.status===200){
                console.log(response.data)
                setUser(response.data)
                localStorage.setItem("userName",response.data.username)

        }
        else {
                console.log(response)
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
                  <MDBTypography tag="h5">{user.username}</MDBTypography>
                  <MDBCardText>{role}</MDBCardText>
                    <MDBCardText className="mb-4">Address:{user.address}</MDBCardText>
                    <MDBCardText className="mb-4">Balance:{user.balance}$</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    
                    <MDBRow className="pt-1"
                    >
              
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">First Name</MDBTypography>
                        <MDBCardText className="text-muted">{user.firstName}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Second Name</MDBTypography>
                        <MDBCardText className="text-muted">{user.secondName}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{user.email}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">{user.phone}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <div className="d-flex justify-content-start">

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