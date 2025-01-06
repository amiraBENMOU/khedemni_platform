import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useCreateContactMutation } from './state/api/apiSlice';

function Contact() {
    const [createContact, { isLoading }] = useCreateContactMutation();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        content: ''
    });
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState({});
    const [serverError, setServerError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        const newErrors = {};
        const newValid = {};
        if (!formData.fullName) {
            newErrors.fullName = 'Full Name is required';
        } else if (formData.fullName.length <= 4) {
            newErrors.fullName = 'Full Name must be greater than 4 characters';
        } else {
            newValid.fullName = 'Full Name looks good!';
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!formData.email.includes('@')) {
            newErrors.email = 'You missed a @ in your email';
        } else if (!formData.email.includes('.')) {
            newErrors.email = 'You missed a point in your email';
        } else if (!formData.email.endsWith('hotmail.fr') && !formData.email.endsWith('gmail.com')) {
            newErrors.email = "Your email server doesn't exist";
        } else {
            newValid.email = 'Email looks good!';
        }
        if (!formData.content) {
            newErrors.content = 'Content is required';
        } else if (formData.content.length <= 4) {
            newErrors.content = 'Content must be greater than 4 characters';
        } else {
            newValid.content = 'Content looks good!';
        }
        setValid(newValid);
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        try {
            await createContact(formData).unwrap();
            alert('Contact submitted successfully!');
            setFormData({ fullName: '', email: '', content: '' });
            setErrors({});
            setValid({});
            setServerError('');
        } catch (err) {
            console.error('Failed to submit contact:', err);
            setServerError(err.data?.message || 'Failed to submit contact.');
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
                                isInvalid={!!errors.fullName}
                                isValid={!!valid.fullName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.fullName}
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">
                                {valid.fullName}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                                isValid={!!valid.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">
                                {valid.email}
                            </Form.Control.Feedback>
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
                                isInvalid={!!errors.content}
                                isValid={!!valid.content}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.content}
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">
                                {valid.content}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={isLoading}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;