import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import Lottie from 'react-lottie';
import animationData from '../travel.json';

function SigninPage() {
  const [user, setUser] = useState({
    email: "",
    password1: "",
    password2: ""
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user.password1 !== user.password2) {
        return alert("Passwords do not match!");
      }

      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email, password: user.password1 }),
      });

      if (response.ok) {
        const res_data = await response.json();
        storeTokenInLS(res_data.token);
        setUser({ email: "", password1: "", password2: "" });
        navigate('/login');
      } else {
        const errorData = await response.json();
        alert(errorData.msg || "Registration failed");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className='card'>
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
            }}>SIGN UP</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  required
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  placeholder="Password"
                  name="password1"
                  value={user.password1}
                  onChange={handleInput}
                  required
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPasswordConfirm"
                  placeholder="Confirm Password"
                  name="password2"
                  value={user.password2}
                  onChange={handleInput}
                  required
                />
                <label htmlFor="floatingPasswordConfirm">Confirm Password</label>
              </div>
              <div className="col-12">
                <button className="btn btn-dark" type="submit">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigninPage;
