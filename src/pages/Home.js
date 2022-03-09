import React from 'react'
import TopBanner from '../components/banner/TopBanner'
import TopCollections from '../components/collections/TopCollections'
import Navbar from '../components/navbar/Navbar'
import Slider1 from '../components/slider/Slider1'

const Home = () => {
  return (
    <>
    <Navbar />
    <main class="page-wrapper">
    <TopBanner />
    <Slider1 />
    <TopCollections />
    </main>
    </>
  )
}

export default Home