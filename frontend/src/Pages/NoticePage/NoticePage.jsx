import React from 'react'
import Navbar from '../../Components/Navbar'
import Tab from '../../Components/Tab/Tab'
import NoticeTable from '../../Components/NoticeTable'
import Footer from '../../Components/Footer'
function NoticePage() {
  return (
    <div>
        <Navbar />
      <div className="container mt-1 mb-1">
        <div className="row">
          <div className="col-lg-3 col-12 order-lg-1 order-1">
            <Tab></Tab>
          </div>
          <div className="col-lg-9 col-12 order-lg-2 order-2">
            <NoticeTable></NoticeTable>
            
          </div>
        </div>
      </div>
      <Footer></Footer>
      
    </div>
  )
}

export default NoticePage
