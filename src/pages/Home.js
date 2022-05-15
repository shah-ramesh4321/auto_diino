import React from 'react'
import TopBanner from '../components/banner/TopBanner'
import CarParts from '../components/CarParts'
import TopCollections from '../components/collections/TopCollections'
import Footer from '../components/footer/Footer'
import SubFooter from '../components/footer/SubFooter'
import Navbar from '../components/navbar/Navbar'
import ShopByServiceType from '../components/slider/ShopByServiceType'
import Slider1 from '../components/slider/Slider1'
import Slider2 from '../components/slider/Slider2'
import '../assets/plugins/slick/slick.css'
import BottomCollections from '../components/collections/BottomCollection'
import '../assets/css/home.css'
import FeatureBrands from '../components/slider/FeatureBrands'
import FeaturedModel from '../components/FeaturedModel'
import TopCategories from '../components/TopCategories'

const Home = () => {
  return (
    <>
    <Navbar />
    <main class="page-wrapper">
    <TopBanner />
    <Slider1 />
    <TopCollections />
    <Slider2 />
    <TopCategories />
    <CarParts />
    <ShopByServiceType />
    <BottomCollections />
    <FeaturedModel />
    <FeatureBrands />
    </main>
    <SubFooter/>
    <Footer/>
    </>
  )
}

export default Home