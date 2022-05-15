import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import YakimaImg from '../../assets/images/data/yakima.png'
import PreviousArrow from './PreviousArrow';
import NextArrow from './NextArrow';




  
const FeatureBrands = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        arrows: true,
        prevArrow: <PreviousArrow imgSrc={YakimaImg} imgAlt="previous-button" />,
        nextArrow: <NextArrow imgSrc={YakimaImg} imgAlt="next-button" />,
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
        <section>
            <div class="container py-5">
                <div class="row">
                    <h2 class="text-center pb-4">FEATURED BRANDS</h2>
                </div>
                <Slider {...settings}>
                    <div class="text-center">
                        <img class="mx-auto" src={YakimaImg} alt="img" />
                    </div>
                    <div class="text-center">
                        <img class="mx-auto" src={YakimaImg} alt="img" />
                    </div>
                    <div class="text-center">
                        <img class="mx-auto" src={YakimaImg} alt="img" />
                    </div>
                    <div class="text-center">
                        <img class="mx-auto" src={YakimaImg} alt="img" />
                    </div>
                    <div class="text-center">
                        <img class="mx-auto" src={YakimaImg} alt="img" />
                    </div>
                    <div class="text-center">
                        <img class="mx-auto" src={YakimaImg} alt="img" />
                    </div>
                    <div class="text-center">
                        <img class="mx-auto" src={YakimaImg} alt="img" />
                    </div>
                    <div class="text-center">
                        <img class="mx-auto" src={YakimaImg} alt="img" />
                    </div>
                </Slider>
                {/* <div class="  products-carousel slick-height-equal slick-arrow-white">
                    <div class="text-center">
                        <img class="mx-auto" src={YakimaImg} alt="img"/>
                    </div>
                    <div class="text-center">
                        <img class="mx-auto" src={YakimaImg} alt="img"/>
                    </div>
                    <div class="text-center">
                        <img class="mx-auto" src={YakimaImg} alt="img"/>
                    </div>
                    <div class="text-center">
                        <img class="mx-auto" src={YakimaImg} alt="img"/>
                    </div>
                    <div class="text-center">
                        <img class="mx-auto" src={YakimaImg} alt="img"/>
                    </div>
                    <div class="text-center">
                        <img class="mx-auto" src={YakimaImg} alt="img"/>
                    </div>
                    <div class="text-center">
                        <img class="mx-auto" src={YakimaImg} alt="img"/>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default FeatureBrands