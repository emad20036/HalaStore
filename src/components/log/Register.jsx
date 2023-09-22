import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import axios from 'axios';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate to navigate

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3000/register', {
        firstName,
        lastName,
        homeAddress,
        email,
        password,
      });

      if (response.status === 201) {
        // Handle successful registration here
        alert('Registration successful');

        // Redirect to /dashboard/:userId
        const userId = response.data.user._id;
        navigate(`/dashboard/${userId}`); // Use navigate to change routes
      } else if (response.status === 400) {
        // Handle registration error (e.g., email already exists)
        alert('Email already exists. Please log in.');
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div>
      <h1>Create a New Account</h1>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Your Home Address"
        value={homeAddress}
        onChange={(e) => setHomeAddress(e.target.value)}
      />
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
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
