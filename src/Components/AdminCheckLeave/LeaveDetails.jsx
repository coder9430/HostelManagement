import React, { useState } from 'react';

export default function LeaveDetails() {
  const [status, setStatus] = useState('Pending'); // State for status
  const [message, setMessage] = useState(''); // State for the message

  const updateUserLeaveStatus = async (newStatus) => {
    try {
      const response = await fetch('http://localhost:6000/update-leave-status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          leaveId: 'leaveId123', // Replace with actual leave ID
          status: newStatus,
        }),
      });

      const data = await response.json();

      if (data.status === 'ok') {
        console.log(`User's leave status updated to: ${newStatus}`);
      } else {
        console.error('Failed to update status');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    
    if (newStatus === 'Approved') {
      setMessage('Leave Approved');
      updateUserLeaveStatus(newStatus); // Update the user's leave status
    } else {
      setMessage(''); // Clear message if status is not approved
    }
  };

  return (
    <div className="card p-4">
      <h2 style={{ backgroundImage: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)', color: 'white', borderRadius: '10px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>Leave Registered</h2>
      
      {message && <p style={{ color: 'green', fontWeight: 'bold', textAlign: 'center' }}>{message}</p>}
     
      <form>
        <table className="table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Apply Date</th>
              <th>Leave Date</th>
              <th>Destination</th>
              <th>Contact No</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2024-08-01</td>
              <td>2024-08-10</td>
              <td>New York</td>
              <td>1234567890</td>
              <td>Vacation</td>
              <td>
                <select value={status} onChange={handleStatusChange}>
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
