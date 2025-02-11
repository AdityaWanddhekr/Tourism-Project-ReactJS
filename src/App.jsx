import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Places from './Components/Places/Places'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallary from './Components/Gallary/Gallary'
import Customer from './Components/People/People'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Video from './Components/Video/Video'
import Explore from './Components/Explore/Explore'
const App = () => {

  const [play,setPlay]=useState(false);
  const [display,setDisplay]=useState(false);

  return (
    <div>
      <Navbar></Navbar>
      <Hero setDisplay={setDisplay}></Hero>
      <div className="container">
          <Title subTitle='Best Places' title='Every Place Has its Unique Identity'></Title>
          <Places></Places>
          <About setplay={setPlay}></About>
          <Title subTitle='Gallary' title='Places Photoes'></Title>
          <Gallary></Gallary>
          <Title subTitle='People Opinion' title='We should explore!...'></Title>
          <Customer></Customer>
          <Title subTitle='Contact Us' title='Get In Touch'></Title>
          <Contact></Contact>
          <Footer></Footer>
      </div>
      <Video play={play} setPlay={setPlay}></Video>
      <Explore display={display} setDisplay={setDisplay}></Explore>
    </div>
  )
}

export default App
