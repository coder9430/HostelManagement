import React, { useState } from 'react';

export default function GenerateNotice() {
  const [date, setDate] = useState('');
  const [noticeAbout, setNoticeAbout] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:6000/submit-notice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date, noticeAbout, description }),
      });

      const data = await response.json();

      if (data.status === 'ok') {
        alert('Notice submitted successfully!');
        // Reset form or handle success
        setDate('');
        setNoticeAbout('');
        setDescription('');
      } else {
        alert('Error submitting notice: ' + data.message);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert('Error submitting notice: ' + error.message);
    }
  };

  return (
    <div className="card p-4">
      <h2 style={{ backgroundImage: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)', color: 'white', borderRadius: '10px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>Generate Notice</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <label className="form-label" htmlFor="date">Date</label>
            <input className="form-control" type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </div>
          <div className="col">
            <label className="form-label" htmlFor="noticeAbout">Notice About</label>
            <select className="form-select" id="noticeAbout" value={noticeAbout} onChange={(e) => setNoticeAbout(e.target.value)} required>
              <option value="" disabled>Select</option>
              <option>FESTIVAL</option>
              <option>CULTURAL FEST</option>
              <option>ROOM CHANGE</option>
              <option>WORK PROGRESSION</option>
              <option>HEALTH CARE</option>
              <option>CLEANLINESS</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid option.
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="description">Description</label>
          <textarea className="form-control" id="description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button type="submit" className="btn mt-3" style={{ backgroundImage: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)' }}>Submit</button>
        </div>
      </form>
    </div>
  );
}
