import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    alert('Signup successful!');
  };

  const handleSignin = () => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    if (email === savedEmail && password === savedPassword) {
      alert('Signin successful!');
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 8 }}>
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ width: '100%', marginBottom: 2 }}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ width: '100%', marginBottom: 2 }}
      />
      <Button variant="contained" onClick={handleSignup} sx={{ marginBottom: 2 }}>
        Signup
      </Button>
      <Button variant="contained" onClick={handleSignin}>
        Signin
      </Button>
    </Box>
  );
}