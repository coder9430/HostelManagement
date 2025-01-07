import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/*import HomePage from './Pages/HomePage/HomePage';
/*import ComplaintPage from './Pages/ComplaintPage/ComplaintPage';
import LeaveHistoryPage from './Pages/LeaveHistoryPage/LeaveHistoryPage';
import LeaveApplyPage from './Pages/LeaveApplyPage/LeaveApplyPage';
import ProfilePage from './Pages/ProfilePage';
import NoticePage from './Pages/NoticePage/NoticePage'; // Make sure this exists
import LeavePage from './Pages/LeavePage/LeavePage'; // Make sure this exists*/


//signin or singup
import SignUP from './Pages/SigUP';
import LoginUser from './Pages/LoginUser';


//admin imports

import Notice from './Pages/AdminPages/Notice';
//import GenerateNotice from './Components/AdminNotice.jsx/GenerateNotice';//commnet
import Pending from './Pages/AdminPages/Pending';
import Solved from './Pages/AdminPages/Solved';
//import Leave from './Pages/CheckLeave/Leave';//comment
import Leave from './Pages/AdminPages/Leave';
import AdminProfile from './Pages/AdminPages/AdminProfile';
//import NoRegisteredPro from './Pages/AdminPages/NoRegisteredPro';
//import ProblemManagement from './Components/Problem/ProblemManagement';//continue


function App() {
  return (
    <Router>
      <div>
        {/* TabLeave component should be used if necessary */}
        <Routes>
       {/* <Route path="/" element={<HomePage />} /> }
        {/* <Route path="/complain" element={<ComplaintPage />} />
  <Route path="/leave" element={<LeavePage />} />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/apply" element={<LeaveApplyPage />} />
          <Route path="/history" element={<LeaveHistoryPage />} />
  <Route path="/profile" element={<ProfilePage />} />   */}


<Route path="/login" element={<LoginUser />} />
<Route path="/" element={<SignUP />} />


        
        

        {/*admin route */}
        <Route path="/notice" element={<Notice/>} />
        <Route path="/pending" element={<Pending/>} />
        <Route path="/solved" element={<Solved/>} />
        <Route path="/adminleave" element={<Leave/>} />
        <Route path="/profile" element={<AdminProfile/>} />
{/*<Route path="/problem" element={<NoRegisteredPro.jsx/>} />
<Route path="/problem" element={<ProblemManagement.jsx/>} />*/}
        

        
        
       

        </Routes>
      </div>
    </Router>
  );
}

export default App;
