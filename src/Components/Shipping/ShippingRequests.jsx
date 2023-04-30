import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

export function ShippingRequests() {
    if(localStorage.getItem("role")!=="delivery"){
        window.location.href="/SignIn"
    }
    const [requests, setRequests] = useState([]);
    const name=localStorage.getItem("userName")
    
    useEffect(() => {
        fetch(`http://localhost:8080/OnlineShopping-1.0-SNAPSHOT/api/v1/shippingCompany/getAllShippingRequestForShippingCompany/${name}`,{
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
                    <td>
                        <button className="btn btn-success" onClick={()=>{acceptRequest(item.id)}}>Accept</button>
                    </td>

                    <td></td>
                </tr>
            )
        })
    }
    async function acceptRequest(productId){
        const res = await fetch(
            `http://localhost:8080/OnlineShopping-1.0-SNAPSHOT/api/v1/shippingCompany/acceptShippingRequest/${productId}/${name}`,
            {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
                }
            }
            );
            const data = await res.text();
            if (data === "Selling Log Updated Successfully") {
                alert("Shipping Request Accepted");
                window.location.href = "/CompanyRequests";
            } else {
                alert(data);
            }
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
                <th>Accept Request</th>
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