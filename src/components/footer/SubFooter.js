import React from 'react'

const SubFooter = () => {
  return (
    <div class="container-fluid px-md-5 bg-success text-white py-3">
        <div class="row row-cols-lg-3 row-cols-md-2 px-md-5 align-items-center align pt-4">
            <div class="col">
                <div class="d-flex">
                    <div>
                        <img width="80px" src="assets/images/icons/100percentOriginal.png" alt=""/>
                    </div>
                    <div class="ps-5">
                        <h5 class="fs-20px">100% ORIGINAL</h5>
                            <p class="pe-2">Guarantee for all products at
                                Gajari.com</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="d-flex">
                    <div>
                        <img width="80px" src="assets/images/icons/truck.png" alt=""/>
                    </div>
                    <div class="ps-5">
                        <h5 class="fs-20px">SUPERFAST DELIVERY</h5>
                            <p>We Deliver at your doorstep hasslefree with fastest delivery time in India.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="d-flex">
                    <div>
                        <img width="60px" src="assets/images/icons/Group_2.png" alt=""/>
                    </div>
                    <div class="ps-5">
                        <h5 class="fs-20px">EASY RETURNS</h5>
                            <p>Changed your mind? No worries, we got you covered! Return within 14 days of receiving
                                your order.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubFooter