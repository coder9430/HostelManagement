import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ComplaintPage from './Pages/ComplaintPage/ComplaintPage';
import LeaveHistoryPage from './Pages/LeaveHistoryPage/LeaveHistoryPage';
import LeaveApplyPage from './Pages/LeaveApplyPage/LeaveApplyPage';
import ProfilePage from './Pages/ProfilePage';
import NoticePage from './Pages/NoticePage/NoticePage'; // Make sure this exists
import LeavePage from './Pages/LeavePage/LeavePage'; // Make sure this exists

function App() {
  return (
    <Router>
      <div>
        {/* TabLeave component should be used if necessary */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/complain" element={<ComplaintPage />} />
          <Route path="/leave" element={<LeavePage />} />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/apply" element={<LeaveApplyPage />} />
          <Route path="/history" element={<LeaveHistoryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
