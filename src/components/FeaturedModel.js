import React from 'react'

const FeaturedModel = () => {
  return (
    <section class="top-categories px-0 bg-gray-200">
    <div class="container pt-3">
        <div class="row py-3">
            <ul class="nav-custom">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Featured Makes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Featured Models</a>
                </li>

            </ul>
        </div>
        <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-4 row-cols-md-3 pt-5 g-md-4 g-3">
            <div class="col">
                <div class="card py-3 text-center px-3 py-4">
                    <div class="d-flex justify-content-between">
                        <span>Chevy</span>
                        <span><i class="bi bi-chevron-right"></i></span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card py-3 text-center px-3 py-4">
                    <div class="d-flex justify-content-between">
                        <span>Ford</span>
                        <span><i class="bi bi-chevron-right"></i></span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card py-3 text-center px-3 py-4">
                    <div class="d-flex justify-content-between">
                        <span>Dodge</span>
                        <span><i class="bi bi-chevron-right"></i></span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card py-3 text-center px-3 py-4">
                    <div class="d-flex justify-content-between">
                        <span>Ram</span>
                        <span><i class="bi bi-chevron-right"></i></span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card py-3 text-center px-3 py-4">
                    <div class="d-flex justify-content-between">
                        <span>Toyota</span>
                        <span><i class="bi bi-chevron-right"></i></span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card py-3 text-center px-3 py-4">
                    <div class="d-flex justify-content-between">
                        <span>Nissan</span>
                        <span><i class="bi bi-chevron-right"></i></span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card py-3 text-center px-3 py-4">
                    <div class="d-flex justify-content-between">
                        <span>Honda</span>
                        <span><i class="bi bi-chevron-right"></i></span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card py-3 text-center px-3 py-4">
                    <div class="d-flex justify-content-between">
                        <span>Jeep</span>
                        <span><i class="bi bi-chevron-right"></i></span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card py-3 text-center px-3 py-4">
                    <div class="d-flex justify-content-between">
                        <span>GMC</span>
                        <span><i class="bi bi-chevron-right"></i></span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card py-3 text-center px-3 py-4">
                    <div class="d-flex justify-content-between">
                        <span>Hyundai</span>
                        <span><i class="bi bi-chevron-right"></i></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col py-4 text-center">
                <button class="btn btn-outline-success px-5 rounded-0">View More</button>
            </div>
        </div>
    </div>
</section>
  )
}

export default FeaturedModel