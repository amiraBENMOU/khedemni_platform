import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo1 from '../src/Images/logo1.jpg';
import logo2 from '../src/Images/logo2.jpg';
import logo3 from '../src/Images/logo3.jpg';
import { useNavigate } from 'react-router-dom';

function OurPartners() {
  

  const navigate = useNavigate();


  return (
    <Container className="Opertunities mt-5 pt-5 mb-3 pb-3">
      <Row>
        <h1 className="mt-2 pt-3 text-start">Our Partners</h1>

        <Col lg={4}>
          <img
            src={logo1}
            alt=""
            className="img-fluid shadow-lg rounded bg-body mt-5 pt-3"
          />
          
        </Col>

        <Col lg={4}>
          <img
            src={logo2}
            alt=""
            className="img-fluid shadow-lg rounded bg-body mt-5 pt-3"
          />
          
        </Col>

        <Col lg={4}>
          <img
            src={logo3}
            alt=""
            className="img-fluid shadow-lg rounded bg-body mt-5 pt-3"
          />
          
        </Col>
      </Row>
    </Container>
  );
}

export default OurPartners;
