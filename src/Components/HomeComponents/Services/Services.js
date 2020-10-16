import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleService from '../SingleService/SingleService';

const Services = () => {

    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        fetch('https://creative-agency18.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServiceData(data));
    }, [])

    return (
        <div className="custom-container mt-5 pt-5">
            <h1 style={{fontWeight: '700'}} className="m-5 text-center"><span style={{color: '#171B4E'}}>Provide awesome</span> <span style={{color: '#7AB259'}}>services</span></h1>
            {serviceData.length > 0 ?
                <div className="row">
                    {
                        serviceData.map(service => <SingleService service={service} key={service._id} />)
                    }
                </div>
                : <div className="text-center">
                    <h1>Loading...</h1>
                    <img className="img-fuid" src="https://i.ibb.co/kBnQx2n/200.gif" alt=""/>
                </div>
            }
        </div>
    );
};

export default Services;