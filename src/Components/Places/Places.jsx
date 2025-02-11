import React  from 'react';
import './Places.css';
import Place_1 from '../../assets/place-1.jpg';
import Place_2 from '../../assets/place-2.jpg';
import Place_3 from '../../assets/place-3.jpg';
import Place_icon_1 from '../../assets/place1-icon.png';
import Place_icon_2 from '../../assets/place2-icon.png';
import Place_icon_3 from '../../assets/place3-icon.png';

const Programs = () => {
  return (
    
    <div className='programs'>
      <div className='program'>
        <img src={Place_1}></img>
        <div className="caption">
          <img src={Place_icon_1}></img>
          <p>Maharashtra</p>
        </div>
      </div>
      <div className='program'>
        <img src={Place_2}></img>
        <div className="caption">
          <img src={Place_icon_2}></img>
          <p>Rajastan</p>
        </div>
      </div>
      <div className='program'>
        <img src={Place_3}></img>
        <div className="caption">
          <img src={Place_icon_3}></img>
          <p>Uter Pradesh</p>
        </div>
      </div>
      
    </div>
  )
}

export default Programs
