import React from 'react';
import Slider from '../Slider/Slider';
import './SliderContainer.css';

const SliderContainer = () => {
    return (
        <div className="slider-container mb-5">
            <h1 style={{fontWeight: '700'}} className="m-5 text-center"><span className="text-white">Here are some of</span> <span style={{color: '#7AB259'}}>our works</span></h1>
            <Slider/>
        </div>
    );
};

export default SliderContainer;