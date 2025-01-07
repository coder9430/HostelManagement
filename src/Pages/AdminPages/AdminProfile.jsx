// AdminProfile.jsx
import React, { useState, useEffect } from 'react';

export default function AdminProfile() {
  const [adminData, setAdminData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdminData = async () => {
      const token = localStorage.getItem('authToken'); // Retrieve token from local storage
      if (!token) {
        setError('No token found');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('http://localhost:6000/admin-profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Send token in Authorization header
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setAdminData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Admin Profile</h1>
      {adminData ? (
        <div>
          <p><strong>Name:</strong> {adminData.name}</p>
          <p><strong>Email:</strong> {adminData.email}</p>
        </div>
      ) : (
        <p>No admin data available</p>
      )}
    </div>
  );
}
