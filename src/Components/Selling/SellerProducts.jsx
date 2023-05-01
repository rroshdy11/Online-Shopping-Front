import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';

export const SellerProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:8080/OnlineShopping-1.0-SNAPSHOT/api/v1/sellingCompany/getProducts/${localStorage.getItem("userName")}`,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }).then((response) => response.json())
      .then((data) => {
        setProducts(data);
      }
      );

    }, []);

      const deleteProduct =async (productId) => {
      const res= await fetch(`http://localhost:8080/OnlineShopping-1.0-SNAPSHOT/api/v1/sellingCompany/deleteProduct/${localStorage.getItem("userName")}/${productId}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });
      const result=await res.text();
      if(result==="Product Deleted Successfully")
      {
        alert("Deleted Successfully")
        window.location.href="/SellerProducts"
      }
      else{
        alert("Error")
      }
    }

  
    return (
      <>
      <div >
        <h1 className="head">Shop</h1>
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
                   <br/>
                    Quantity : {product.productStock}
                 </Card.Text>
                 <Card.Link href="#">
                  { product.productStock!==0&&
                  <Trash onClick={()=>deleteProduct(product.productId)}/>
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
        
      </div>
      </>
    );
}