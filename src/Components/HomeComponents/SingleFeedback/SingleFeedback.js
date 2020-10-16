import React from 'react';
import './SingleFeedback.css';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const SingleFeedback = ({ feedback }) => {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return (
        <div className="col-md-4 single-feedback mb-5 d-flex justify-content-center">
            <animated.div
                className="card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
            >
                <div style={{ height: '45ch' }} className="d-flex align-items-center">
                    <div className="p-3">
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
                </div>

            </animated.div>
        </div>
    );
};

export default SingleFeedback;