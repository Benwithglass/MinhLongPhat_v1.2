// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/home/Home";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";
import MyState from "./context/data/myState";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProduct from "./pages/admin/pages/AddProduct";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllProducts from "./pages/allproducts/AllProducts";
import Introruction from "./pages/introduction/Introruction";
import Information from "./pages/information/Information";
import Recruit from "./pages/recruit/Recruit";
import Contact from "./pages/contact/Contact";


function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vechungtoi" element={<Introruction/>} />
          <Route path="/thongtin" element={<Information/>} />
          <Route path="/tuyendung" element={<Recruit/>} />
          <Route path="/lienhe" element={<Contact/>} />
          <Route path="/dashboard" element={
            <ProtectedRouteForAdmin>
              <Dashboard/>
            </ProtectedRouteForAdmin>
          } />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/allproducts" element={<AllProducts/>} />
          <Route path="/productinfo/:id" element={<ProductInfo/>} />
          <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
              <AddProduct/>
            </ProtectedRouteForAdmin>
          } />
          <Route path="/updateproduct" element={
            <ProtectedRouteForAdmin>
              <UpdateProduct/>
            </ProtectedRouteForAdmin>
          } />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer/>
      </Router>
    </MyState>
  );
}

export default App

// user

export const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user')
  if (user) {
    return children
  } else {
    return <Navigate to={'/login'}/>
  }
}

// admin

const ProtectedRouteForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  if (admin.user.email === 'minhlongphat2020@gmail.com') {
    return children
  } else {
    return <Navigate to={'/login'}/>
  }
} 