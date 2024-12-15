import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import remote from './assets/Images/remote.png';
import { useInView } from 'react-intersection-observer'; // Import the hook
import { useNavigate } from 'react-router-dom';

function Opertunities() {

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


  const [hoveredElement, setHoveredElement] = useState(null); // Track the hovered element

  const getHoverStyle = (elementName) => ({
    fontSize: '20px',
    fontWeight: 'bold',
    color: hoveredElement === elementName ? '#5FA0FF' : '#000000', // Unique hover behavior
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  });


  const navigate = useNavigate();

  const handleRemoteJobClick = () => {
    navigate('/remote');
  };

  return (
    <Container className="Opertunities mt-5 pt-5 mb-3 pb-3"
         ref={containerRef}  
         style={transitionStyle} 
         >
      <Row>
        <h1 className="mt-2 pt-3 text-start">Our Opportunities</h1>

        <Col lg={4}>
          <img
            src={remote}
            alt="Remote Jobs"
            className="img-fluid shadow rounded bg-body mt-5 pt-3"
            onClick={handleRemoteJobClick}
          />
          <p
            style={getHoverStyle('remote')}
            className="mt-3 pt-3 text-center"
            onMouseEnter={() => setHoveredElement('remote')}
            onMouseLeave={() => setHoveredElement(null)}
            onClick={handleRemoteJobClick}
          >
            Remote Jobs
          </p>
        </Col>

        <Col lg={4}>
          <img
            src={remote}
            alt="Part-Time Jobs"
            className="img-fluid  shadow rounded bg-body mt-5 pt-3"
          />
          <p
            style={getHoverStyle('partTime')}
            className="mt-3 pt-3 text-center"
            onMouseEnter={() => setHoveredElement('partTime')}
            onMouseLeave={() => setHoveredElement(null)}
          >
            Part-Time Jobs
          </p>
        </Col>

        <Col lg={4}>
          <img
            src={remote}
            alt="Internships"
            className="img-fluid shadow rounded bg-body mt-5 pt-3"
          />
          <p
            style={getHoverStyle('internships')}
            className="mt-3 pt-3 text-center"
            onMouseEnter={() => setHoveredElement('internships')}
            onMouseLeave={() => setHoveredElement(null)}
          >
            Internships
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Opertunities;
