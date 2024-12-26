import React, { useState } from 'react';
import { useGetContactsQuery } from '../../state/api/apiSlice';
import Navbar_khedmouni from '../../navbar';

function Admin_component() {
    const { data: contacts, error, isLoading } = useGetContactsQuery();
    const [searchName, setSearchName] = useState('');
    const [searchEmail, setSearchEmail] = useState('');

    const handleNameChange = (e) => {
        setSearchName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setSearchEmail(e.target.value);
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
                {filteredContacts?.map(contact => (
                    <li key={contact.id}>
                        {contact.fullName} - {contact.email} - {contact.content}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Admin_component;