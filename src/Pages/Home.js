import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar_khedmouni from '../navbar';
import Description_khedmouni from '../description';
import OurPartners from '../ourPartners';
import Whoweare from '../whoWeAre';
import Opertunities from '../Opertunities';
import Footer from '../footer';





function Home() {
  

  const TextStyle = { marginLeft: '50%', fontSize: '32px' };

  return (
    <div className='Home'>
      <Navbar_khedmouni />
      <Description_khedmouni />
      <Whoweare />
      <Opertunities />
      <OurPartners/>
      <Footer />
      



      </div>

       
     

    
  );
}

export default Home;
