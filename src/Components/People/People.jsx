import React,{useRef} from 'react'
import './People.css';
import Next_Icon from '../../assets/next-icon.png';
import Prev_Icon from '../../assets/back-icon.png';
import user1 from '../../assets/user-1.jpg';
import user2 from '../../assets/user-2.png';
import user3 from '../../assets/user-3.png';
import user4 from '../../assets/user-4.png';


const Customer = () => {

   let slider=useRef();
   let translateX=0;

   const slideForword=()=>{
       if(translateX>-50){
        translateX-=25;
       }
       slider.current.style.transform=`translateX(${translateX}%)`;
   }

   const slideBackword=()=>{
    if(translateX< 0){
      translateX+=25;
     }
     slider.current.style.transform=`translateX(${translateX}%)`;
   }


  return (
    <div className='costomer'>
       <img src={Next_Icon} className='next-btn' onClick={slideForword}></img>
       <img src={Prev_Icon} className='back-btn' onClick={slideBackword}></img>

       <div className="slider">
         <ul ref={slider}>
          <li>
            <div className="slide">
             <div className="user-info">
              <img src={user1}></img>
              <div>
                <h3>Aditya Wandhekar</h3>
                <span>Pune,Maharashtra.</span>
              </div>
             </div>
             <p>"Tourism: A Bridge Between Cultures or a Threat to Sustainability?" 🌍✈️
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorem deleniti sit harum nemo quasi consequatur esse in id porro, laudantium atque. Molestias soluta neque nemo consequuntur amet dolore delectus.
             </p>
            </div>
          </li>
          <li>
            <div className="slide">
             <div className="user-info">
              <img src={user2}></img>
              <div>
                <h3>Jhon Willsion</h3>
                <span>USA</span>
              </div>
             </div>
             <p>"Tourism: A Bridge Between Cultures or a Threat to Sustainability?" 🌍✈️
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorem deleniti sit harum nemo quasi consequatur esse in id porro, laudantium atque. Molestias soluta neque nemo consequuntur amet dolore delectus.
             </p>
            </div>
          </li>
          <li>
            <div className="slide">
             <div className="user-info">
              <img src={user3}></img>
              <div>
                <h3>Mili Kaf</h3>
                <span>Australlia</span>
              </div>
             </div>
             <p>"Tourism: A Bridge Between Cultures or a Threat to Sustainability?" 🌍✈️
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorem deleniti sit harum nemo quasi consequatur esse in id porro, laudantium atque. Molestias soluta neque nemo consequuntur amet dolore delectus.
             </p>
            </div>
          </li>
          <li>
            <div className="slide">
             <div className="user-info">
              <img src={user4}></img>
              <div>
                <h3>Alex Warner</h3>
                <span>Newziland</span>
              </div>
             </div>
             <p>"Tourism: A Bridge Between Cultures or a Threat to Sustainability?" 🌍✈️
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorem deleniti sit harum nemo quasi consequatur esse in id porro, laudantium atque. Molestias soluta neque nemo consequuntur amet dolore delectus.
             </p>
            </div>
          </li>
         </ul>
       </div>

    </div>
  )
}

export default Customer
