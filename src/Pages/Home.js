import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar_khedmouni from '../navbar';
import Description_khedmouni from '../description';
import OurPartners from '../ourPartners';
import Whoweare from '../whoWeAre';
import Opertunities from '../ourOpertunities';
import Footer from '../footer';
import { Container} from 'react-bootstrap';




function Home() {
  

  const TextStyle = { marginLeft: '50%', fontSize: '32px' };

  return (
    <div className='Home'>
      <Navbar_khedmouni />
      <Description_khedmouni />
      <Whoweare />
      <Opertunities />
      <Container className='OurPartners mt-5 pt-5 mb-3 pb-3'>
        <h1 className="mt-2 pt-3 text-start" style={TextStyle}>Our Partners</h1>
      </Container>
      <OurPartners />
      <Footer />



      </div>

       
     

    
  );
}

export default Home;
