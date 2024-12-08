import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Opertunities from './Opertunities';
import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import '../src/Pages/App.css';


function Navbar_khedmouni() {
  const navItemStyle = { fontSize: '20px' };
  const [darkMode, setDarkMode] = useState(false);
  const [colorMode,setColorMode] =useState('white');

  const location = useLocation(); // Get the current path

  const toggleLightDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
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
                href="#home"
                style={{
                  ...navItemStyle,
                  color: location.hash === "#home" ? "#5FA0FF" : "black" ,
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#opportunities" // In-page navigation
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
                style={{
                  ...navItemStyle,
                  color: location.hash === "#signup" ? "#5FA0FF" : "black",
                }}
              >
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar_khedmouni;
