import React from 'react';
import './Gallary.css';
import Gallary_1 from '../../assets/gallary-1.jpg';
import Gallary_2 from '../../assets/gallary-2.jpg';
import Gallary_3 from '../../assets/gallary-3.jpg';
import Gallary_4 from '../../assets/gallary-4.jpg';
import white_arrow from '../../assets/white-arrow.png'

const Gallary = () => {
  return (
    <div className='gallary'>
      <div className="collection">
        <img src={Gallary_1}></img>
        <img src={Gallary_2}></img>
        <img src={Gallary_3}></img>
        <img src={Gallary_4}></img>

      </div>
      <button className='btn dark-btn'>See more here!...</button>
    </div>
  )
}

export default Gallary
