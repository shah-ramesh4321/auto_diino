import React from 'react'

const TopBanner = () => {
  return (
    <>
    <section class="banner-bg">
            <div class="container">
                <div class="col-12 position-relative ">
                    <form class="col-lg-10 mx-auto py-5 nav-stacked">
                        <div class="row">
                            <div class="col-12 text-center pb-md-5 pb-3">
                                <h1 class="banner-title lh-1 text-center  mb-0">SELECT YOUR VEHICLE </h1>
                                <p class="text-white fs-20px text-center">Customize, Modify, Upgrade, Repair, Replace
                                </p>
                            </div>
                            <div class="mb-3 col-md col-12">
                                <div class="input-group mb-3">
                                    <span class="input-group-text line-form" id="basic-addon1">
                                        1
                                    </span>
                                    <select class="form-select" id="inputGroupSelect01">
                                        <option selected>Year</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="mb-3 col-md col-12">
                                <div class="input-group mb-3">
                                    <span class="input-group-text line-form" id="basic-addon1">2</span>
                                    <select class="form-select" id="inputGroupSelect01">
                                        <option selected>Make...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="mb-3 col-md col-12">
                                <div class="input-group mb-3">
                                    <span class="input-group-text line-form" id="basic-addon1">3</span>
                                    <select class="form-select " id="inputGroupSelect01">
                                        <option selected>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="mb-3 col-md-auto col-12 ">
                                <button type="submit" class="btn btn-success px-5 text-white fs-6 w-100">GO</button>
                            </div>
                            <div class="col-12 text-center pt-5">
                                <span class="text-white px-3">
                                    <a href="#">
                                        SHOP BY PRODUCT (16,609,104)
                                    </a>
                                </span>
                                <span class="text-white px-3 border-start">
                                    <a href="#">
                                        SHOP BY PRODUCT (16,609,104)
                                    </a>
                                </span>
                                <span class="text-white px-3 border-start">
                                    <a href="#">
                                        SHOP BY PRODUCT (16,609,104)
                                    </a>
                                </span>
                            </div>
                        </div>



                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default TopBanner