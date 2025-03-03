import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import { useUploadFileMutation} from '../../state/api/apiSlice.js';


const UploadPdf = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [uploadFile, { isLoading, isSuccess, isError, error }] = useUploadFileMutation();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile ? selectedFile.name : '');
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      await uploadFile(formData);
    }
  };

  const butonStyle = {
    backgroundColor: '#211C84',
    color: 'white',
    borderRadius: 20,
    padding: '10px 20px',
    fontSize: '16px',
    '&:hover': { backgroundColor: '#5FA0FF' },
  };
  const buttonStyle = {
    backgroundColor: '#211C84',
    color: 'white',
    borderRadius: 20,
    padding: '10px 20px',
    fontSize: '16px',
    '&:hover': { backgroundColor: '#5FA0FF' },
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh"  minWidth={'80vw'} pb={5}>
    <Card
        sx={{
            backgroundColor: '#03D6AE',
            color: 'white',
            borderRadius: 4,
            padding:3,
            width: '60%',
            textAlign: 'center',
            boxShadow: 3,
            marginTop:0,
        }}
    >
       <CardContent>
            
                   
                    <Typography variant="h5" fontWeight="bold">
                        Find your Next  <br />
                        <Typography component="span" color="#4D55CC" fontWeight="bold">
                         professional challenge!
                        </Typography>
                    </Typography>
       </CardContent>
         <>
              <form onSubmit={handleSubmit}>
            <input
              type="file"
              onChange={handleFileChange}
              id="file-input"
              style={{ display: 'none' }}
            />
            <label htmlFor="file-input">
              <Button
                variant="contained"
                component="span"
                sx={buttonStyle}
              >
                Choose File
              </Button>
            </label>
           
            <Button
              variant="contained"
              type="submit"
              sx={buttonStyle}
              disabled={isLoading}
              style={{ marginLeft: '10px' }}
            >
              Upload
            </Button>
            {fileName && <Typography variant="body2" mt={2} color="white">{fileName}</Typography>}
          </form>
          {isSuccess && <p>File uploaded successfully!</p>}
          {isError && <p>Error uploading file: {error.message}</p>}
        </>
    </Card>
    </Box>
  );
};

export default UploadPdf;

