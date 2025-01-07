import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:6000/login-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "ok") {
        localStorage.setItem("token", data.data);
        localStorage.setItem("userType", data.userType);
        localStorage.setItem("loggedIn", true);

        if (data.userType === "Admin") {
          navigate('/admin-dashboard'); // or any route you want for admin
        } else if (data.userType === "User") {
          navigate('/dashboard');
        }
      } else {
        setError(data.error || "An unexpected error occurred");
      }
    })
    .catch((err) => {
      console.error(err);
      setError("An unexpected error occurred");
    });
  }

  return (
    <div className='card'>
      <div className='row'>
        <div className='col-5'>
          <img
            src="https://media.istockphoto.com/vectors/dormitory-room-sharing-flat-vector-illustration-vector-id1170514323?k=6&m=1170514323&s=612x612&w=0&h=5AEUlUY47IcouQ9Z0kNwiE86QKbRyN73JV0vmj6vjXI="
            alt=""
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className='col-7'>
          <div className='card'>
            <form onSubmit={handleSubmit}>
              <h3
                style={{
                  backgroundImage: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)',
                  color: 'white',
                  borderRadius: '10px',
                  fontFamily: 'Arial, sans-serif'
                }}
              >
                LOGIN
              </h3>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="d-grid">
                <button type="submit">Submit</button>
              </div>
              {error && <div className="alert alert-danger mt-2">{error}</div>}
              <p className="forgot-password text-right">
                <a href="/signup">Signup</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
