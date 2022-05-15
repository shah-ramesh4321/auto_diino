import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Brembo   from '../../assets/images/data/brembo_0.jpg'
import GoRhino from '../../assets/images/data/go-rhino-bumper_0.jpg'
import NextArrow from './NextArrow';
import PreviousArrow from './PreviousArrow';

const Slider2 = () => {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
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
        <>

            <section>
                <div class="container">
                    <div class="row g-lg-5 g-4">
                        <div class="col-12 py-1 px-4">
                            <Slider {...settings}>
                                <div class="card mx-3">
                                    <img src={GoRhino} class="card-img" alt="alt" />
                                    <div class="card-img-overlay row align-items-end justify-content-between g-0">
                                        <div class="col-auto">
                                            <h2 class="card-title text-white">Brembo</h2>
                                            <p class="text-white">Braking products born to perform on the track. Rely on
                                                Brembo and enjoy the power of safe stopping.</p>
                                        </div>

                                    </div>
                                </div>
                                <div class="card mx-3">
                                    <img src={Brembo} class="card-img" alt="alt" />
                                    <div class="card-img-overlay row align-items-end justify-content-between g-0">
                                        <div class="col-auto">
                                            <h2 class="card-title text-white">Brembo</h2>
                                            <p class="text-white">Braking products born to perform on the track. Rely on
                                                Brembo and enjoy the power of safe stopping.</p>
                                        </div>

                                    </div>
                                </div>
                                <div class="card mx-3">
                                    <img src={Brembo} class="card-img" alt="alt" />
                                    <div class="card-img-overlay row align-items-end justify-content-between g-0">
                                        <div class="col-auto">
                                            <h2 class="card-title text-white">Brembo</h2>
                                            <p class="text-white">Braking products born to perform on the track. Rely on
                                                Brembo and enjoy the power of safe stopping.</p>
                                        </div>

                                    </div>
                                </div>
                                <div class="card mx-3">
                                    <img src={Brembo} class="card-img" alt="alt" />
                                    <div class="card-img-overlay row align-items-end justify-content-between g-0">
                                        <div class="col-auto">
                                            <h2 class="card-title text-white">Brembo</h2>
                                            <p class="text-white">Braking products born to perform on the track. Rely on
                                                Brembo and enjoy the power of safe stopping.</p>
                                        </div>

                                    </div>
                                </div>
                                <div class="card mx-3">
                                    <img src={Brembo} class="card-img" alt="alt" />
                                    <div class="card-img-overlay row align-items-end justify-content-between g-0">
                                        <div class="col-auto">
                                            <h2 class="card-title text-white">Brembo</h2>
                                            <p class="text-white">Braking products born to perform on the track. Rely on
                                                Brembo and enjoy the power of safe stopping.</p>
                                        </div>

                                    </div>
                                </div>
                            </Slider>
                            
                            {/* <div class="products-second-carousel slick-height-equal slick-arrow-white">
                            <div class="card mx-3">
                                <img src="assets/images/data/brembo_0.jpg" class="card-img" alt="alt" />
                                <div class="card-img-overlay row align-items-end justify-content-between g-0">
                                    <div class="col-auto">
                                        <h2 class="card-title text-white">Brembo</h2>
                                            <p class="text-white">Braking products born to perform on the track. Rely on
                                                Brembo and enjoy the power of safe stopping.</p>
                                    </div>

                                </div>
                            </div>
                            <div class="card mx-3">
                                <img src="assets/images/data/go-rhino-bumper_0.jpg" class="card-img" alt="alt" />
                                <div class="card-img-overlay row align-items-end justify-content-between g-0">
                                    <div class="col-auto">
                                        <h2 class="card-title text-white">Brembo</h2>
                                            <p class="text-white">Braking products born to perform on the track. Rely on
                                                Brembo and enjoy the power of safe stopping.</p>
                                    </div>

                                </div>
                            </div>
                            <div class="card mx-3">
                                <img src="assets/images/data/brembo_0.jpg" class="card-img" alt="alt" />
                                <div class="card-img-overlay row align-items-end justify-content-between g-0">
                                    <div class="col-auto">
                                        <h2 class="card-title text-white">Brembo</h2>
                                            <p class="text-white">Braking products born to perform on the track. Rely on
                                                Brembo and enjoy the power of safe stopping.</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Slider2