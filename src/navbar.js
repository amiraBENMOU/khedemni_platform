import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md';
import '../src/Pages/App.css';

function Navbar_khedmouni() {
  const navItemStyle = { fontSize: '20px' };
  const [darkMode, setDarkMode] = useState(false);

  const location = useLocation(); // Get the current path

  const toggleLightDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

//sign up sign out function 
const [signupText, setSignupText] = useState('Sign Up');

const toggleSignup = () => {
  setSignupText((prevText) => (prevText === 'Sign Up' ? 'Sign Out' : 'Sign Up'));
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
              <Nav.Link onClick={toggleLightDarkMode} style={navItemStyle}>
                {darkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
              </Nav.Link>
              <Nav.Link
                href="#signup"
                onClick={toggleSignup} // Toggle text on click
                style={{
                  ...navItemStyle
                }}
              >
             {signupText}

              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar_khedmouni;
