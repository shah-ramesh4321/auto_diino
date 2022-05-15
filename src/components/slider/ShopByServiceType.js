import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TransmissionFluid from '../../assets/images/data/transmission-fluid-change_ic_5.jpg'
import PreviousArrow from './PreviousArrow';
import NextArrow from './NextArrow';

const ShopByServiceType = () => {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        prevArrow: <PreviousArrow imgSrc="" imgAlt="previous-button" />,
        nextArrow: <NextArrow imgSrc="" imgAlt="next-button" />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
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
    <section class="featured-offers bg-gray-200">
            <div class="container-fluid">

                <div class="row g-lg-5 g-4">
                    <div class="col-12 py-1 px-4">
                        <div class="row">
                            <div class="col-12">
                                <h2 class="section-heading fw-bold text-center pb-3">SHOP BY SERVICE TYPE</h2>
                            </div>
                        </div>
                        <Slider {...settings}>
                        <div class="product-card px-lg-3 px-2 my-3 mx-3">
                                <a href="product.html" class="card border-0 h-100 text-center">
                                    <div class="card-img">
                                        <div class="img-holder d-flex justify-content-center ">
                                            <img src={TransmissionFluid}
                                                alt="curated" class="img-fluid card-img-top"/>
                                        </div>
                                    </div>
                                    <div class="card-body px-0">
                                        <h6 class="text-gray-700 text-truncate1">Transmission Fluid Change</h6>
                                    </div>
                                </a>
                            </div>
                            <div class="product-card px-lg-3 px-2 my-3 mx-3">
                                <a href="product.html" class="card border-0 h-100 text-center">
                                    <div class="card-img">
                                        <div class="img-holder d-flex justify-content-center ">
                                            <img src={TransmissionFluid}
                                                alt="curated" class="img-fluid card-img-top"/>
                                        </div>
                                    </div>
                                    <div class="card-body px-0">
                                        <h6 class="text-gray-700 text-truncate1">Transmission Fluid Change</h6>
                                    </div>
                                </a>
                            </div>
                            <div class="product-card px-lg-3 px-2 my-3 mx-3">
                                <a href="product.html" class="card border-0 h-100 text-center">
                                    <div class="card-img">
                                        <div class="img-holder d-flex justify-content-center ">
                                            <img src={TransmissionFluid}
                                                alt="curated" class="img-fluid card-img-top"/>
                                        </div>
                                    </div>
                                    <div class="card-body px-0">
                                        <h6 class="text-gray-700 text-truncate1">Transmission Fluid Change</h6>
                                    </div>
                                </a>
                            </div>
                            <div class="product-card px-lg-3 px-2 my-3 mx-3">
                                <a href="product.html" class="card border-0 h-100 text-center">
                                    <div class="card-img">
                                        <div class="img-holder d-flex justify-content-center ">
                                            <img src={TransmissionFluid}
                                                alt="curated" class="img-fluid card-img-top"/>
                                        </div>
                                    </div>
                                    <div class="card-body px-0">
                                        <h6 class="text-gray-700 text-truncate1">Transmission Fluid Change</h6>
                                    </div>
                                </a>
                            </div>
                            <div class="product-card px-lg-3 px-2 my-3 mx-3">
                                <a href="product.html" class="card border-0 h-100 text-center">
                                    <div class="card-img">
                                        <div class="img-holder d-flex justify-content-center ">
                                            <img src={TransmissionFluid}
                                                alt="curated" class="img-fluid card-img-top"/>
                                        </div>
                                    </div>
                                    <div class="card-body px-0">
                                        <h6 class="text-gray-700 text-truncate1">Transmission Fluid Change</h6>
                                    </div>
                                </a>
                            </div>
                        </Slider>
                        {/* <div class="products-carousel slick-height-equal slick-arrow-white">
                            <div class="product-card px-lg-3 px-2 my-3 mx-3">
                                <a href="product.html" class="card border-0 h-100 text-center">
                                    <div class="card-img">
                                        <div class="img-holder d-flex justify-content-center ">
                                            <img src="assets/images/data/transmission-fluid-change_ic_5.jpg"
                                                alt="curated" class="img-fluid card-img-top"/>
                                        </div>
                                    </div>
                                    <div class="card-body px-0">
                                        <h6 class="text-gray-700 text-truncate1">Transmission Fluid Change</h6>
                                    </div>
                                </a>
                            </div>
                            <div class="product-card px-lg-3 px-2 my-3 mx-3">
                                <a href="product.html" class="card border-0 h-100 text-center">
                                    <div class="card-img">
                                        <div class="img-holder d-flex justify-content-center ">
                                            <img src="assets/images/data/exterior.png" alt="curated"
                                                class="img-fluid card-img-top"/>
                                        </div>
                                    </div>
                                    <div class="card-body px-0">
                                        <h6 class="text-gray-700 text-truncate1">Transmission Fluid Change</h6>
                                    </div>
                                </a>
                            </div>
                            <div class="product-card px-lg-3 px-2 my-3 mx-3">
                                <a href="product.html" class="card border-0 h-100 text-center">
                                    <div class="card-img">
                                        <div class="img-holder d-flex justify-content-center ">
                                            <img src="assets/images/data/exterior.png" alt="curated"
                                                class="img-fluid card-img-top"/>
                                        </div>
                                    </div>
                                    <div class="card-body px-0">
                                        <h6 class="text-gray-700 text-truncate1">Transmission Fluid Change</h6>
                                    </div>
                                </a>
                            </div>
                            <div class="product-card px-lg-3 px-2 my-3 mx-3">
                                <a href="product.html" class="card border-0 h-100 text-center">
                                    <div class="card-img">
                                        <div class="img-holder d-flex justify-content-center ">
                                            <img src="assets/images/data/exterior.png" alt="curated"
                                                class="img-fluid card-img-top"/>
                                        </div>
                                    </div>
                                    <div class="card-body px-0">
                                        <h6 class="text-gray-700 text-truncate1">Transmission Fluid Change </h6>
                                    </div>
                                </a>
                            </div>
                            <div class="product-card px-lg-3 px-2 my-3 mx-3">
                                <a href="product.html" class="card border-0 h-100 text-center">
                                    <div class="card-img">
                                        <div class="img-holder d-flex justify-content-center ">
                                            <img src="assets/images/data/exterior.png" alt="curated"
                                                class="img-fluid card-img-top"/>
                                        </div>
                                    </div>
                                    <div class="card-body px-0">
                                        <h6 class="text-gray-700 text-truncate1">Transmission Fluid Change</h6>
                                    </div>
                                </a>
                            </div>
                            <div class="product-card px-lg-3 px-2 my-3 mx-3">
                                <a href="product.html" class="card border-0 h-100 text-center">
                                    <div class="card-img">
                                        <div class="img-holder d-flex justify-content-center ">
                                            <img src="assets/images/data/exterior.png" alt="curated"
                                                class="img-fluid card-img-top"/>
                                        </div>
                                    </div>
                                    <div class="card-body px-0">
                                        <h6 class="text-gray-700 text-truncate1">Transmission Fluid Change</h6>
                                    </div>
                                </a>
                            </div>
                            <div class="product-card px-lg-3 px-2 my-3 mx-3">
                                <a href="product.html" class="card border-0 h-100 text-center">
                                    <div class="card-img">
                                        <div class="img-holder d-flex justify-content-center ">
                                            <img src="assets/images/data/exterior.png" alt="curated"
                                                class="img-fluid card-img-top"/>
                                        </div>
                                    </div>
                                    <div class="card-body px-0">
                                        <h6 class="text-gray-700 text-truncate1">Transmission Fluid Change </h6>
                                    </div>
                                </a>
                            </div>
                        </div> */}

                        <div class="row">
                            <div class="col-12 text-center pt-4">
                                <button class="btn btn-success text-white rounded-0">
                                    View All Service Types
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ShopByServiceType