import React, { useState ,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';





function Opertunities_Navbar() {
  

    const TextStyle = { fontSize: '42px' };
    //navigate 
      const navigate = useNavigate();
    
    const handleRemoteJobClick = () => {
        navigate('/');
      };
    
    const [hoveredElement, setHoveredElement] = useState(null); // Track the hovered element

    const getHoverStyle = (elementName) => ({
        color: hoveredElement === elementName ? '#5FA0FF' : '#000000', // Unique hover behavior
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'color 0.3s ease',
        ... TextStyle,
      });
  return (
    <div className="Navbar shadow-sm bg-white rounded sticky-top">
      <Navbar expand="lg" className="bg">
        <Container>
          <Navbar.Brand href="/">
            <h1 className='text-center mt-3 pt-3' style={getHoverStyle('remote')}
            onMouseEnter={() => setHoveredElement('remote')}
            onMouseLeave={() => setHoveredElement(null)}
            onClick={handleRemoteJobClick}> 

            khademni </h1>
            </Navbar.Brand>
    
        </Container>
      </Navbar>
    </div>
  );
}

export default Opertunities_Navbar;
