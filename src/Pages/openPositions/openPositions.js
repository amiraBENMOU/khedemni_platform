import React from 'react';
import Navbar_khedmouni from '../../navbar.js';


function Open_positions() {
    return (
        <div className='OpenPositions'>
            <Navbar_khedmouni />
            <div className='container text-center'>
                <h1>No open position for the moment </h1>

            </div>   
            
        </div>
    );
}

export default Open_positions;

