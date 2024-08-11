import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {useAuth} from "../store/auth"
import Lottie from 'react-lottie';
import animationData from '../travel.json'


function Login() {
  const [user,setUser]=useState
  (
    {
      email:"",
      password:""
    }
  )
  const navigate=useNavigate();
  const {storeTokenInLS}=useAuth();
  const handleInput=(e)=>{
   
    const {name,value} = e.target
      console.log(user,value)
     
     setUser(
      {
        ...user,
        [name]:value
      }
     )
  }
  const handelSubmit=async(e)=>
  {
    e.preventDefault();
    const response=await fetch("http://localhost:3000/login",
      {
        method:"POST",
        headers:
        {
          "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
      }
    )
    if(response.ok)
    {
      const res_data=await response.json();
      console.log("res from server",res_data);
      //store the token in localstorage of the brouser
      storeTokenInLS(res_data.token);
      // here we will use the context api to avoide the propsdrilling using context api we cant pass the properties of 
      // parent directly to the child without pass it to other child in between
      //we have to pass this token to differnt child
     

       setUser({email:"",password:""})
      navigate("/")
    }
    else{
      navigate("/signup")
    }
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className='container card'>
      <div className='row'>
        <div className='col-5'>
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
        <div className='col-7'>
          <div className='card'>
            <h3 style={{
              backgroundImage: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)',
              color: 'white',
              borderRadius: '10px',
              fontFamily: 'Arial, sans-serif'
            }}>LOGIN</h3>
            <form onSubmit={handelSubmit}>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="email" placeholder="name@example.com" name="email" required value={user.email} onChange={handleInput}/>
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="Password" placeholder="Password" name="password" required value={user.password} onChange={handleInput}/>
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div>
              <p>If you don't have account <span onClick={()=>navigate('/signup')}>sign up</span> </p>
            </div>
            <div className="col-12">
            <button className="btn btn-dark" type="submit" >Login</button>
          </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
