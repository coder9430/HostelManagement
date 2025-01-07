import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


function SigninPage() {
  const [userid, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userType === "Admin" && secretKey !== "puja") {
      alert("Invalid Admin");
    } 
    
    else {
      console.log(userid, email, password);
      fetch("http://localhost:6000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid,
          email,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
        
          if (data.status === "ok") {
            console.log('Navigating to login page');
            alert("Registration Successful");
            console.log('Navigating to login page');
            navigate('/login');
          } 
          
          else {
            alert("Something went wrong");
          }
        });
    }
  };

  return (
 <div className="card">
      <div className="row">
        <div className="col-5">
          <img
            src="https://media.istockphoto.com/vectors/dormitory-room-sharing-flat-vector-illustration-vector-id1170514323?k=6&m=1170514323&s=612x612&w=0&h=5AEUlUY47IcouQ9Z0kNwiE86QKbRyN73JV0vmj6vjXI="
            alt=""
            style={{ width: 300, height: 300 }}
          />
        </div>

        <div className="col-7">
          <div className="card">
            <h3
              style={{
                backgroundImage: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)',
                color: 'white',
                borderRadius: '10px',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
              }}
            >
              SIGN UP
            </h3>

            <form onSubmit={handleSubmit}>
              {/* User Type Selection */}
              <div className="form-floating mb-3">
                <input
                  type="radio"
                  name="UserType"
                  value="User"
                  onChange={(e) => setUserType(e.target.value)}
                /> User
                <input
                  type="radio"
                  name="UserType"
                  value="Admin"
                  onChange={(e) => setUserType(e.target.value)}
                /> Admin
              </div>

              {/* Secret Key Field */}
              {userType === "Admin" && (
                <div className="mb-3">
                  <label>Secret Key</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Secret key"
                    onChange={(e) => setSecretKey(e.target.value)}
                  />
                </div>
              )}

              {/* User Id Field */}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingName"
                  placeholder="User Name"
                  onChange={(e) => setUserId(e.target.value)}
                />
                <label htmlFor="floatingName">User Id</label>
              </div>

              {/* Email Field */}
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>

              {/* Password Field */}
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              {/* Submit Button */}
              <button type="submit" >
                SignUP
              </button>

              <p className="forgot-password text-right">
                Already registered <a href="/login">Login?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SigninPage;
