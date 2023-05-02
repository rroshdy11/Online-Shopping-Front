import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Cart, Check, Trash } from 'react-bootstrap-icons';

export const CustomerCart = () => {
  if(localStorage.getItem("role")!=="Customer"){
    window.location.href="/SignIn"
  }
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:8080/OnlineShopping-1.0-SNAPSHOT/api/v1/customer/getCart`,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
            "Cookie":localStorage.getItem("JSESSIONID")
        }
        ,credentials: 'include'
      }).then((response) => response.json())
      .then((data) => {
        setProducts(data);
      }
      );

    }, []);

      const remove =async (productId) => {
      const res= await fetch(`http://localhost:8080/OnlineShopping-1.0-SNAPSHOT/api/v1/customer/removeProductFromCart/${productId}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Cookie":localStorage.getItem("JSESSIONID")
        }
        ,credentials: 'include'
      });
      const result=await res.text();
      if(result==="Product removed from cart successfully")
      {
        alert("Product removed from cart successfullyy")
        window.location.reload();
       
      }
      else{
        alert("Error")
      }
    }

    const checkout =async () => {
        const res= await fetch(`http://localhost:8080/OnlineShopping-1.0-SNAPSHOT/api/v1/customer/BuyProducts`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Cookie":localStorage.getItem("JSESSIONID")
            }
            ,credentials: 'include'
        });
        const result=await res.text();
        if(result==="Products bought successfully")
        {
            alert("Products bought successfully")
            window.location.reload();
        }
        else{
            alert("Error")
        }
    }

    return (
      <>
      <div >
        <h1 className="head">MY CART</h1>
          {console.log(products)}
          <div className="container"
          style={
            {display: "flex",flexWrap: "wrap",justifyContent: "space-around"}}
          >
          
          {products.map((product,index) => (
            
               <Card
               style={  {width:"22%", marginBottom:"10px" ,borderRadius: "5px"
               ,
                height: "225px",
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                transition: "0.3s"
              } }
                key={index}
               >
               <Card.Body>
                 <Card.Title>{product.productName}</Card.Title>
                 <Card.Subtitle className="mb-2 text-muted">Product Id :{product.productId}</Card.Subtitle>
                 
                 <Card.Text
                  style={{overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "1",
                  WebkitBoxOrient: "vertical"}}
                 >
                   {product.productDescription} 
                  </Card.Text>
                   <Card.Text>
                   Price : {product.productPrice}
                 </Card.Text>
                 <Card.Link href="#">
                  { product.productStock!==0&&
                  <button className='btn btn-danger' onClick={()=>remove(product.productId)}><Trash/></button>
                  }   
                  {
                    product.productStock===0&&
                    <button className="btn btn-danger" disabled>Out of Stock</button>
                  }
                  </Card.Link>

               </Card.Body>
             </Card>
          ))}
          </div> 
          {products.length!==0&&
          <button className="btn btn-primary" onClick={()=>checkout()}>Checkout</button>
        }
      </div>
      </>
    );
}