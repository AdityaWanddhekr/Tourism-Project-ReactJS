import React, { useRef } from 'react'
import './Explore.css';
import IMG from '../../assets/About_IMG.png';

const Explore = ({display,setDisplay}) => {

  let div=useRef(null);

  let closeWindow=(e)=>{
    if(e.target===div.current){
      setDisplay(false)
    }
  }

  return (
    <div className={`explore ${display?'':'hide'}`}  ref={div} onClick={closeWindow}>
      <img src={IMG}></img>
      <h1>"Where Adventure Meets Luxury!"😊</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi veniam unde voluptatum sint nihil minima a neque cupiditate magnam omnis officiis, aperiam mollitia magni, sed voluptate similique optio consequuntur ut.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus fugiat aspernatur impedit? Consectetur magnam ut repellat voluptate! Voluptatibus aliquid unde in. Officia at rerum minus quae. Ea similique quam hic?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis libero odio, sit unde rerum soluta delectus adipisci consectetur accusantium dolorum ratione necessitatibus provident cupiditate eaque repellat ab magni qui quibusdam.
      </p>
    </div>
  )
}

export default Explore
