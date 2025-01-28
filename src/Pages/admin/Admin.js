import React, { useEffect,useState } from 'react';
import { useGetContactsQuery, useDeleteContactMutation } from '../../state/api/apiSlice';
import Navbar_khedmouni from '../../navbar';
import { useNavigate ,useParams} from 'react-router-dom';
import { getContactReportUrl } from '../../state/api/apiSlice';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
  


function Admin_component() {
    
    const navigate = useNavigate();
    const { id } = useParams();
    const { data: contacts, error, isLoading } = useGetContactsQuery();
    const [deleteContact] = useDeleteContactMutation();
    const [searchName, setSearchName] = useState('');
    const [searchEmail, setSearchEmail] = useState('');
    const [userContacts, setUserContacts] = useState([]);
    const [companyData, setCompanyData] = useState({
        companyName: '',
        email: '',
        address: '',
        phoneNumber: '',
        webPage: '',
        logo: null,
    });
    const [loading, setLoading] = useState(false);
    const [logoUploadSuccess, setLogoUploadSuccess] = useState(false);

//fetch data 
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
            alert('Contact deleted successfully!');
        } catch (err) {
            console.error('Failed to delete contact:', err);
            alert('Failed to delete contact.');
        }
    };

    //for company data
    const handleCompanyDataChange = (e) => {
        const { name, value } = e.target;
        setCompanyData({
            ...companyData,
            [name]: value,
        });
    };

    const handleLogoChange =async(e) => {
        const file = e.target.files[0];
        if (!file) return;
        setLoading(true);
        const data = new FormData ();
        // file is a fixed keyword for cloudinary
        data.append('file', file);
        //khedemni is the name in cloudinary 
        data.append('upload_preset', 'khedemni');
        data.append('cloud_name', ' dsfoania5');

     const res = await fetch("https://api.cloudinary.com/v1_1/dsfoania5/image/upload", {
        method: "POST",
        body: data
    });

    const uploadedImageURL = await res.json();
    console.log(uploadedImageURL.url);
    setLoading(false);
    //logo uploaded secsesfully
    setLogoUploadSuccess(true);
};



    /**
 * Get  Report for a specific contact
 * @param {String} token
 * @param {String} id
 */

    const getContactReport = (contact) => {
        const url = getContactReportUrl(contact._id);
        console.log("contact", contact)
        return window.open(url);
      };

    const filteredContacts = contacts?.filter(contact => 
        (searchName === '' || contact.fullName.toLowerCase().includes(searchName.toLowerCase())) &&
        (searchEmail === '' || contact.email.toLowerCase().includes(searchEmail.toLowerCase()))
    );

    //for thze company 
    const handleCompanySubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Company Data:', companyData);
    };


    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className='Admin_component'>
            <Navbar_khedmouni />
            <h1>Listing Contact Content</h1>
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
            <h1>Users that are signed in and have written an email in Contact Us</h1>
            <ul>
                {userContacts.map(user => (
                    <li key={user._id}>
                        {user.fullName} - {user.email}
                        <ul>
                            {user.contacts.map(contact => (
                                <li key={contact.contactId}>
                                    {contact.content}
                                </li>
                            ))}
                     </ul>
                    </li>
                ))}
           </ul>
           <h1> Add Your Cmpany details : </h1>
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
                    />
                    <TextField
                        label="Address"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        name="address"
                        value={companyData.address}
                        onChange={handleCompanyDataChange}
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
                    />
                    <TextField
                        label="Web Page"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        name="webPage"
                        value={companyData.webPage}
                        onChange={handleCompanyDataChange}
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
        </div>
    );


    

        
    
}

export default Admin_component;