/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/config";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'patient' // Default role
  });

  const navigate = useNavigate();

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async event => {
    event.preventDefault();

    try {
      console.log("Sending Data:", formData);

      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(formData) 
      });

      const data = await res.json();
      console.log("Server Response:", data); 

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong!");
      }

     
      localStorage.setItem('token', data.token);

      
      toast.success("Login successful!");

     
      navigate('/home');
    } catch (err) {
      toast.error(`Login failed: ${err.message}`);
    }
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="container d-flex justify-content-center mt-5">
        <div className="card" style={{ width: '400px', padding: '20px' }}>
          <h3 className="card-title text-center mb-4">
            Hello <span className="text-primary">Welcome!</span> Back 🎉
          </h3>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <input 
                type="email" 
                placeholder="Enter Your Email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange}  
                className="form-control" 
                required 
              />
            </div>
            <div className="mb-3">
              <input 
                type="password" 
                placeholder="Enter Your Password" 
                name="password" 
                value={formData.password} 
                onChange={handleInputChange}  
                className="form-control" 
                required 
              />
            </div>
            <div className="mb-3">
              <select 
                name="role" 
                value={formData.role} 
                onChange={handleInputChange} 
                className="form-select"
                required
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </div>
            <div className="d-grid mt-4">
              <button 
                type="submit" 
                className="btn btn-primary"
              >
                Login
              </button>
            </div>
            <p className="mt-3 text-center">
              Don't have an account? <Link to='/register' className="text-primary">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
