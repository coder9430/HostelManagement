import React from 'react';
import Navbar from '../../Components/Navbar';
import TabLeave from '../../Components/TabLeave/TabLeave';
import Footer from '../../Components/Footer';
import FormLeave from '../../Components/FormLeave';


function LeavePage() {
  return (
    <div >
      <Navbar />
      <div className="container mt-1 mb-1">
        <div className="row">
          <div className="col-lg-3 col-12 order-lg-1 order-1">
            <TabLeave></TabLeave>
          </div>
          <div className="col-lg-9 col-12 order-lg-2 order-2">
            <FormLeave></FormLeave>
            
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default LeavePage;
