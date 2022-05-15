import React from 'react'
import BreakPad from '../assets/images/data/brake-pads.svg'

const CarParts = () => {
  return (
    <section class="px-0 my-5">
    <div class="container">
        <div class="row ">
            <div class="col-md-8 mx-auto text-center">
                <h2 class="section-heading pb-4 fw-bold">MUST HAVES FOR EVERY CAR</h2>
                <p>Enjoy an entirely new level of driving experience with our in-depth selection of superior car
                    bulbs, brake pads, spark plugs, and other automotive parts and accessories designed to keep
                    your car running at its absolute best</p>
            </div>
        </div>
        <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-4 g-md-4 g-4">
            <div class="col px-2">
                <div class=" d-flex border rounded-3 align-items-center">
                    <div class="card-top-img px-2">
                        <img src={BreakPad} alt=""/>
                    </div>
                    <div class="card-body px-0">
                        <h5 class="card-title fs-16px mb-1 fw-bold">Brake Pads</h5>
                            <p>Get trusted Stopping power</p>
                    </div>
                </div>
            </div>
            <div class="col px-2">
                <div class=" d-flex border rounded-3 align-items-center">
                    <div class="card-top-img px-2">
                        <img src={BreakPad} alt=""/>
                    </div>
                    <div class="card-body px-0">
                        <h5 class="card-title fs-16px mb-1 fw-bold">Brake Pads</h5>
                            <p>Get trusted Stopping power</p>
                    </div>
                </div>
            </div>
            <div class="col px-2">
                <div class=" d-flex border rounded-3 align-items-center">
                    <div class="card-top-img px-2">
                        <img src={BreakPad} alt=""/>
                    </div>
                    <div class="card-body px-0">
                        <h5 class="card-title fs-16px mb-1 fw-bold">Brake Pads</h5>
                            <p>Get trusted Stopping power</p>
                    </div>
                </div>
            </div>
            <div class="col px-2">
                <div class=" d-flex border rounded-3 align-items-center">
                    <div class="card-top-img px-2">
                        <img src={BreakPad} alt=""/>
                    </div>
                    <div class="card-body px-0">
                        <h5 class="card-title fs-16px mb-1 fw-bold">Brake Pads</h5>
                            <p>Get trusted Stopping power</p>
                    </div>
                </div>
            </div>
            <div class="col px-2">
                <div class=" d-flex border rounded-3 align-items-center">
                    <div class="card-top-img px-2">
                        <img src={BreakPad} alt=""/>
                    </div>
                    <div class="card-body px-0">
                        <h5 class="card-title fs-16px mb-1 fw-bold">Brake Pads</h5>
                            <p>Get trusted Stopping power</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default CarParts