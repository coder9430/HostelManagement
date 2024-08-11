import React, { useState } from 'react';
// import { json } from 'react-router-dom';
import {useAuth} from "../store/auth"

function FormComplaint() {
  const [complaint,setComplaint]=useState
  (
    {
      date:"",
      roomNumber:"",
      studentId:"",
      complaintCat:"",
      description:""
    }
  )
  const [userData,setUserData]=useState(true);
  const {user}=useAuth();
  if(userData&&user)
  {
    setComplaint(
      {
        studentId:user._id
      }
    )
    setUserData(false);
  }
  const handelChange=(e)=>
  {
     let name=e.traget.name;
     let value=e.traget.value;
     setComplaint(
      {
        ...complaint,
        [name]:value
      }
     )
  }
  const handelSubmit=async(e)=>
  {
    e.preventDefault();
    try{
     const response=await fetch("",
      {
        method:"POST",
        headers:
        {
          "Content-Type":"application/json"
        },
        body:JSON.stringify(complaint)
      }
     )
     if(response.ok)
     {
       setComplaint({date:"",roomNumber:"",studentId:"",complaintCat:"",description:""})
     }
    }catch(e)
    {
        console.log(e);
    }
  }
  return (
    <div className="card p-4">
      <h2 style={{ backgroundImage: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)', color: 'white', borderRadius: '10px', fontFamily: 'Arial, sans-serif' }}>COMPLAINT</h2>
      <form onSubmit={handelSubmit}>
        <div className="row mb-3">
          <div className="col">
            <label className="form-label" htmlFor="date">Date</label>
            <input className="form-control" type="date" id="date" name="date" value={complaint.date} onChange={handleChange}/>
          </div>
          <div className='col'>
            <label htmlFor=""className='from-label'>Room Number</label>
             <input type="text" className='form-control' id='roomNumber' name='roomNumber' value={complaint.rooNumber} onChange={handelChange}/>
          </div>
        </div> 
        <div className='row mb-3'>
          <div className='col'>
           <label htmlFor="" className='form-label'>Student Id</label>
           <input type="text" className='form-control'id='studentId' name='studentId' value={complaint.studentId} onChange={handelChange}/>
          </div>
          
          <div className="col">
            <label className="form-label" htmlFor="complainAbout">Complain about</label>
            <select className="form-select" id="complainAbout" required name='complaintCat'value={complaint.complaintCat} onChange={handelChange}>
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
          <textarea className="form-control" id="description" rows="3" name="description" value={complaint.description} onChange={handelChange}></textarea>
        </div>
        <button type="submit" className="btn mt-3 btn-dark">Submit</button>
      </form>
    </div>
  );
}

export default FormComplaint;
