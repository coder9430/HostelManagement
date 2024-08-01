import React from 'react'

function Login() {
  return (
    <div className='card'>
        <div className='row'>
       <div className='col-5'>
       <img src="https://media.istockphoto.com/vectors/dormitory-room-sharing-flat-vector-illustration-vector-id1170514323?k=6&m=1170514323&s=612x612&w=0&h=5AEUlUY47IcouQ9Z0kNwiE86QKbRyN73JV0vmj6vjXI=" alt="" style={{width:300,height:300}}/>
       </div>
       <div className=' col-7'>
        
        <div className='card'>
        <h3 style={{ backgroundImage: 'linear-gradient(to right, #fa709a 0%, #fee140 100%) ',  color:'white',borderRadius:'10px',fontFamily: 'Arial, sans-serif'  }}>LOGIN</h3>
        <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
        <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
        <label for="floatingPassword">Password</label>
        </div>
        </div>

       </div>
        </div>
      
    </div>
  )
}

export default Login
