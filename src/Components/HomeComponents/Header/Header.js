import React from 'react';
import HeaderMainPart from '../HeaderMainPart/HeaderMainPart';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Navbar/>
            <HeaderMainPart/>
        </div>
    );
};

export default Header;