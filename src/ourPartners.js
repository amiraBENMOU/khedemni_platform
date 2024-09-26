import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import html_pic from '../src/Images/html.png';
import github_pic from '../src/Images/github.png';
import css_pic from '../src/Images/css.png';
import react_pic from '../src/Images/react.png';
import node_pic from '../src/Images/js.png';
import { useInView } from 'react-intersection-observer';

function OurPartners() {
  

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

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
     
      <Carousel activeIndex={index} onSelect={handleSelect} className='mt-5 pt-3 mb-3 pb-3'>          
       <Carousel.Item>
        <Container>
          <Row ref={aboutRef} style={transitionStyle}>
            
            <Col>
              <img src={html_pic} alt="First slide" class="w-50" />
            </Col>
            <Col>
              <img src={github_pic} alt="Second slide" class="w-50"  />
            </Col>
            <Col>
              <img src={css_pic} alt="Third slide" class="w-50"  />
            </Col>
          </Row>
        </Container>
        
      </Carousel.Item>

      <Carousel.Item>
        <Container>
          <Row>
            <Col>
              <img src={react_pic} alt="Fourth slide" class="w-50"  />
            </Col>
            <Col>
              <img src={node_pic} alt="Fifth slide" class="w-50"  />
            </Col>
            <Col>
              <img src={html_pic} alt="Sixth slide" class="w-50"  />
            </Col>
          </Row>
        </Container>
        
      </Carousel.Item>

      <Carousel.Item>
        <Container>
          <Row ref={aboutRef} style={transitionStyle}>
            <Col>
              <img src={github_pic} alt="Seventh slide" class="w-50"  />
            </Col>
            <Col>
              <img src={css_pic} alt="Eighth slide" class="w-50"  />
            </Col>
            <Col>
              <img src={react_pic} alt="Ninth slide" class="w-50" />
            </Col>
          </Row>
        </Container>
       
      </Carousel.Item>
    </Carousel>
  
  );
}

export default OurPartners;
