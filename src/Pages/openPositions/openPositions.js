import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Typewriter from '../../../src/Typewriter.js';
import Navbar_khedmouni from '../../navbar.js';
import workWithUs from '../../assets/Images/job offer.png';

const fullName = localStorage.getItem('fullName');

function Open_positions() {
     const ColorStyle2 = { color: 'black', fontWeight: 'normal' };
     const TextStyle = { fontSize: '26px' };
     const ColorStyle = { color: 'black', fontWeight: 'bold'};
  return (
     <Container className="Description  pt-2 pb-5 mb-5 " >

         <div className='OpenPositions pb-5 mb-5 '>
            <Navbar_khedmouni />
            <Row className='workWithUs'>
                <Col lg={6} >
                <div className=" pt-5">
                   <p className="mt-5 pt-5 text-start" style={TextStyle}>
                        <span style={ColorStyle}>Join Our Dynamic Team  </span>
                        <Typewriter
                              text="where you can helps us grow our buisness "
                              delay={100}
                           style={ColorStyle2}
                         />
                    </p>
             </div>
              <div className="buttons">
                  <button className="btn btn-primary" href='/remote' >Job Offers </button>
                  <button className="btn btn-primary" href='/partTime' > Spontanuis Application  </button>
             </div>

               </Col>
               <Col lg={6}>
                    <img src={workWithUs} alt="Work With Us" className="img-fluid" />
              </Col>
         </Row>
    </div>
    </Container>
  );
}

export default Open_positions;