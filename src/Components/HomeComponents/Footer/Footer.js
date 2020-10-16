import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer mt-5 pt-5">
            <div className="custom-container">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <h1>Let us handle your <br /> project, professionally.</h1>
                            <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form action="">
                            <input className="form-control" type="email" name="email" placeholder="Your email address" id="" /><br />
                            <input className="form-control" type="text" name="name" placeholder="Your name/company's name" id="" /><br />
                            <textarea className="form-control" rows="7" name="message" placeholder="Your message" /><br />
                            <button className="custom-btn">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <p className="text-center mt-5">Copyright Orange labs {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;