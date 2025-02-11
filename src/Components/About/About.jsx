import React from 'react';
import './About.css';
import About_Img from '../../assets/About_IMG.png';
import Play_Icon from '../../assets/play-icon.png';

const About = ({setplay}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={About_Img} className='about-img'></img>
        <img src={Play_Icon} className='playicon-img' onClick={()=>{
          setplay(true)
        }}></img>
      </div>
      <div className="about-right">
        <h1>About Tourisum</h1>
        <h3>"Explore. Experience. Enjoy." 🌍✨</h3>
        <p>Discover the world’s wonders, embrace new cultures, and create unforgettable memories. Whether you seek adventure, relaxation, or a journey through history, tourism opens the door to breathtaking landscapes, vibrant traditions, and inspiring experiences.</p>
      </div>
    </div>
  )
}

export default About
