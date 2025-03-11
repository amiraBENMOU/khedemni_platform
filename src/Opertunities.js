import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//import remote from './assets/Images/remote.png';
import remote from './assets/Images/remoteJob.jpg';
import partTime from './assets/Images/partTimeJob.jpg';
import internships from './assets/Images/intership.jpg';
import { useInView } from 'react-intersection-observer'; // Import the hook
import { useNavigate } from 'react-router-dom';


function Opertunities() {
  const TextStyle = { fontSize: '20px' };
  const TextStyleH = { fontSize: '36px' };

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
    fontWeight: 'bold',
    color: hoveredElement === elementName ? '#5FA0FF' : '#808080', // Unique hover behavior
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    ... TextStyle,
  });

  //hover image 
  const [hoveredImage, setHoveredImage] = useState(null); // Track the hovered element
  
  const getImageHoverStyle = (elementName) => ({
    background: hoveredImage === elementName ? 'rgba(251, 251, 251, 0.35)' : '', // Unique hover behavior
    transform: hoveredImage === elementName ? 'scale(1.05)' : 'scale(1)', // Slight zoom effec
    transition: 'transform 0.3s ease-in-out, background 0.3s ease', // Add transition for background
    cursor: 'pointer', // Pointer cursor on hover
  });
  
//navigate 
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
        <h1 className="mt-2 pt-3 text-start" style={TextStyleH}>Our Opportunities</h1>

        <Col lg={4}>
          <img
            src={remote}
            alt="Part-Time Jobs"
            className="img-fluid  shadow rounded bg-body mt-5 pt-3 "
            style={getImageHoverStyle('remote')} // Add dynamic hover styles
            onMouseEnter={() => setHoveredImage('remote')}
            onMouseLeave={() => setHoveredImage(null)}
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
           src={partTime}
           alt="Part-Time Jobs"
           className="img-fluid  shadow rounded bg-body mt-5 pt-3 "
           style={getImageHoverStyle('partTime')} // Add dynamic hover styles
           onMouseEnter={() => setHoveredImage('partTime')}
           onMouseLeave={() => setHoveredImage(null)}
           onClick={handleRemoteJobClick}

          />
        
          <p
             style={getHoverStyle('partTime')}
             className="mt-3 pt-3 text-center"
             onMouseEnter={() => setHoveredElement('partTime')}
             onMouseLeave={() => setHoveredElement(null)}
             onClick={handleRemoteJobClick}
          >
            Master Projects Opertunities
          </p>
        </Col>

        <Col lg={4} >
          <img
          src={internships}
          alt="Part-Time Jobs"
          className="img-fluid  shadow rounded bg-body mt-5 pt-3 "
          style={getImageHoverStyle('intership')} // Add dynamic hover styles
          onMouseEnter={() => setHoveredImage('intership')}
          onMouseLeave={() => setHoveredImage(null)}
          onClick={handleRemoteJobClick}

          />
          <p
             style={getHoverStyle('intership')}
             className="mt-3 pt-3 text-center"
             onMouseEnter={() => setHoveredElement('intership')}
             onMouseLeave={() => setHoveredElement(null)}
             onClick={handleRemoteJobClick}             
             >
            Internships
          </p>
          
        </Col>
      </Row>
    </Container>
  );
}

export default Opertunities;
