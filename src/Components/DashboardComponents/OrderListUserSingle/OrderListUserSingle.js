import React from 'react';
import './OrderListUserSingle.css';

const OrderListUserSingle = ({ order }) => {

    const email = JSON.parse(localStorage.getItem("email"));

    return (
        <div>
            { email === order.email &&
                <div className="col-md-6 col-sm-12 col-lg-4">
                    <div className="card" style={{ width: '18rem' }}>
                        <div className="d-flex justify-content-around">
                            <img width='200px' className="img-fluid mt-3 service-img" src={`data:image/png;base64,${order.image.img}`} alt="Card image cap" />
                            <div>
                                <button className="mt-5 btn btn-primary">Pending</button>
                            </div>
                        </div>

                        <div className="card-body">
                            <h5 className="card-title">{order.name}</h5>
                            <p className="card-text">{order.productDetails}</p>
                        </div>
                    </div>
                </div>}
        </div>

    );
};

export default OrderListUserSingle;