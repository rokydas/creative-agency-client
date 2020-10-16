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
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active col-md-5">
                    <img className="img-fluid" src="https://i.ibb.co/Kb2G7FR/carousel-1.png" className="d-block w-100" alt="..." />
                </div> 
                <div className="carousel-item col-md-5">
                    <img className="img-fluid" src="https://i.ibb.co/9bdQb9h/carousel-2.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item col-md-5">
                    <img className="img-fluid" src="https://i.ibb.co/bs9n5mn/carousel-3.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item col-md-5">
                    <img className="img-fluid" src="https://i.ibb.co/MZQn82F/carousel-4.png" className="d-block w-100" alt="..." />
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
        // <Slider {...settings}>
        //     <div>
        //         <h3>1</h3>
        //     </div>
        //     <div>
        //         <h3>2</h3>
        //     </div>
        //     <div>
        //         <h3>3</h3>
        //     </div>
        //     <div>
        //         <h3>4</h3>
        //     </div>
        //     <div>
        //         <h3>5</h3>
        //     </div>
        //     <div>
        //         <h3>6</h3>
        //     </div>
        // </Slider>
    );
};

export default Slider;