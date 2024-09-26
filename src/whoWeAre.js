import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import team_work from '../src/Images/team.jpg';


function Whoweare() {
  const ImageStyle = { width: '70%' };
  const TextStyle = { fontSize: '20px' };
  const TextStyleH = { fontSize: '32px' };

  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const transitionStyle = {
    transition: 'opacity 1s ease-out, transform 1s ease-out',
    opacity: aboutInView ? 1 : 0,
    transform: aboutInView ? 'translateY(0)' : 'translateY(50px)',
  };

  return (
    <Container className="Description mt-5 pt-5 pb-5 mb-5">
      <Row ref={aboutRef} style={transitionStyle}>
        <Col lg={6}>
          <h1 className="mt-2 pt-2 text-start" style={TextStyleH}>About Us</h1>
          <p className="text-start pt-4" style={TextStyle}>
            At <strong>Khedemni</strong>, we believe in breaking down traditional employment barriers and creating a flexible, inclusive job market that caters to both remote workers and students. Our mission is to connect talented individuals with meaningful employment opportunities that fit their lifestyles, allowing them to achieve a healthy work-life balance while gaining valuable experience and financial independence.
          </p>
        </Col>
        <Col lg={6}>
          <img src={team_work} alt="My Work" className="shadow-lg img-fluid rounded bg-body " style={ImageStyle} />
        </Col>
      </Row>
    </Container>
  );
}

export default Whoweare;
