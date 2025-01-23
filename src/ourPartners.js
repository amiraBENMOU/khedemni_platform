import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import oredoo from './assets/Images/ooredoo.png';
import yassir from './assets/Images/yassir.png';
import djezzy from './assets/Images/Djezzy.png';
import {Card,CardMedia,Button,Typography,CardActions} from '@mui/material';
import CardContent from '@mui/material/CardContent';


import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer'; // Import the hook

function OurPartners() {
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

  const navigate = useNavigate();


  return (
    <Container className="OurPartners mt-5 pt-5 pb-5 mb-5"
    ref={containerRef}  
    style={transitionStyle} 
    >
      <Row>
        <h1 className="mt-2 pt-3 text-start mb-3 pb-5" style={TextStyleH}>Our Partners</h1>
        <Col lg={4}>
            <Card sx={{ maxWidth:'100%', elevation:24 ,backgroundColor: '#F8FAFC'}}>
               <CardMedia
                  component="img"
                 alt="green iguana"
                 sx={{ width: 150, height: 150, objectFit: 'contain', margin: 'auto' }}
                 image={yassir}
                 />
               <CardContent>
                 <Typography variant="body2" sx={{ color: 'text.secondary' }} >
                     Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
               </CardContent>
               <CardActions>
                  <Button size="small"href='https://yassir.com/fr'>Learn More</Button>
             </CardActions>
           </Card>
        </Col>
          
        

        <Col lg={4}>
            <Card sx={{ maxWidth:'100%', elevation: 24 ,backgroundColor: '#F8FAFC' }}>
               <CardMedia
                  component="img"
                 alt="green iguana"
                 sx={{ width: 150, height: 150, objectFit: 'contain', margin: 'auto' }}
                 image={djezzy}
                 />
               <CardContent>
                 <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                     Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
               </CardContent>
               <CardActions> 
                  <Button size="small"href='https://www.djezzy.dz/'>Learn More</Button>
             </CardActions>
           </Card>
        </Col>
        
        <Col lg={4}>
            <Card sx={{ maxWidth:'100%', elevation: 24 ,backgroundColor: '#F8FAFC' }}>
               <CardMedia
                  component="img"
                 alt="green iguana"
                 sx={{ width: 150, height: 150, objectFit: 'contain', margin: 'auto' }}
                 image={oredoo}
                 />
               <CardContent>
                 <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                     Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
               </CardContent>
               <CardActions>
                  <Button size="small" href='https://www.ooredoo.dz/fr/particuliers?gad_source=1&gclid=Cj0KCQiA7se8BhCAARIsAKnF3rw7z4FCb2FEOAgdK5-ne76l-SSmrXTOFmFFRxPGIleePlUCI-bL6nQaAmFYEALw_wcB'>Learn More</Button>
             </CardActions>
           </Card>
        </Col>
       
      
      


      </Row>
    </Container>
    
  );
}

export default OurPartners;
