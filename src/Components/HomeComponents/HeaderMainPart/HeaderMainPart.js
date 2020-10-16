import React from 'react';
import './HeaderMainPart.css';

const HeaderMainPart = () => {
    return (
        <div className="custom-container">
            <div className="row">
                <div className="col-md-5 header-text d-flex align-items-center">
                    <div>
                        <h1>Let’s Grow Your <br /> Brand To The <br /> Next Level</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ipsa provident animi impedit reiciendis quaerat eos fugit ratione exercitationem veniam.</p>
                        <button className="custom-btn">Hire Us</button>
                    </div>
                </div>
                <div className="col-md-7 header-img">
                    <img className="img-fluid" src="https://i.ibb.co/gmcWbwW/Frame.png" alt="" />
                </div>
            </div>

        </div>
    );
};

export default HeaderMainPart;