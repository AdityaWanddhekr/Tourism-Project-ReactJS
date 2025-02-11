import React, { useEffect, useState } from 'react'
import './Navbar.css';
import {Link} from 'react-scroll'
import Menu_Img from '../../assets/menu-icon.png'
const Navbar = () => {

  const [fix,setFix]=useState(false);

  useEffect(()=>{
     window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setFix(true):setFix(false);
     });
  },[]);

  const [mobileView,setMobileView]=useState(false);
  const toggleMenu=()=>{
     mobileView ? setMobileView(false) : setMobileView(true);
  }

  return (
 
             <nav className={`container ${fix ? 'dark-nav':''}`}>
                 {/* <img src={logo} alt='' className='logo'></img> */}
                 <h1 className='logo'>TOURISUM</h1>
                 <ul className={mobileView ?'':'mobile-view'}>
                   <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                   <li><Link to='programs' smooth={true} offset={-260} duration={500} >Places</Link></li>
                   <li><Link to='about' smooth={true} offset={-150} duration={500} >About Us</Link></li>
                   <li><Link to='gallary' smooth={true} offset={-260} duration={500} >Gallary</Link></li>
                   <li><Link to='costomer' smooth={true} offset={-260} duration={500} >Our Coustomer</Link></li>
                   <li><Link to='contact' smooth={true} offset={-260} duration={500}  className='btn'>Contact US</Link></li>
                 </ul>
                 <img src={Menu_Img} className='menu' onClick={toggleMenu}></img>
              </nav>
       
  )
}

export default Navbar
