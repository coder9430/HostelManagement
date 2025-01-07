import React from 'react';
import Footer from '../../Components/Footer';
import TabComplain from '../../Components/TabComplain/TabComplain';
import Navbar from '../../Components/Navbar';
import RegisteredProblems from '../../Components/AdmRegisterProb/RegisteredProblems';

export default function NoRegisteredPro() {
  return (
    <div>
       
      <Navbar />
      <div className="container mt-1 mb-1">
        <div className="row">
        <div className="col-lg-3 col-12 order-lg-1 order-1">
          <TabComplain></TabComplain>
          </div>
          <div className="col-lg-9 col-12 order-lg-2 order-2">
           <RegisteredProblems/>
            
          </div>
        </div>
      </div>
      <Footer></Footer>

    </div>

  
  )
}
