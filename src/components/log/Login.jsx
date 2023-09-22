import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate to navigate

  const handleLogin = async () => {
    try {
      const response = await axios.post('/login', { email, password });

      if (response.status === 200) {
        const user = response.data.user;

        // Check if user is authenticated (you may need to change this check based on your server's response)
        if (user) {
          // Handle successful login here
          alert('Login successful');

          // Navigate to /dashboard/:userId
          const userId = user._id;
          navigate(`/dashboard/${userId}`); // Use navigate to change routes
        } else {
          // Handle authentication error
          alert('Login failed. Please check your credentials or register.');
        }
      } else {
        // Handle other HTTP status codes, if needed
        alert('Login failed due to a server error.');
      }
    } catch (error) {
      console.error('Login error:', error);

      // Handle network or other errors
      alert('Login failed. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
