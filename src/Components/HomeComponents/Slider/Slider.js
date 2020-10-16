import React from 'react';
import './Slider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row">
                        <img className="img-fluid col-md-4" src="https://i.ibb.co/Kb2G7FR/carousel-1.png" alt="..." />
                        <img className="img-fluid col-md-4" src="https://i.ibb.co/9bdQb9h/carousel-2.png" alt="..." />
                        <img className="img-fluid col-md-4" src="https://i.ibb.co/bs9n5mn/carousel-3.jpg" alt="..." />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row">
                        <img className="img-fluid col-md-4" src="https://i.ibb.co/9bdQb9h/carousel-2.png" alt="..." />
                        <img className="img-fluid col-md-4" src="https://i.ibb.co/bs9n5mn/carousel-3.jpg" alt="..." />
                        <img className="img-fluid col-md-4" src="https://i.ibb.co/MZQn82F/carousel-4.png" alt="..." />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row">
                        <img className="img-fluid col-md-4" src="https://i.ibb.co/bs9n5mn/carousel-3.jpg" alt="..." />
                        <img className="img-fluid col-md-4" src="https://i.ibb.co/MZQn82F/carousel-4.png" alt="..." />
                        <img className="img-fluid col-md-4" src="https://i.ibb.co/Kb2G7FR/carousel-1.png" alt="..." />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row">
                        <img className="img-fluid col-md-4" src="https://i.ibb.co/MZQn82F/carousel-4.png" alt="..." />
                        <img className="img-fluid col-md-4" src="https://i.ibb.co/Kb2G7FR/carousel-1.png" alt="..." />
                        <img className="img-fluid col-md-4" src="https://i.ibb.co/9bdQb9h/carousel-2.png" alt="..." />
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

    );
};

export default Slider;