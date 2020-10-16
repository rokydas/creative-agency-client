import React, { useEffect, useState } from 'react';
import SingleFeedback from '../SingleFeedback/SingleFeedback';

const Feedback = () => {

    const [feedbackData, setFeedbackData] = useState([]);

    useEffect(() => {
        fetch('https://creative-agency18.herokuapp.com/feedback')
            .then(res => res.json())
            .then(data => setFeedbackData(data));
    }, [])

    return (
        <div className="custom-container mt-5">
            <h1 style={{ fontWeight: '700' }} className="m-5 text-center"><span style={{ color: '#171B4E' }}>Clients</span> <span style={{ color: '#7AB259' }}>Feedback</span></h1>
            {
                feedbackData.length > 0 ?
                    <div className="row">
                        {
                            feedbackData.map(feedback => <SingleFeedback feedback={feedback} key={feedback._id} />)
                        }
                    </div>
                    :
                    <div className="text-center">
                        <h1>Loading...</h1>
                        <img className="img-fuid" src="https://i.ibb.co/kBnQx2n/200.gif" alt="" />
                    </div>
            }
        </div>
    );
};

export default Feedback;