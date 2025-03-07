import React, { useEffect, useState } from 'react';
import { useGetContactsQuery, useDeleteContactMutation, useCreateCompanyMutation, useGetCompaniesQuery,useCreatePositionMutation,useGetPositionsQuery,useUploadFileMutation,useGetUploadFilesQuery} from '../../state/api/apiSlice';
import Navbar_khedmouni from '../../navbar';
import { useNavigate } from 'react-router-dom';
import { getContactReportUrl } from '../../state/api/apiSlice';
import {Typography, Container, TextField, Button, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Admin_component() {
    
    //errors
    const [errors, setErrors] = useState({});
    //valid
    const [valid, setValid] = useState({});
    const navigate = useNavigate();
    const { data: contacts, error, isLoading } = useGetContactsQuery();
    const [deleteContact] = useDeleteContactMutation();
    const [searchName, setSearchName] = useState('');
    const [searchEmail, setSearchEmail] = useState('');
    const [userContacts, setUserContacts] = useState([]);
    //company 
    const [createCompany] = useCreateCompanyMutation();
    //position 
    const [createPosition] = useCreatePositionMutation();
    //for the company data
    const [companyData, setCompanyData] = useState({
        companyName: '',
        email: '',
        adresse: '',
        phoneNumber: '',
        webPage: '',
        image: '',
    });

     // Correct initialization of positionData state
     const [positionData, setPositionData] = useState({
     positionTitle: '',
     positionType: '',
      Domain: '',
     DescriptionOfThePosition: '',
     typeOfContract: '',
     numberOfPepeol: '',
    });


    //for company data
    const handleCompanyDataChange = (e) => {
        const { name, value } = e.target;
        setCompanyData({
            ...companyData,
            [name]: value,
        });
    };
    //for position data
   // Handle form input change correctly
   const handlePositionDataChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value); // Debug the name and value here
    setPositionData({
        ...positionData,
        [name]: value, // Make sure to use positionData here
    });
};
    const [loading, setLoading] = useState(false);
    const [logoUploadSuccess, setLogoUploadSuccess] = useState(false);

   //get file  uploaded
   const { data: files, error: uploadFilesError, isLoading: isUploadFilesLoading } = useGetUploadFilesQuery();   
    //fetch data for the user contacts
    useEffect(() => {
        const fetchUserContacts = async () => {
            try {
                const response = await fetch('http://localhost:5000/contact/fetchUserContact');
                const data = await response.json();
                setUserContacts(data);
            } catch (error) {
                console.error('Failed to fetch user contacts:', error);
            }
        };

        fetchUserContacts();
    }, []);

    const handleNameChange = (e) => {
        setSearchName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setSearchEmail(e.target.value);
    };

    const handleDeleteClick = async (contactId) => {
        try {
            await deleteContact(contactId).unwrap();
            toast.success('Contact deleted successfully!');
        } catch (err) {
            console.error('Failed to delete contact:', err);
            toast.error('Failed to delete contact.');
        }
    };

    const handleLogoChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setLoading(true);
        const data = new FormData();
        // file is a fixed keyword for cloudinary
        data.append('file', file);
        //khedemni is the name in cloudinary 
        data.append('upload_preset', 'khedemni');
        data.append('cloud_name', 'dsfoania5');

        const res = await fetch("https://api.cloudinary.com/v1_1/dsfoania5/image/upload", {
            method: "POST",
            body: data
        });

        const uploadedImageURL = await res.json();
        console.log(uploadedImageURL.url);
        setLoading(false);
        //logo uploaded successfully
        setLogoUploadSuccess(true);
        setCompanyData({
            ...companyData,
            image: uploadedImageURL.url,
        });
    };

    const getContactReport = (contact) => {
        const url = getContactReportUrl(contact._id);
        console.log("contact", contact)
        return window.open(url);
    };

    const filteredContacts = contacts?.filter(contact =>
        (searchName === '' || contact.fullName.toLowerCase().includes(searchName.toLowerCase())) &&
        (searchEmail === '' || contact.email.toLowerCase().includes(searchEmail.toLowerCase()))
    );

    //for the company 
    const handleCompanySubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Company Data:', companyData);

        try {
            const response = await createCompany(companyData).unwrap();
            console.log('Company created:', response);
            toast.success('Company created successfully!');
        } catch (error) {
            console.error('Failed to create company:', error);
            toast.error('Failed to create company.');
        }
    };


    //for the Position
    const handlePositionSubmit = async (e) => {
        e.preventDefault();
        console.log('Position Data:', positionData);
    
        try {
            const response = await createPosition(positionData);
            console.log('Position Response:', response);
            toast.success('Position created successfully!');
        } catch (error) {
            console.error('Failed to create a new position:', error);
            toast.error('Failed to create a new position.');
        }
    };
    

    return (
        <div className='Admin_component'>
            <Navbar_khedmouni />
            <ToastContainer />

            <h1 className='mt-5 pt-3'>Listing Contact Content</h1>
            <div>
                <label>
                    Search by Name:
                    <input
                        type="text"
                        placeholder="Search by Name"
                        value={searchName}
                        onChange={handleNameChange}
                    />
                </label>
                <label>
                    Search by Email:
                    <input
                        type="text"
                        placeholder="Search by Email"
                        value={searchEmail}
                        onChange={handleEmailChange}
                    />
                </label>
            </div>
            <ul>
                {filteredContacts?.map(contact => (
                    <li key={contact.id}>
                        {contact.fullName} - {contact.email} - {contact.content}
                        <button onClick={() => getContactReport(contact)}>Download PDF</button>
                        <button onClick={() => handleDeleteClick(contact._id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <h1> Add a Company Details : </h1>
            <Container maxWidth="sm">
                <Box
                    component="form"
                    onSubmit={handleCompanySubmit}
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
                    <TextField
                        label="Company Name"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        name="companyName"
                        value={companyData.companyName}
                        onChange={handleCompanyDataChange}
                        error={!!errors.companyName}
                        helperText={errors.companyName}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        name="email"
                        value={companyData.email}
                        onChange={handleCompanyDataChange}
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                    <TextField
                        label="Address"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        name="adresse"
                        value={companyData.adresse}
                        onChange={handleCompanyDataChange}
                        error={!!errors.adresse}
                        helperText={errors.adresse}
                        multiline
                    />
                    <TextField
                        label="Phone Number"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        name="phoneNumber"
                        value={companyData.phoneNumber}
                        onChange={handleCompanyDataChange}
                        error={!!errors.phoneNumber}
                        helperText={errors.phoneNumber}
                    />
                    <TextField
                        label="Web Page"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="webPage"
                        value={companyData.webPage}
                        onChange={handleCompanyDataChange}
                        error={!!errors.webPage}
                        helperText={errors.webPage}
                    />
                    <Button
                        variant="contained"
                        component="label"
                        sx={{ mt: 2 }}
                        style={{ backgroundColor: 'green' }}
                        className='w-100'
                    >
                        Upload Logo
                        <input
                            type="file"
                            hidden
                            onChange={handleLogoChange}
                        />
                    </Button>
                    {loading && <span>Loading...</span>}
                    {logoUploadSuccess && <span>Your logo has been loaded successfully</span>}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                        className='w-100'
                    >
                        Submit
                    </Button>
                </Box>
            </Container>
            <div className='job-offer mt-5'>
                <h1>Add a job offer to join and work with us :  </h1>

                <Container maxWidth="sm">
                    <Box
                        component="form"
                        onSubmit={handlePositionSubmit}
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
                        <TextField
                            label="Job Title"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            required
                            name="positionTitle"
                            value={positionData.positionTitle}
                            onChange={handlePositionDataChange}
                            error={!!errors.positionTitle}
                            helperText={errors.positionTitle}
                        />
                        <FormControl fullWidth margin="normal" variant="outlined" required>
                            <InputLabel> Type Of The Job</InputLabel>
                            <Select
                                label="Type Of The Job"
                                name="positionType"
                                value={positionData.positionType}
                                onChange={handlePositionDataChange}
                                error={!!errors.positionType}
                            >
                                <MenuItem value="part time">Part Time</MenuItem>
                                <MenuItem value="full time">Full Time</MenuItem>
                                <MenuItem value="hybrid">Hybrid</MenuItem>
                                <MenuItem value="remote">Remote</MenuItem>
                            </Select>
                            {errors.positionType && <p style={{ color: 'red' }}>{errors.positionType}</p>}
                        </FormControl>
                          <FormControl fullWidth margin="normal" variant="outlined" required>
                            <InputLabel> Domain</InputLabel>
                            <Select
                                label="Domain"
                                name="Domain"
                                value={positionData.Domain}
                                onChange={handlePositionDataChange}
                                error={!!errors.Domain}
                            >
                                <MenuItem value="Vente,Televente,Assistante">Vente,Televente,Assistante</MenuItem>
                                <MenuItem value="Commercial,Techno Commercial,Service Client">Commercial,Techno Commercial,Service Client</MenuItem>
                                <MenuItem value="Responsable Commercial,Grands Comptes">Responsable Commercial,Grands Comptes</MenuItem>
                                <MenuItem value="Creation,Design,Graphisme">Creation,Design,Graphisme</MenuItem>
                                <MenuItem value="Marketing,Communication,Media">Marketing,Communication,Media</MenuItem>
                                <MenuItem value="Informatique,Telecom,Internet">Informatique,Telecom,Internet</MenuItem>
                                <MenuItem value="Comptabilite,Finance,Gestion">Comptabilite,Finance,Gestion</MenuItem>
                                <MenuItem value="Secretariat,Bureau,Administration">Secretariat,Bureau,Administration</MenuItem>
                                

                            </Select>
                            {errors.Domain && <p style={{ color: 'red' }}>{errors.Domain}</p>}
                        </FormControl>
                       
                          <FormControl fullWidth margin="normal" variant="outlined" required>
                            <InputLabel> Type of the Contract</InputLabel>
                            <Select
                                label="Type of the Contract"
                                name="typeOfContract"
                                value={positionData.typeOfContract}
                                onChange={handlePositionDataChange}
                                error={!!errors.typeOfContract}
                            >
                                <MenuItem value="CDI">CDI</MenuItem>
                                <MenuItem value="CDD">CDD</MenuItem>
                                <MenuItem value="freelnce">freelnce</MenuItem>
                            </Select>
                            {errors.typeOfContract && <p style={{ color: 'red' }}>{errors.typeOfContract}</p>}
                        </FormControl>
                        <TextField
                            label="Number of the Posts"
                            variant="outlined"
                            margin="normal"
                            type='number'
                            fullWidth
                            required
                            name="numberOfPepeol"
                            value={positionData.numberOfPepeol}
                            onChange={handlePositionDataChange}
                            error={!!errors.numberOfPepeol}
                            helperText={errors.numberOfPepeol}
                        />
                         <TextField
                            label="Description Of The Position"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            required
                            name="DescriptionOfThePosition"
                            value={positionData.DescriptionOfThePosition}
                            onChange={handlePositionDataChange}
                            error={!!errors.DescriptionOfThePosition}
                            helperText={errors.DescriptionOfThePosition}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{ mt: 2 }}
                            className='w-100'
                        >
                            Submit
                        </Button>
                    </Box>
                </Container>
                <h1> Display CV's: </h1>
                <Container maxWidth="sm" sx={{ mt: 4 }}>
                    <Typography variant="h6">Uploaded Files:</Typography>
                    {isUploadFilesLoading && <p>Loading...</p>}
                    {uploadFilesError && <p>Error loading files: {uploadFilesError.message}</p>}
                    <ul>
                        {files?.map((file, index) => (
                            <li key={index}>
                                <a href={file.url} target="_blank" rel="noopener noreferrer">{file.fileName}</a>
                            </li>
                        ))}
                    </ul>
                </Container>

                
            </div>
        </div>  
    );
}

export default Admin_component;