import React from 'react'
import Box1 from '../../assets/images/data/box-1_0.jpg'
import Box2 from '../../assets/images/data/box-2_0.jpg'
import Box3 from '../../assets/images/data/box-3-last-minute-shopper_0.jpg'
import Box4 from '../../assets/images/data/box-4_0.jpg'
import Box5 from '../../assets/images/data/box-5_0.jpg'

const BottomCollections = () => {
  return (
    <section class="discover-brands-section pt-0 pb-2">
            <div class="container-fluid">
                <div class="row my-md-3">
                    <div class="col-md-3 my-3">
                        <div class="row g-4">
                            <div class="col-md-12">
                                <div class="card">
                                    <img src={Box1} class="card-img" alt="alt" />
                                    <div
                                        class="align-items-center card-img-overlay d-flex g-0 justify-content-center row">
                                        <div class="col-auto text-center d-lg-block d-none">
                                            <h3 class="card-title text-white">Holiday Gift Guide</h3>
                                                <button class="btn-primary btn rounded-0 px-5">Read All</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="card">
                                    <img src={Box2} class="card-img" alt="alt" />
                                    <div
                                        class="align-items-center card-img-overlay d-flex g-0 justify-content-center row">
                                        <div class="col-auto text-center d-lg-block d-none">
                                            <h3 class="card-title text-white">Gift Card</h3>
                                                <button class="btn-danger btn rounded-0 px-5">Shop Now</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 my-3">
                        <div class="row g-4">
                            <div class="col-md-12">
                                <div class="card">
                                    <img src={Box3} class="card-img"
                                        alt="alt" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 my-3">
                        <div class="row g-4">
                            <div class="col-md-12">
                                <div class="card">
                                    <img src={Box4} class="card-img" alt="alt" />
                                    <div
                                        class="align-items-center card-img-overlay d-flex g-0 justify-content-center row">
                                        <div class="col-auto text-center d-lg-block d-none">
                                            <h3 class="card-title text-white">Holiday Gift Guide</h3>
                                                <button class="btn-danger btn rounded-0 px-5">Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="card">
                                    <img src={Box5} class="card-img" alt="alt" />
                                    <div
                                        class="align-items-center card-img-overlay d-flex g-0 justify-content-center row">
                                        <div class="col-auto text-center d-lg-block d-none">
                                            <h3 class="card-title text-white">Holiday Gift Guide</h3>
                                                <button class="btn-danger btn rounded-0 px-5">Shope Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
  )
}

export default BottomCollections