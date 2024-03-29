import React, { useState } from "react";
export const AddShipping=()=>{
    var [company, setCompany] = useState({
        username:"",
        email:"",
        phone:"",
        geography:"",

    });
    const handleSubmit =async  () => {
        const res = await fetch(
            "http://localhost:11780/AdminServices-1.0-SNAPSHOT/api/v1/admin/addShippingCompany",
            {
              method: "POST",
              body: JSON.stringify(company),
              headers: {
                "Content-Type": "application/json"
              }
            }
          );
          const data = await res.text();
          if (data === "Shipping Company added successfully") {
            window.location.href = "/AllShipping";
          } else {
            alert(data+",try another Company Name");
          }
    };

    return (
        <div className="Auth-form-container">
        <div className="Auth-form"  >
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Add New Shipping Company</h3>
            <div className="form-group mt-3">
              <label>Company Name</label>
              <input
                type="text"
                value={company.username}
              onChange={(e) => setCompany({...company,username:e.target.value})}
                className="form-control mt-1"
                placeholder="Enter Company Name"
              />
            </div>
            <div className="form-group mt-3">
              <label>Company Email</label>
              <input
                value={company.companyEmail}
                  onChange={(e) => setCompany({...company,email:e.target.value})}
                type="email"
                className="form-control mt-1"
                placeholder="Enter Company Email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Phone</label>
                <input
                value={company.phone}
                  onChange={(e) => setCompany({...company,phone:e.target.value})}
                type="text"
                className="form-control mt-1"
                placeholder="Enter Company Phone"
              />
              </div>
              <div className="form-group mt-3">
              <label>Geography</label>
                <input
                value={company.geography}
                  onChange={(e) => setCompany({...company,geography:e.target.value})}
                type="text"
                className="form-control mt-1"
                placeholder="Geos ex: India, USA, UK"
              />
              </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}