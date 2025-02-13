import React from 'react';
import Navbar_khedmouni from '../../navbar.js';
import { MuiFileInput } from 'mui-file-input';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, Button } from '@mui/material';

const MyComponent = ({ icon, title, label, accept }) => {
  const [value, setValue] = React.useState(null);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <Button
        variant="contained"
        component="label"
        startIcon={React.cloneElement(icon, { sx: { fontSize: 40 } })} // Increase icon size
        sx={{ marginBottom: 2 }}
      >
        {label}
        <input
          type="file"
          hidden
          accept={accept}
          onChange={(e) => handleChange(e.target.files[0])}
        />
      </Button>
      {value && <p>{value.name}</p>}
    </Box>
  );
};
/* <MyComponent
icon={<CloudUploadIcon />}
title="Upload your CV"
width="100%"
label="Upload your CV"
accept="application/pdf"
/>*/ 