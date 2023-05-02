//http://localhost:8080/OnlineShopping-1.0-SNAPSHOT/api/v1/order/getShippingRequestsBySeller
import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

export const CustomerLog=()=> {
    if(localStorage.getItem("role")!=="Customer"){
        window.location.href="/SignIn"
    }
    const [requests, setRequests] = useState([]);
    const name=localStorage.getItem("userName")
    
    useEffect(() => {
        fetch(`http://localhost:8080/OnlineShopping-1.0-SNAPSHOT/api/v1/order/getShippingRequestsByCustomer/${name}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        }).then((response)=>{
            response.json().then((result)=>{
                setRequests(result)
            })
        }).catch((err)=>{
            console.log(err)
        }
        )
    }, [])  
    function makeTable(){
        return requests.map((item,index)=>{
            return(
                <tr key={index} >
                    <td>{item.id}</td>
                    <td>{item.productId}</td>
                    <td>{item.sellingCompanyName}</td>
                    <td>{item.customerName}</td>
                    <td>{item.shippingAddress}</td>
                    <td>{item.shippingState}</td>

                </tr>
            )
        })
    }
    
    return (
    
        <Table striped bordered hover>
          <thead>
            <tr>
                <th>#</th>
              <th>Product ID</th>
              <th>Selling Company Name</th>
              <th>customer Name</th>
              <th>shippingAddress</th>
                <th>Shipping State</th>
            </tr>
          </thead>
          <tbody>
            {
                makeTable()
            }
          </tbody>
        </Table>
      );
}