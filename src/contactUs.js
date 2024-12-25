import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useCreateContactMutation } from './state/api/apiSlice';

function Contact() {
    // RTK Query mutation for creating a contact
    const [createContact, { isLoading, isSuccess, isError, error }] = useCreateContactMutation();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        content: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Trigger the RTK Query mutation
            await createContact(formData).unwrap();
            alert('Contact submitted successfully!');
            setFormData({ fullName: '', email: '', content: '' }); // Clear form after success
        } catch (err) {
            console.error('Failed to submit contact:', err);
            console.error('Error details:', err.data); // Log error details
            alert('Failed to submit contact.');
        }
    };

    return (
        <Container className="Contact mt-5 pt-5 mb-3 pb-3">
            <Row>
                <h1 className="mt-2 pt-3 text-start">Contact Us</h1>
            </Row>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formFullName" className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your full name"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                disabled={isLoading} // Disable input while loading
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={isLoading}
                            />
                        </Form.Group>
                        <Form.Group controlId="formContent" className="mb-3">
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter your message"
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                disabled={isLoading}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={isLoading}>
                            {isLoading ? 'Submitting...' : 'Submit'}
                        </Button>
                        {isSuccess && <p className="text-success mt-3">Contact submitted successfully!</p>}
                        {isError &&  console.log(error)&& 
                        <p className="text-danger mt-3">Error: {error?.data?.message || 'Something went wrong!'}</p>}
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
