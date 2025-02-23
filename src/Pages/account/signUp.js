import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useSignUpMutation } from '../../state/api/apiSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [signUp, { isLoading }] = useSignUpMutation();
  const navigate = useNavigate(); // Initialize useNavigate


  const validateUser = (fullName, phoneNumber, email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validDomains = ["hotmail.fr", "gmail.com"];
    const emailDomain = email.split("@")[1];
    const phoneRegex = /^\+?[0-9]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const newErrors = {};

    if (!fullName || fullName.length <= 4) {
      newErrors.fullName = "Full name is required and must be greater than 4 characters.";
    }

    if (!email || !email.includes("@") || !emailRegex.test(email) || !validDomains.includes(emailDomain)) {
      newErrors.email = "Email is required and must be a valid email address including @ and ending with 'hotmail.fr' or 'gmail.com'.";
    }

    if (!phoneNumber || !phoneRegex.test(phoneNumber)) {
      newErrors.phoneNumber = "Phone number is required and must contain only numbers and/or a '+' sign at the beginning.";
    }

    if (!password || !passwordRegex.test(password)) {
      newErrors.password = "Password is required and must be at least 8 characters long and contain a mix of letters, signs, and numbers.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateUser(formData.fullName, formData.phoneNumber, formData.email, formData.password);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await signUp(formData).unwrap();
      console.log('Sign Up Success:', response);
      toast.success('Sign Up Successful!');
      navigate('/');
    } catch (error) {
      console.error('Failed to sign up:', error);
      toast.error('Failed to sign up. Please try again.');
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
        backgroundColor: '#84BDFF',
      }}
    >
      <ToastContainer />
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
          error={!!errors.fullName}
          helperText={errors.fullName}
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
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber}
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
          error={!!errors.email}
          helperText={errors.email}
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
          error={!!errors.password}
          helperText={errors.password}
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
        <div className="mt-3">
          <p> you already have an account, <a href="/signIn" style={{ textDecoration: 'none' }}>Sign In</a></p>
        </div>
      </Box>
    </Container>
  );
}

export default SignUp;