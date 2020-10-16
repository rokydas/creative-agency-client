import React from 'react';
import './Navbar.css';
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {

    const history = useHistory();

    const name = JSON.parse(localStorage.getItem("name"));
    const email = JSON.parse(localStorage.getItem("email"));
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
    const photoURL = JSON.parse(localStorage.getItem("photoURL"));

    const handleLogOut = () => {
        localStorage.clear();
        history.go(0);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand ml-5" href="/"><img src="https://i.ibb.co/cgrXbTz/logo.png" alt="sdfsdf"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-5" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">Our Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">Our Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">Contact Us</a>
                    </li>
                    {name && <li><h5 className="nav-link mr-5"><img className="mr-3" style={{width: '30px', borderRadius: '50%'}} src={photoURL} alt=""/>{name}</h5></li>}
                     
                    {isAdmin ? <Link to="/dashboard/service-list-admin"><button className="custom-btn mr-5">Dashboard</button></Link>
                    : <Link to="/dashboard/order"><button className="custom-btn mr-5">Dashboard</button></Link>}
                    
                    {name ? <Link to='/'><button onClick={handleLogOut} className="custom-btn mr-5">Logout</button></Link>
                    : <Link to="/login"><button className="custom-btn mr-5">Login</button></Link>}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;