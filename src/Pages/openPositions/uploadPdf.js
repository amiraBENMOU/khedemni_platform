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
      <MyComponent
        icon={<CloudUploadIcon />}
        title="Upload your CV"
        width="100%"
        label="Upload your CV"
        accept="application/pdf"
       />
      {value && <p>{value.name}</p>}
    </Box>
  );
};
