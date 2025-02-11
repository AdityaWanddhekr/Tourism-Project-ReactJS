import React from 'react'
import './Contact.css';
import MSG_IMG from '../../assets/msg-icon.png';
import Mail_IMG from '../../assets/mail-icon.png';
import Phone_IMG from '../../assets/phone-icon.png';
import location_IMG from '../../assets/location-icon.png';
import arrow_img from '../../assets/white-arrow.png'
const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "028792b7-7240-4762-a75b-9820f21cd096");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
         <h3>Send Us Message <img src={MSG_IMG}></img></h3>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error dolorem tempora minima enim quo ratione numquam vero, quos hic accusantium itaque culpa nihil, non dolorum consectetur. Accusamus blanditiis ad facilis.</p>
         <ul>
          <li><img src={Mail_IMG}></img>Contact@gmail,com</li>
          <li><img src={Phone_IMG}></img>+1 123-456-789</li>
          <li><img src={location_IMG}></img>Pune,Maharashtra <br/>414106,India</li> 
         </ul>
      </div>
      <div className="contact-col">
         <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type='text' name='name' placeholder='Enter your name' required></input>
          <label>Phone Number</label>
          <input type='tel' name='phone' placeholder='Enter your phone number' required></input>
          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit Now<img src={arrow_img}></img></button>
          </form>
          <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
