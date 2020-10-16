import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './SingleService.css';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const SingleService = ({ service }) => {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    const history = useHistory();

    const handleOrder = () => {
        localStorage.setItem("serviceId", JSON.stringify(service._id));
        history.replace('/dashboard/order');
    }

    return (
        <div onClick={handleOrder} className="col-md-4 mb-5 text-decoration-none">
            <animated.div
                class="card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
            >
                <div className="p-3 single-service">
                    <img className="img-fluid mb-3" src={`data:image/png;base64,${service.image.img}`} alt="" />
                    <h3 className="text-dark">{service.name}</h3>
                    <p className="text-muted ">{service.description}</p>
                </div>
            </animated.div>
        </div>


    );
};

export default SingleService;