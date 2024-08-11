import React from 'react';

function PresentLeave() {
  return (
    <div className='card'>
      <h2 style={{ backgroundImage: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)', color: 'white', borderRadius: '10px', fontFamily: 'Arial, sans-serif' }}>PRESENT LEAVE</h2>
      <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>SNo</th>
              <th>Apply date</th>
              <th>Leave days</th>
              <th>Destination</th>
              <th>Contact No.</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>01-Jun-2024 (Sat) 02:36 PM</td>
              <td>08-Jun-2024 (Sat) 09:30 AM TO 20-Jun-2024 (Thu) 09:00 PM</td>
              <td>Jamalpur (Bihar)</td>
              <td>9430576105</td>
              <td>3rd year complete, going to home</td>
              <td>Approved</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PresentLeave;
