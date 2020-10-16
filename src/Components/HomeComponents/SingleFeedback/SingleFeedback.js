import React from 'react';
import './SingleFeedback.css';

const SingleFeedback = ({ feedback }) => {
    return (
        <div className="col-md-4 single-feedback mb-5">
            <div className="d-flex justify-content-start">
                <div>
                    <img className="img-fluid" src={feedback.img} alt="" />
                </div>
                <div className="ml-4 mt-1">
                    <h3>{feedback.name}</h3>
                    <h5>{feedback.designation}</h5>
                </div>
            </div>
            <p className="mt-4">{feedback.description}</p>
        </div>
    );
};

export default SingleFeedback;