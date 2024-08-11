import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TabComplain.css'; // Import custom CSS for styling

function TabComplain() {
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
                  <tr className="nav-item">
                    <td 
                      className="nav-link d-flex align-items-center border-bottom" 
                      onClick={() => navigate('/')}
                      style={{ cursor: 'pointer' }}
                    >
                      <img src="https://cdn-icons-png.flaticon.com/128/553/553416.png" alt="Home Icon" className="nav-icon" />
                      <span>HOME</span>
                    </td>
                  </tr>
                  <tr className="nav-item">
                    <td 
                      className="nav-link d-flex align-items-center border-bottom" 
                      onClick={() => navigate('/solved')}
                      style={{ cursor: 'pointer' }}
                    >
                      <img src="https://cdn-icons-png.flaticon.com/128/9071/9071333.png" alt="Solved Icon" className="nav-icon" />
                      <span>SOLVED</span>
                    </td>
                  </tr>
                  <tr className="nav-item">
                    <td 
                      className="nav-link d-flex align-items-center border-bottom" 
                      onClick={() => navigate('/pending')}
                      style={{ cursor: 'pointer' }}
                    >
                      <img src="https://cdn-icons-png.flaticon.com/128/11412/11412573.png" alt="Pending Icon" className="nav-icon" />
                      <span>PENDING</span>
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

export default TabComplain;
