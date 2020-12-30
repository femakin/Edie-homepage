import React from 'react'
import heroImage from '../Images/heroImage.jpg';

export default function Hero() {
  return (
    <div className="container">
      <div className="wrapper">
          <p className="wrapper_para">
          Unhappy with your website?
          </p>
          <h2 className="wrapper_content">
          We create beautiful and fast web services
          </h2>
      </div>
      <img src={heroImage} alt="heroimage" className="heroimage"/>
      <div className="wrapper">
          <h2 className="wrapper_content">
          Story, emotion and purpose
          </h2>
          <p className="second__para">We help transform your ideas into real world applications that will outperform your 
              toughest competition and help you achieve your strategic goals in short period of time.</p>

          <p className="third__para">Want us to contact you?</p>  
         <div className="hero_input">
         <button className="btn1"><a href="/">Join</a></button>
          <input type="text" placeholder="Email" className="input"/> </div> 
      </div>
     
    </div>
  )
}
