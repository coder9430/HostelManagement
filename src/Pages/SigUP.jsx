import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import SigninPage from '../Components/signup/SigninPage';

function SignUP() {
 

  
  return (
    <div >
    <Navbar></Navbar>
    <div className="container mt-1 mb-1">
      <div className="row">
        
        <div className="col-lg-9 col-12 order-lg-2 order-2">
          <SigninPage/>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
          
  );
}
export default SignUP;
