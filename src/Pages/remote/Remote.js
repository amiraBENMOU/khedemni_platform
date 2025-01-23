import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Opertunities_Navbar from '../../opertunities_navbar';
import SelectActionCard from '../remote/card';

function Remote() {

    return (
        <div>
            <Opertunities_Navbar/>
            <div className='Remote mt-5 pt-5'style={{ marginLeft: '40px' }}>
                <SelectActionCard/>
            </div>
        </div>
    );
}

export default Remote;

