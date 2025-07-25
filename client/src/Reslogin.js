import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Reslogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState(""); // Added for error handling

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post('http://localhost:8000/Reslogin', {
        Email: email, // Ensure this matches the schema in your backend
        password,
      });

      console.log('Login response:', response.data);
      if (response.data.message === "Login successful") {
        console.log('Login successful');
        navigate('/Restaurant'); // Assuming '/Restaurant' is the correct path you want to navigate to
      } else {
        setError("Login failed. Please check your credentials.");
        console.log('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error.response?.data?.message || error.message);
      setError(error.response?.data?.message || "An unexpected error occurred.");
    }
  };

  return (
    <div>
      <div className="login-container">
        <h2 className="formngo">Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reslogin;

