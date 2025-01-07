import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#444',
      color: '#fff',
      padding: '10px 0',
      textAlign: 'center',
      
    }}>
      <div className="container py-3">
        <p className="mb-0" style={{ margin: '0', fontSize: '14px'}}>© 2024 Hostel Management System</p>
      </div>
    </footer>
  );
}

export default Footer;
