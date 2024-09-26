import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import  remote from '../src/Images/remote.png'; 
import { useInView } from 'react-intersection-observer';


function Opertunities() {
    const ImageStyle = { width:'60%' };
    const TextStyle = { fontSize: '20px', color:'#383838',fontWeight: 'bold'};
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
          <Container className="Opertunities  mt-5 pt-5 mb-3 pb-3 ">
            <Row ref={aboutRef} style={transitionStyle}>
            <h1 className="mt-2 pt-3 text-start" style={TextStyleH}>Our Opportunities </h1>
              <Col lg={6}>
                
                 <img  src={remote} alt="My Work"  className="img-fluid shadow-lg rounded  bg-body mt-5 pt-3" style={ImageStyle} />
                 <p style={TextStyle} className='mt-3 pt-3'> Remote Jobs</p>
              </Col>
               
              <Col lg={6}>
              <img  src={remote} alt="My Work" className="img-fluid shadow-lg rounded  bg-body mt-5 pt-3" style={ImageStyle} />
              <p style={TextStyle} className='mt-3 pt-3'> Part Time  Jobs</p>
              </Col>
              

            </Row>
          </Container>
        );
      }
      

  
  export default Opertunities;