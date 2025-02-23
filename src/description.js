import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer'; // Import the hook
import work from './assets/Images/work.png';
import Typewriter from './Typewriter';
import { Margin } from '@mui/icons-material';

const fullName = localStorage.getItem('fullName');

function Description_khedmouni() {
  const TextStyle = { fontSize: '26px' };
  const ColorStyle = { color: 'black', fontWeight: 'bold'};
  const ColorStyle2 = { color: 'black', fontWeight: 'normal' };
  const fullNameStyle = { color: '#6DABFF' }; // Style for fullName
  const fullName = localStorage.getItem('fullName');

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

  return (
    <Container
      className="Description pb-5 mb-5  pt-4"
      ref={containerRef} // Attach the ref to the container
      style={transitionStyle} // Apply styles dynamically
    >
      <Row>
        <Col lg={6}>
          <p className="mt-5 pt-5 text-start" style={TextStyle}>
          <span style={ColorStyle}>
              {fullName ? <span style={fullNameStyle}>{` ${fullName}`}</span> : " "}  Welcome to Khedemni Platform | 
            </span>    
            <Typewriter
              text=" where you find the job that will help building your career"
              delay={100}
              style={ColorStyle2}
            />
          </p>
        </Col>
        <Col lg={6}>
          <img src={work} alt="My Work" className="img-fluid " />
        </Col>
      </Row>
    </Container>
  );
}

export default Description_khedmouni;
