import React from 'react';

function FormComplaint() {
  return (
    <div className="card p-4">
      <h2 style={{ backgroundImage: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)', color: 'white', borderRadius: '10px', fontFamily: 'Arial, sans-serif' }}>COMPLAINT</h2>
      <form>
        <div className="row mb-3">
          <div className="col">
            <label className="form-label" htmlFor="date">Date</label>
            <input className="form-control" type="date" id="date" />
          </div>
          <div className="col">
            <label className="form-label" htmlFor="complainAbout">Complain about</label>
            <select className="form-select" id="complainAbout" required>
              <option value="" disabled selected>Select</option>
              <option>Fan</option>
              <option>Bulb</option>
              <option>Washroom</option>
              <option>Window</option>
              <option>Door</option>
              <option>Plumber</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid option.
            </div>
          </div>
        </div> 
        <div className="mb-3">
          <label className="form-label" htmlFor="description">Description</label>
          <textarea className="form-control" id="description" rows="3"></textarea>
        </div>
        <button type="submit" className="btn mt-3" style={{ backgroundImage: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)' }}>Submit</button>
      </form>
    </div>
  );
}

export default FormComplaint;
