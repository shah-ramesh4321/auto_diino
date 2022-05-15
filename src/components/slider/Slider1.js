import React from 'react'
// import '../../assets/plugins/slick/slick.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Exterior from '../../assets/images/data/exterior.png'
import PreviousArrow from './PreviousArrow';
import NextArrow from './NextArrow';

const Slider1 = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        prevArrow: <PreviousArrow  imgAlt="previous-button" />,
        nextArrow: <NextArrow  imgAlt="next-button" />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                    arrows:true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section class="featured-offers">
            <div class="container-fluid">

                <Slider {...settings}>

                    <div class="product-card px-lg-3 px-2 shadow my-3 mx-3 ">
                        <a href="product.html" class="card border-0 h-100 text-center">
                            <div class="card-img">
                                <div class="img-holder d-flex justify-content-center ">
                                    <img src={Exterior} alt="curated"
                                        class="img-fluid card-img-top" />
                                </div>
                            </div>
                            <div class="card-body px-0">
                                <h6 class="text-gray-700 text-truncate1">Exterior</h6>
                            </div>
                        </a>
                    </div>
                    <div class="product-card px-lg-3 px-2 shadow my-3 mx-3">
                        <a href="product.html" class="card border-0 h-100 text-center">
                            <div class="card-img">
                                <div class="img-holder d-flex justify-content-center ">
                                    <img src={Exterior} alt="curated"
                                        class="img-fluid card-img-top" />
                                </div>
                            </div>
                            <div class="card-body px-0">
                                <h6 class="text-gray-700 text-truncate1">Interior</h6>
                            </div>
                        </a>
                    </div>
                    <div class="product-card px-lg-3 px-2 shadow my-3 mx-3">
                        <a href="product.html" class="card border-0 h-100 text-center">
                            <div class="card-img">
                                <div class="img-holder d-flex justify-content-center ">
                                    <img src={Exterior} alt="curated"
                                        class="img-fluid card-img-top" />
                                </div>
                            </div>
                            <div class="card-body px-0">
                                <h6 class="text-gray-700 text-truncate1">Performance</h6>
                            </div>
                        </a>
                    </div>
                    <div class="product-card px-lg-3 px-2 shadow my-3 mx-3">
                        <a href="product.html" class="card border-0 h-100 text-center">
                            <div class="card-img">
                                <div class="img-holder d-flex justify-content-center ">
                                    <img src={Exterior} alt="curated"
                                        class="img-fluid card-img-top" />
                                </div>
                            </div>
                            <div class="card-body px-0">
                                <h6 class="text-gray-700 text-truncate1">Lighting</h6>
                            </div>
                        </a>
                    </div>
                    <div class="product-card px-lg-3 px-2 shadow my-3 mx-3">
                        <a href="product.html" class="card border-0 h-100 text-center">
                            <div class="card-img">
                                <div class="img-holder d-flex justify-content-center ">
                                    <img src={Exterior} alt="curated"
                                        class="img-fluid card-img-top" />
                                </div>
                            </div>
                            <div class="card-body px-0">
                                <h6 class="text-gray-700 text-truncate1">Wheels & Tyres</h6>
                            </div>
                        </a>
                    </div>
                    <div class="product-card px-lg-3 px-2 shadow my-3 mx-3">
                        <a href="product.html" class="card border-0 h-100 text-center">
                            <div class="card-img">
                                <div class="img-holder d-flex justify-content-center ">
                                    <img src={Exterior} alt="curated"
                                        class="img-fluid card-img-top" />
                                </div>
                            </div>
                            <div class="card-body px-0">
                                <h6 class="text-gray-700 text-truncate1">Parts</h6>
                            </div>
                        </a>
                    </div>

                    
                </Slider>


                {/* <div class="row g-lg-5 g-4">
                    <div class="col-12 py-1 px-4">
                        <div class="products-carousel slick-height-equal slick-arrow-white">



                            <div class="product-card px-lg-3 px-2 shadow my-3 mx-3">
                                <a href="product.html" class="card border-0 h-100 text-center">
                                    <div class="card-img">
                                        <div class="img-holder d-flex justify-content-center ">
                                            <img src="assets/images/data/exterior.png" alt="curated"
                                                class="img-fluid card-img-top" />
                                        </div>
                                    </div>
                                    <div class="card-body px-0">
                                        <h6 class="text-gray-700 text-truncate1">Exterior</h6>
                                    </div>
                                </a>
                            </div>
                            <div class="product-card px-lg-3 px-2 shadow my-3 mx-3">
                                <a href="product.html" class="card border-0 h-100 text-center">
                                    <div class="card-img">
                                        <div class="img-holder d-flex justify-content-center ">
                                            <img src="assets/images/data/exterior.png" alt="curated"
                                                class="img-fluid card-img-top" />
                                        </div>
                                    </div>
                                    <div class="card-body px-0">
                                        <h6 class="text-gray-700 text-truncate1">Interior</h6>
                                    </div>
                                </a>
                            </div>
                            <div class="product-card px-lg-3 px-2 shadow my-3 mx-3">
                                <a href="product.html" class="card border-0 h-100 text-center">
                                    <div class="card-img">
                                        <div class="img-holder d-flex justify-content-center ">
                                            <img src="assets/images/data/exterior.png" alt="curated"
                                                class="img-fluid card-img-top" />
                                        </div>
                                    </div>
                                    <div class="card-body px-0">
                                        <h6 class="text-gray-700 text-truncate1">Performance</h6>
                                    </div>
                                </a>
                            </div>
                            <div class="product-card px-lg-3 px-2 shadow my-3 mx-3">
                                <a href="product.html" class="card border-0 h-100 text-center">
                                    <div class="card-img">
                                        <div class="img-holder d-flex justify-content-center ">
                                            <img src="assets/images/data/exterior.png" alt="curated"
                                                class="img-fluid card-img-top" />
                                        </div>
                                    </div>
                                    <div class="card-body px-0">
                                        <h6 class="text-gray-700 text-truncate1">Lighting </h6>
                                    </div>
                                </a>
                            </div>
                            <div class="product-card px-lg-3 px-2 shadow my-3 mx-3">
                                <a href="product.html" class="card border-0 h-100 text-center">
                                    <div class="card-img">
                                        <div class="img-holder d-flex justify-content-center ">
                                            <img src="assets/images/data/exterior.png" alt="curated"
                                                class="img-fluid card-img-top" />
                                        </div>
                                    </div>
                                    <div class="card-body px-0">
                                        <h6 class="text-gray-700 text-truncate1">Wheels & Tires </h6>
                                    </div>
                                </a>
                            </div>
                            <div class="product-card px-lg-3 px-2 shadow my-3 mx-3">
                                <a href="product.html" class="card border-0 h-100 text-center">
                                    <div class="card-img">
                                        <div class="img-holder d-flex justify-content-center ">
                                            <img src="assets/images/data/exterior.png" alt="curated"
                                                class="img-fluid card-img-top" />
                                        </div>
                                    </div>
                                    <div class="card-body px-0">
                                        <h6 class="text-gray-700 text-truncate1">Parts</h6>
                                    </div>
                                </a>
                            </div>
                            <div class="product-card px-lg-3 px-2 shadow my-3 mx-3">
                                <a href="product.html" class="card border-0 h-100 text-center">
                                    <div class="card-img">
                                        <div class="img-holder d-flex justify-content-center ">
                                            <img src="assets/images/data/exterior.png" alt="curated"
                                                class="img-fluid card-img-top" />
                                        </div>
                                    </div>
                                    <div class="card-body px-0">
                                        <h6 class="text-gray-700 text-truncate1">Body </h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Slider1