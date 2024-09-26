import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import '../src/Pages/App.css' ;


function Navbar_khedmouni() {
  const navItemStyle = { fontSize: '20px' };  // Adjust the font size as needed

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }; 

   
    return (
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <div className="Navbar shadow-sm bg-white rounded sticky-top ">
          <Navbar expand="lg" className="bg">
      <Container>
        <Navbar.Brand href=''>Khedemni</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
         

            <Nav.Link  href="#link" style={navItemStyle}>Home</Nav.Link>
            <Nav.Link href="#link"style={navItemStyle}>Our 0pportunities</Nav.Link>
            <Nav.Link href="#link"style={navItemStyle}>Contact Us</Nav.Link>
            <Nav.Link href="#link"style={navItemStyle}>Sign Up</Nav.Link>
            <Nav.Link href="#link"style={navItemStyle}>Dark mode</Nav.Link>
          
          
           
            
         </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </div>
    );
  }
  export default Navbar_khedmouni;