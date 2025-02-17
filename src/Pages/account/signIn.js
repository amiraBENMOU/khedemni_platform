import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useSignInMutation } from '../../state/api/apiSlice';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signIn, { isLoading }] = useSignInMutation();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signIn({ email, password }).unwrap();
      localStorage.setItem('isAuthenticated', 'true'); // Store authentication status
      console.log('Sign In Success:', response);
      //test 
    
      navigate('/'); // Redirect to home page upon successful sign-in
    } catch (error) {
      console.error('Failed to sign in:', error);
    }
  };

  return (
    <Container
      maxWidth="xxl"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#84BDFF', // Grey background
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 4,
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Sign In
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          disabled={isLoading}
        >
          Sign In
        </Button>
        <div className="mt-3">
           <p> if you don't have an account, <a href="/signUp" style={{ textDecoration: 'none' }}>Sign Up</a></p> 
       </div>
      </Box>
    </Container>
  );
}

export default SignIn;