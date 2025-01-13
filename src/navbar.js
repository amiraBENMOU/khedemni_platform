import React, { useState } from 'react';
import { redirect, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md';
import '../src/Pages/App.css';
import Button from 'react-bootstrap/Button';



function Navbar_khedmouni() {
  
//navigate 
const navigate = useNavigate();
//
const handleAdminClick = () => {
  navigate('/admin');
};

  const navItemStyle = { fontSize: '20px' };
  const [darkMode, setDarkMode] = useState(false);

  const location = useLocation(); // Get the current path
    

  const toggleLightDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

//sign up sign out function 
const [signinText, setSigninText] = useState('Sign in');

const handleSignInClick = () => {
  navigate('/signin');
};






  return (
    <div className="Navbar shadow-sm bg-white rounded sticky-top">
      <Navbar expand="lg" className="bg">
        <Container>
          <Navbar.Brand href="/">Khedemni</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="/"
                style={{
                  ...navItemStyle,
                  color: location.pathname === "/" ? "#5FA0FF" : "black", // Highlight when on Home page
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#opportunities"
                style={{
                  ...navItemStyle,
                  color: location.hash === "#opportunities" ? "#5FA0FF" : "black",
                }}
              >
                Open Positions
              </Nav.Link>
              <Nav.Link
                href="#contact"
                style={{
                  ...navItemStyle,
                  color: location.hash === "#contact" ? "#5FA0FF" : "black",
                }}
              >
                Contact Us
              </Nav.Link>
              <Nav.Link
              href="/admin"
                style={{
                  ...navItemStyle,
                  color: location.pathname === "/admin" ? "#5FA0FF" : "black",
                }}
                onClick={handleAdminClick}
              >
                Admin
              </Nav.Link>
              <Nav.Link onClick={toggleLightDarkMode} style={navItemStyle}>
                {darkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
              </Nav.Link>
              <Nav.Link
                onClick={handleSignInClick} // Toggle text on click
                style={{
                  ...navItemStyle
                }}
              >
           <Button variant="primary">{signinText}</Button> 

              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar_khedmouni;
