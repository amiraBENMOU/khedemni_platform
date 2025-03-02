/*
import React, { useState } from 'react';
import { useUploadFileMutation} from '../../state/api/apiSlice.js';

const UploadPdf = () => {
  const [file, setFile] = useState(null);
  const [uploadFile, { isLoading, isSuccess, isError, error }] = useUploadFileMutation();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      await uploadFile(formData);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit" disabled={isLoading}>Upload</button>
      </form>
      {isSuccess && <p>File uploaded successfully!</p>}
      {isError && <p>Error uploading file: {error.message}</p>}
    </div>
  );
};

export default UploadPdf;
*/


import React ,{ useState } from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import { useUploadFileMutation} from '../../state/api/apiSlice.js';

const UploadPdf = () => {
  const [file, setFile] = useState(null);
  const [uploadFile, { isLoading, isSuccess, isError, error }] = useUploadFileMutation();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      await uploadFile(formData);
    }
  };


    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" minWidth={'80vw'}>
            <Card
                sx={{
                    backgroundColor: '#03D6AE',
                    color: 'white',
                    borderRadius: 4,
                    padding:2,
                    width: '60%',
                    textAlign: 'center',
                    boxShadow: 3,
                    marginTop:0,
                }}
            >
                <CardContent>
                    {/* Logo Placeholder */}
                    <Box display="flex" justifyContent="center" mb={2}>
                        <Box
                            sx={{
                                width: 50,
                                height: 20,
                                borderRadius: 2,
                            }}
                        />
                    </Box>

                    {/* Title */}
                    <Typography variant="h5" fontWeight="bold">
                        Find your Next  <br />
                        <Typography component="span" color="blue" fontWeight="bold">
                         professional challenge!
                        </Typography>
                    </Typography>

                    {/* Upload Button */}
                    <Box mt={3}>
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
                  sx={{
                    backgroundColor: '#26348E',
                    color: 'white',
                    borderRadius: 20,
                    padding: '10px 20px',
                    fontSize: '16px',
                    '&:hover': { backgroundColor: '#1e2b6f' },
                  }}
                >
                  Upload Your CV
                </Button>
               </label>
                 </form>
                </Box>

                    {/* File Info */}
                    <Typography variant="body2" mt={2} color="white">
                        Recommended files: PDF, DOC or DOCX Max. 3MB
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default UploadPdf;
