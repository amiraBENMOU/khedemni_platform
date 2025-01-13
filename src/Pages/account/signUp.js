import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useSignUpMutation } from '../../state/api/apiSlice';

function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: ''
  });
  const [signUp, { isLoading }] = useSignUpMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signUp(formData).unwrap();
      console.log('Sign Up Success:', response);
    } catch (error) {
      console.error('Failed to sign up:', error);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0', // Grey background
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
          Sign Up
        </Typography>
        <TextField
          label="Full Name"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          disabled={isLoading}
        >
          Sign Up
        </Button>
      </Box>
    </Container>
  );
}

export default SignUp;