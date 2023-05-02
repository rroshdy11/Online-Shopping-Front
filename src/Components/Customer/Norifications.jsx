//http://localhost:8080/OnlineShopping-1.0-SNAPSHOT/api/v1/order/getShippingRequestsBySeller
import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

export const Notifications=()=> {
    if(localStorage.getItem("role")!=="Customer"){
        window.location.href="/SignIn"
    }
    const [requests, setRequests] = useState([]);
    const name=localStorage.getItem("userName")
    
    useEffect(() => {
        fetch(`http://localhost:8080/OnlineShopping-1.0-SNAPSHOT/api/v1/notification/getCustomerNotifications/${name}`,{
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
                    <td>{item.message}</td>


                </tr>
            )
        })
    }
    
    return (
    
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Notification ID</th>
              <th>Notification</th>

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