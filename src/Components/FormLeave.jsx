import React from 'react'

function FormLeave() {
  return (
    <div className='card'>
         <h2 style={{ backgroundImage: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)', color: 'white', borderRadius: '10px', fontFamily: 'Arial, sans-serif' }}>APPLY LEAVE</h2>
        <form action="">
            <div className='row mb-3'>
                <div className='col'>
                <label className="form-label" htmlFor="date">Date From</label>
                <input className="form-control" type="date" id="date" />
                </div>
                <div className='col'>
                <label className="form-label" htmlFor="date">Date TO</label>
                <input className="form-control" type="date" id="date" />
                </div>
            </div>
            <div className='row mb-3'>
            <div className='row'>
            <label for="e1" class="form-label">Destination</label>
            <input class="form-control" id="" ></input>
            </div>
                 
            </div>
            <div className='row mb-3'>
            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn mt-3" style={{ backgroundImage: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)' }}>Submit</button>
        </form>
      
    </div>
  )
}

export default FormLeave
