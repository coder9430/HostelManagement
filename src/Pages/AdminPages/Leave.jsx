import React from 'react'
import Navbar from '../../Components/Navbar';
import LeaveDetails from '../../Components/AdminCheckLeave/LeaveDetails';
import Footer from '../../Components/Footer';
import TabComplain from '../../Components/TabComplain/TabComplain';




export default function Leave() {
  return (
    <div>
      <Navbar />
      <div className="container mt-1 mb-1">
        <div className="row">
        <div className="col-lg-3 col-12 order-lg-1 order-1">
          <TabComplain></TabComplain>
          </div>
          <div className="col-lg-9 col-12 order-lg-2 order-2">
           <LeaveDetails/>
            
          </div>
        </div>
      </div>
      <Footer></Footer>

    </div>
  )
}
