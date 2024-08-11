import React from 'react'
import { useAuth } from '../store/auth';

function FormLeave() {
  const [leave,setLeave]=(
    {
      studentId:"",
      destination:"",
      date1:"",
      date2:"",
      description:""
    })
    const [userData,setUserData]=useState(true);

    const {user}=useAuth();
    if(userData&& user)
    {
      setLeave(
        {
          studentId:user._id
        }
      )
      setUserData(false)
    }

    const handleInput=(e)=>
    {
    let name=e.target.name;
    let value=e.target.value;
    setLeave(
      {
        ...leave,
        [name]:value

      }
      // reply lkaro na
    )
    }
    const handelSubmit=async(e)=>
    {
      e.preventDefault();
      const response=await fetch("",
        {
          method:"POST",
          headers:
          {
            "Content-Type":"application/json"
          },
          body:JSON.stringify(leave)
        }
      )
      if(response.ok)
      {
        setLeave({date1:"",date2:"",destination:"",description:""})
      }
    }
    
  return (
    <div className='card'>
         <h2 style={{ backgroundImage: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)', color: 'white', borderRadius: '10px', fontFamily: 'Arial, sans-serif' }}>APPLY LEAVE</h2>
        <form onSubmit={handelSubmit}>
        <div className='row m-3'>
        <div className='col'>
            <label for="e1" class="form-label">Student ID</label>
            <input class="form-control" type="text" id="studentId" name="studentId" value={leave.studentId} onChange={handleInput}  ></input>
          </div> 

            <div className='col'>
            <label for="e1" class="form-label">Destination</label>
            <input class="form-control" type="text" id="Destination" name="destination" value={leave.destination} onChange={handleInput}  ></input>
            </div>    
       </div>
            <div className='row m-3'>
                <div className='col'>
                <label className="form-label" htmlFor="date">Date From</label>
                <input className="form-control" type="date" id="date1" name="date1" value={leave.date1} onChange={handleInput}/>
                </div>
                <div className='col'>
                <label className="form-label" htmlFor="date">Date TO</label>
                <input className="form-control" type="date" id="date2" name="date2" value={leave.date2} onChange={handleInput}/>
                </div>
            </div>
           
            <div className='row m-3'>
            <label for="exampleFormControlTextarea1" class="form-label" name="description" value={leave.description}onChange={handleInput}>Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn mt-3 btn-dark">Submit</button>
        </form>
      
    </div>
  )
}

export default FormLeave
