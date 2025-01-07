import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Login from '../Components/signup/Login';
function LoginUser() {
  return (


    <div >
    <Navbar></Navbar>
    <div className="container mt-1 mb-1">
      <div className="row">
        
        <div className="col-lg-9 col-12 order-lg-2 order-2">
          <Login/>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
  )
}

export default LoginUser;
