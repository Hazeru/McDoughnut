import React from 'react'
import HeroSection from '../../components/HeroSection'
import About from '../../components/About'
import Qualities from '../../components/Qualities'
import Menu from '../../components/Menu'
import ShopInformation from '../../components/ShopInformation'
import WhoAreWe from '../../components/WhoAreWe'
import History from '../../components/History'
import Venue from '../../components/Venue'
import WhatWeOffer from '../../components/WhatWeOffer'
import Team from '../../components/Team'
import Reservation from '../../components/Reservation'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <Qualities/>
      <ShopInformation/>
      <Menu/>
      <WhoAreWe/>
      <History/>
      <Venue/>
      <WhatWeOffer/>
      <Team/>
      <Reservation/>
      <Footer/>
    </>
  )
}

export default Home
