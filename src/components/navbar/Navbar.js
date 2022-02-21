import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import InteriorAccessories from "../../assets/images/icons/interior-accessories.svg";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div class="site-header sticky-top ">
        <nav
          class="navbar  navbar-light shadow-sm py-lg-0 px-md-5"
          aria-label="Main navigation"
        >
          <div class="px-xl-5 px-sm-4 px-3 d-block w-100 position-relative">
            <div class="row align-items-lg-end align-items-center">
              <div class="col">
                <div class="row align-items-center justify-content-end">
                  <div class="col-auto py-3 pe-0 ">
                    <i
                      // onClick={handleShow}
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                      class="bi bi-list h1"
                    ></i>
                  </div>
                  <div class="col-auto py-3">
                    <a class="navbar-brand" href="index.html">
                      <img class="img-fluid logo" src={Logo} alt="logo" />
                    </a>
                  </div>
                  <div class="col collapse" id="mobile-search-drop">
                    <div class="row">
                      <div class=" mx-auto">
                        <div class="desktop-search-holder">
                          <div class="input-group desktop-search">
                            <input
                              type="text"
                              onkeyup="desktopsearch()"
                              class="form-control px-4 fw-medium"
                              id="mysearchinput"
                              placeholder="Search by Make Model Year, Product Type, Part Number, or Brand..."
                              aria-label="Recipient's username"
                              aria-describedby="basic-addon2"
                            />
                            <button
                              class="input-group-text px-4"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#desktop-search-drop"
                              aria-expanded="false"
                              aria-controls="desktop-search-drop"
                              id="basic-addon2"
                            >
                              <i class="bi bi-search me-2"></i>
                            </button>
                          </div>
                          <div
                            class="collapse desktop-search-drop"
                            id="desktop-search-drop"
                          >
                            <div class="card">
                              <div class="card-body search-items">
                                <div class="list-group">
                                  <a href="#" class="list-group-item">
                                    <span class="text-gray-400 me-3">
                                      <i class="bi bi-search"></i>
                                    </span>
                                    <span>Interior</span>
                                  </a>
                                  <a href="#" class="list-group-item">
                                    <span class="text-gray-400 me-3">
                                      <i class="bi bi-search"></i>
                                    </span>
                                    <span>Tshirt Red</span>
                                  </a>
                                  <a href="#" class="list-group-item">
                                    <span class="text-gray-400 me-3">
                                      <i class="bi bi-search"></i>
                                    </span>
                                    <span>Tshit Collared</span>
                                  </a>
                                  <a href="#" class="list-group-item">
                                    <span class="text-gray-400 me-3">
                                      <i class="bi bi-search"></i>
                                    </span>
                                    <span>Tshirt</span>
                                  </a>
                                </div>
                              </div>
                              <div class="card-body border-top recents-search">
                                <div class="list-group">
                                  <a href="#" class="list-group-item">
                                    <span class="text-gray-400 me-3">
                                      <i class="bi bi-clock-history"></i>
                                    </span>
                                    <span>Tshit Collared</span>
                                  </a>
                                  <a href="#" class="list-group-item">
                                    <span class="text-gray-400 me-3">
                                      <i class="bi bi-clock-history"></i>
                                    </span>
                                    <span>Tshirt Red</span>
                                  </a>
                                  <a href="#" class="list-group-item">
                                    <span class="text-gray-400 me-3">
                                      <i class="bi bi-clock-history"></i>
                                    </span>
                                    <span>Tshit Collared</span>
                                  </a>
                                  <a href="#" class="list-group-item">
                                    <span class="text-gray-400 me-3">
                                      <i class="bi bi-clock-history"></i>
                                    </span>
                                    <span>Tshirt</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-auto ms-auto">
                    <ul class="nav nav-btns justify-content-end">
                      <li class="nav-item d-md-none d-flex justify-content-center align-items-center">
                        <a
                          type="button"
                          data-bs-toggle="collapse"
                          href="#mobile-search-drop"
                          aria-expanded="false"
                          aria-controls="mobile-search-drop"
                          id="basic-addon2"
                          class="nav-link link-dark px-3"
                        >
                          <i class="bi bi-search"></i>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="signin.html" class="nav-link link-dark px-3">
                          <span class="icons">
                            <i class="bi bi-person-fill"></i>
                          </span>
                          <span class="d-md-block d-none">My Account</span>
                        </a>
                      </li>
                      <li class="nav-item  d-xs-block">
                        <a href="wishlist.html" class="nav-link link-dark px-3">
                          <span class="icons">
                            <i class="bi bi-heart-fill"></i>
                          </span>
                          <span class="d-md-block d-none">Wishlist</span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="cart.html" class="nav-link link-dark px-3">
                          <span class="icons">
                            <i class="bi bi-cart-fill"></i>
                          </span>
                          <span class="d-md-block d-none">Cart</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-12 col-auto d-md-block d-none">
                    <nav
                      class="navbar navbar-expand-lg py-lg-0"
                      aria-label="Fifth navbar example"
                    >
                      <div class="container-fluid px-0">
                        <div
                          class="collapse navbar-collapse"
                          id="navbarsExample05"
                        >
                          <div class="col-12">
                            <div class="row flex-lg-row flex-column menus-holder justify-content-end">
                              <div class="col-lg-auto ps-lg-1">
                                <ul class="navbar-nav w-100 justify-content-end">
                                  <li class="nav-item">
                                    <a class="nav-link" href="#">
                                      Exterior
                                    </a>
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link" href="#">
                                      Performance
                                    </a>
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link" href="#">
                                      Lighting
                                    </a>
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link" href="#">
                                      Wheels
                                    </a>
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link" href="#">
                                      Parts
                                    </a>
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link" href="#">
                                      Body Parts
                                    </a>
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link" href="#">
                                      Audio & Electronics
                                    </a>
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link" href="#">
                                      Audio & Electronics
                                    </a>
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link" href="#">
                                      Specialty
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>

                  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasRight"
                                aria-labelledby="offcanvasRightLabel">
                                <div class="offcanvas-header">
                                    <h4 class="pt-4 border-bottom w-100">Departments</h4>
                                        <button type="button"
                                            class="btn-close text-reset z-index-999 position-absolute top-0 end-0 p-4"
                                            data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body pt-0 px-0">
                                    <div class="col-12">
                                        <div class="">
                                            <ul class="navbar-nav w-100 justify-content-lg-between">
                                                <li class="nav-item dropdown">
                                                    <span class="nav-link d-flex" onclick="showfilter()">
                                                        <span>
                                                            <img src="assets/images/icons/interior-accessories.svg"
                                                                alt="img-icon"/>
                                                        </span>
                                                        <span
                                                            class="align-self-center pb-3 text-decoration-underline ps-3">
                                                            Interior Accessories
                                                        </span>
                                                        <span class="h4 position-absolute end-0"> <i
                                                                class="bi bi-chevron-right"></i>
                                                        </span>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="second-menu pt-3 px-4" id="second-menu">
                                        <div class="">
                                            <span onclick="hidefilter()" class="h4 pt-2"><i
                                                    class="bi bi-arrow-left"></i> Back</span>
                                            <h4 class="pt-4">Interior Accessories</h4>
                                                <ul class="navbar-nav w-100 justify-content-lg-between list-unstyled">
                                                    <li class="nav-item dropdown">
                                                        <span class="nav-link d-flex">
                                                            <span>
                                                                <img src="assets/images/icons/interior-accessories.svg"
                                                                    alt="img-icon"/>
                                                            </span>
                                                            <span
                                                                class="align-self-center pb-3 text-decoration-underline ps-3">
                                                                Interior Accessories
                                                            </span>
                                                        </span>
                                                    </li>

                                                </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Body>
          <div class="col-12">
            <div class="">
              <h4 class="pt-4 border-bottom w-100">Departments</h4>

              <button
                type="button"
                class="btn-close text-reset z-index-999 position-absolute top-0 end-0 p-3"
                onClick={() => setShow(false)}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
              <ul class="navbar-nav w-100 justify-content-lg-between">
                <li class="nav-item dropdown">
                  <span
                    class="nav-link d-flex"
                    onclick="showfilter()"
                    onClick={() => setShow1(true)}
                  >
                    <span>
                      <img src={InteriorAccessories} alt="img-icon" />
                    </span>
                    <span class="align-self-center pb-3 text-decoration-underline ps-3">
                      Interior Accessories
                    </span>
                    <span class="h4 position-absolute end-0">
                      {" "}
                      <i class="bi bi-chevron-right"></i>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas show={show1} onHide={() => setShow1(false)}>
        <Offcanvas.Body>
          <div class="" id="second-menu">
            <div class="">
              <span
                onClick={() => setShow1(false)}
                onclick="hidefilter()"
                class="h4 pt-2"
              >
                <i class="bi bi-arrow-left"></i> Back
              </span>
              <h4 class="pt-4">Interior Accessories</h4>
              <ul class="navbar-nav w-100 justify-content-lg-between list-unstyled">
                <li class="nav-item dropdown">
                  <span class="nav-link d-flex">
                    <span>
                      <img src={InteriorAccessories} alt="img-icon" />
                    </span>
                    <span class="align-self-center pb-3 text-decoration-underline  ps-3">
                      Interior Accessories
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navbar;
