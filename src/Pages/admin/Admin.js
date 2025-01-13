import React, { useEffect,useState } from 'react';
import { useGetContactsQuery, useDeleteContactMutation } from '../../state/api/apiSlice';
import Navbar_khedmouni from '../../navbar';
import { useNavigate ,useParams} from 'react-router-dom';
import { getContactReportUrl } from '../../state/api/apiSlice';
  


function Admin_component() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data: contacts, error, isLoading } = useGetContactsQuery();
    const [deleteContact] = useDeleteContactMutation();
    const [searchName, setSearchName] = useState('');
    const [searchEmail, setSearchEmail] = useState('');
    const [userContacts, setUserContacts] = useState([]);

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

        </div>

        
    );
}

export default Admin_component;