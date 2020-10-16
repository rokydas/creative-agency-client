import React, { useEffect, useState } from 'react';
import OrderListUserSingle from '../OrderListUserSingle/OrderListUserSingle';

const OrderListUser = () => {

    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        fetch('https://creative-agency18.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrderList(data));
    }, [])

    return (
        <div>
            <h3 className="mt-5">Your Order List</h3>
            {orderList.length > 0 ? <div className="order-box">
                <div className="row">
                    {
                        orderList.map((order => <OrderListUserSingle key={order._id} order={order} />))
                    }
                </div>
            </div>
                : <div className="text-center">
                    <h1>Loading...</h1>
                    <img className="img-fuid" src="https://i.ibb.co/kBnQx2n/200.gif" alt="" />
                </div>
            }
        </div>
    );
};

export default OrderListUser;