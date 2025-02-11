import React from 'react'
import dark_arrow from '../../assets/dark-arrow.png';
import './Hero.css';
const Hero = ({setDisplay}) => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>" Discover the World's Hidden Gems! "</h1>
        <p>Travel is not just about visiting new places; it's about experiencing cultures, embracing adventure, and creating memories that last a lifetime.</p>
        <button className='btn' onClick={()=>{
          setDisplay(true)
        }}>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
