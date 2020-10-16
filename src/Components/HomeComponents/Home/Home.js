import React from 'react';
import CompanyList from '../CompanyList/CompanyList';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import SliderContainer from '../SliderContainer/SliderContainer';

const Home = () => {
    return (
        <div>
            <Header/>
            <CompanyList/>
            <Services/>
            <SliderContainer/>
            <Feedback/>
            <Footer/>
        </div>
    );
};

export default Home;