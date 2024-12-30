import React, { useState } from 'react';
import { useGetContactsQuery } from '../../state/api/apiSlice';
import Navbar_khedmouni from '../../navbar';
import apiSlice from '../../state/api/apiSlice';
import { getContactUrl } from '';


function Admin_component() {
    const navigate = useNavigate();
    const { data: contacts, error, isLoading } = useGetContactsQuery();
    const [searchName, setSearchName] = useState('');
    const [searchEmail, setSearchEmail] = useState('');

    const handleNameChange = (e) => {
        setSearchName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setSearchEmail(e.target.value);
    };

    const getContactReport = () => {
        const url = getContactUrl(exerciceId, token);
        return window.open(url);
      };

    const filteredContacts = contacts?.filter(contact => 
        (searchName === '' || contact.fullName.toLowerCase().includes(searchName.toLowerCase())) &&
        (searchEmail === '' || contact.email.toLowerCase().includes(searchEmail.toLowerCase()))
    );

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
                
                    <li key={contact.id}>
                        {contact.fullName} - {contact.email} - {contact.content}
                        <button onClick={() => handleDownloadPdf(contact.id)}> Download PDF </button>
                    </li>
            
            </ul>
        </div>
    );
}

export default Admin_component;