import React, { useState } from "react";
export const AddProduct = () => {
    var companyUsername = localStorage.getItem("userName");

    var [product, setProduct] = useState(
        {
            productName: "",
            productStock: 0,
            productDescription: "",
            productPrice: 0.0,

        }
    );
    const handleSubmit = async () => {
        const res = await fetch(`http://localhost:8080/OnlineShopping-1.0-SNAPSHOT/api/v1/sellingCompany/addProduct/${companyUsername}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body:JSON.stringify(product)
        });
        const result = await res.text();
        if (result === "Product added successfully") {
            alert("Product Added Successfully");
            window.location.href = "/SellerProducts";
        }
        else {
            alert("Product Name is already used");
        }
    }

    return (
        <div className="Auth-form-container">
          <div className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Add Product</h3>
              <div className="form-group mt-3">
    
                <label>Product Name</label>
                <input
                  type="text"
                  value={product.productName}
                  onChange={(e) => setProduct({...product, productName: e.target.value})}
                  className="form-control mt-1"
                  placeholder="Enter your Product Name "
                />
              </div>
    
              <div className="form-group mt-3">
    
                <label>Product Description</label>
                <input
                  type="text"
                  value={product.productDescription}
                  onChange={(e) => setProduct({...product, productDescription: e.target.value})}
                  className="form-control mt-1"
                  placeholder="Enter your Product Description "
                />
              </div>
              <div className="form-group mt-3">
                <label>Product Price</label>
                <input
                  type="number"
                  value={product.productPrice}
                  onChange={(e) => setProduct({...product, productPrice: e.target.value})}
                  className="form-control mt-1"
                  placeholder="Price"
                />
              </div>
              <div className="form-group mt-3">
                <label>Quantity</label>
                <input
                  type="text"
                  value={product.productStock}
                  onChange={(e) => setProduct({...product, productStock: e.target.value})}
                  className="form-control mt-1"
                  placeholder="Quantity"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      );
}