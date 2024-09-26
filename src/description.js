import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import  work from './work.png'; 
import Typewriter from "./Typewriter";



function Description_khedmouni() {
    const TextStyle = { fontSize: '26px' };
    const ColorStyle = { color:'black',fontWeight: 'bold' };
    const ColorStyle2 = { color:'black',fontWeight: 'normal' };
    
   
        return (
          <Container className="Description pb-5 mb-5 mt-5 pt-5 ">
            <Row>
              <Col lg={6}>
               
                <p className="mt-5 pt-5 text-start"style={TextStyle}> <span style={ColorStyle}>Welcome to Khedemni Platform | </span><Typewriter text="where you find the job  that will help building your career" delay={100} style={ColorStyle2} />  </p>
                
              </Col>
              <Col lg={6}>
                <img src={work} alt="My Work" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        );
      }
      

  
  export default Description_khedmouni;