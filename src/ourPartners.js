import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo1 from './assets/Images/logo1.png';
import logo3 from './assets/Images/logo3.png';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer'; // Import the hook

function OurPartners() {
   // Intersection Observer hook
    const { ref: containerRef, inView } = useInView({
      triggerOnce: true, // Trigger animation only once
      threshold: 0.1, // Trigger when 10% of the component is in view
    });
  
    
  // Apply transition styles
  const transitionStyle = {
    opacity: inView ? 1 : 0, // Show or hide based on visibility
    transform: inView ? 'translateY(0)' : 'translateY(50px)', // Smooth slide-in
    transition: 'opacity 1s ease-out, transform 1s ease-out',
  };

  const navigate = useNavigate();


  return (
    <Container className="Opertunities mt-5 pt-5 mb-3 pb-3 text-center"
    ref={containerRef}  
    style={transitionStyle} 
    >
      <Row>
        <h1 className="mt-2 pt-3 text-start">Our Partners</h1>

        <Col lg={4}>
          <img
            src={logo1}
            alt=""
            className="img-fluid shadow rounded bg-body mt-5 pt-3 w-50"
          />
          
        </Col>

        <Col lg={4}>
          <img
            src={logo3}
            alt=""
            className="img-fluid shadow rounded bg-body mt-5 pt-3 w-50"
          />
          
        </Col>

        
        <Col lg={4}>
          <img
            src={logo3}
            alt=""
            className="img-fluid shadow rounded bg-body mt-5 pt-3 w-50"
          />
          
        </Col>

      </Row>
    </Container>
  );
}

export default OurPartners;
