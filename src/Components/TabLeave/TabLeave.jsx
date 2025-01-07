import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tableave.css'; // Import custom CSS for styling

function TabLeave() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-sm">
        <div className="card w-100 mt-2">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
              <table className="table table-hover">
                <tbody className="navbar-nav flex-column">
                  <tr className="nav-item" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                    <td className="nav-link d-flex align-items-center border-bottom">
                      <img src="https://cdn-icons-png.flaticon.com/128/553/553416.png" alt="Home Icon" className="nav-icon" />
                      <span>HOME</span>
                    </td>
                  </tr>
                  <tr className="nav-item" onClick={() => navigate('/apply')} style={{ cursor: 'pointer' }}>
                    <td className="nav-link d-flex align-items-center border-bottom">
                      <img src="https://cdn-icons-png.flaticon.com/128/16751/16751492.png" alt="Apply Icon" className="nav-icon" />
                      <span>APPLY</span>
                    </td>
                  </tr>
                  <tr className="nav-item" onClick={() => navigate('/history')} style={{ cursor: 'pointer' }}>
                    <td className="nav-link d-flex align-items-center border-bottom">
                      <img src="https://cdn-icons-png.flaticon.com/128/11412/11412573.png" alt="History Icon" className="nav-icon" />
                      <span>HISTORY</span>
                    </td>
                  </tr>
                  <tr className="nav-item" onClick={() => navigate('/leave')} style={{ cursor: 'pointer' }}>
                    <td className="nav-link d-flex align-items-center border-bottom">
                      <img src="https://cdn-icons-png.flaticon.com/128/9375/9375631.png" alt="Present Leave Icon" className="nav-icon" />
                      <span>PRESENT LEAVE</span>
                    </td>
                  </tr>
                  <tr className="nav-item">
                    <td 
                      className="nav-link d-flex align-items-center border-bottom" 
                      onClick={() => navigate('/logout')}
                      style={{ cursor: 'pointer' }}
                    >
                      <img src="https://cdn-icons-png.flaticon.com/128/9653/9653907.png" alt="Logout Icon" className="nav-icon" />
                      <span>LOG OUT</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default TabLeave;
