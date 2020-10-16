import React from 'react';
import './CompanyList.css';

const CompanyList = () => {
    return (
        <div className="custom-container">
            <div className="d-flex justify-content-around mt-5 pt-5">
                <div>
                    <img className="company-img" src="https://i.ibb.co/b5PCMF3/slack.png" alt="" />
                </div>
                <div>
                    <img className="company-img" src="https://i.ibb.co/JH3TdSP/google.png" alt="" />
                </div>
                <div>
                    <img className="company-img" src="https://i.ibb.co/XC4fYZ2/uber.png" alt="" />
                </div>
                <div>
                    <img className="company-img" src="https://i.ibb.co/VMM1gpc/netflix.png" alt="" />
                </div>
                <div>
                    <img className="company-img" src="https://i.ibb.co/s9FRXzT/airbnb.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default CompanyList;