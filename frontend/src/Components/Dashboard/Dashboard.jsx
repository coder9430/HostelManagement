import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h2 style={{ backgroundImage: 'linear-gradient(to right, #fa709a 0%, #fee140 100%) ',  color:'white',borderRadius:'10px',fontFamily: 'Arial, sans-serif'  }}>DASHBOARD</h2>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="card-body text-center" onClick={() => navigate('/complain')} style={{ cursor: 'pointer' }}>
              <img src="https://cdn-icons-png.flaticon.com/128/9375/9375631.png" alt="" style={{ width: '50px', height: '50px' }} className="mb-2" />
              <br />
              <span className="card-link text-black text-truncate">Complain</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="card-body text-center" onClick={() => navigate('/leave')} style={{ cursor: 'pointer' }}>
              <img src="https://cdn-icons-png.flaticon.com/128/10723/10723284.png" alt="" style={{ width: '50px', height: '50px' }} className="mb-2" />
              <br />
              <span className="card-link text-black text-truncate">Leave</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="card-body text-center" onClick={() => navigate('/notice')} style={{ cursor: 'pointer' }}>
              <img src="https://cdn-icons-png.flaticon.com/128/9710/9710762.png" alt="" style={{ width: '50px', height: '50px' }} className="mb-2" />
              <br />
              <span className="card-link text-black text-truncate">Notice</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
