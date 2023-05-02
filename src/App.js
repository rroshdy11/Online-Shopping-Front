import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {SignIn}  from './Components/SignIn/SignIn';
import AdminHome from './Components/Admin/AdminHome';
import AllSelling from './Components/Admin/AllSelling';
import AllShipping from './Components/Admin/AllShipping';
import AllCustomer from './Components/Admin/AllCustomer';
import { AddSelling } from './Components/Admin/AddSelling';
import { AddShipping } from './Components/Admin/AddShipping';
import ShippingHome from './Components/Shipping/ShippingHome';
import {ShippingRequests} from './Components/Shipping/ShippingRequests';
import { CompanyRequests } from './Components/Shipping/CompanyRequests';
import { SignUp } from './Components/SingUp/SignUp';
import SellingHome from './Components/Selling/SellingHome';
import { SellerLogs } from './Components/Selling/SellerLogs';
import { SellerProducts } from './Components/Selling/SellerProducts';
import { AddProduct } from './Components/Selling/AddProduct';
import CustomerHome from './Components/Customer/CustomerHome';
import { CustomerLog } from './Components/Customer/CustomerLog';
import { Market } from './Components/Customer/Market';
import { CustomerCart } from './Components/Customer/Cart';
import { Notifications } from './Components/Customer/Norifications';
function App() {
  
  return (
    <div className="App">
      <NavBar />
      <br />
      <BrowserRouter>
      <Routes>
        <Route path="/SignIn" element={
          <SignIn />
        } />
        <Route path="/AdminHome" element={
          <AdminHome/>
        } />
        <Route path="/AllSelling" 
        element={
          <AllSelling/>} 
          />
          <Route path="/AllShipping" 
        element={
          <AllShipping/>} 
          />
        <Route path="/AllCustomer" element={
          <AllCustomer />
        } />
        <Route path="/AddSelling" element={
          <AddSelling />
        } />
        <Route path="/AddShipping" element={
          <AddShipping />
        } />
        <Route path="/ShippingHome" element={
          <ShippingHome />
        } />
        <Route path="/ShippingRequests" element={
          <ShippingRequests />
        } />
        <Route path="/CompanyRequests" element={
          <CompanyRequests />
        } />
        <Route path="/SignUp" element={
          <SignUp />
        } />
        <Route path="/SellerHome" element={
          <SellingHome />
        } />
        <Route path="/SellerLogs" element={
          <SellerLogs />
        } />
        <Route path="/SellerProducts" element={
          <SellerProducts />
        } />
        <Route path="/AddProduct" element={
          <AddProduct />
        } /> 
      <Route path="/CustomerHome" element={
          <CustomerHome />
        } />
        <Route path="/CustomerLog" element={
          <CustomerLog />
        } />
        <Route path="/Market" element={
          <Market />
        } />
        <Route path="/Cart" element={
          <CustomerCart />
                } />
        <Route path="/Notifications" element={
          <Notifications />
        } />


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
