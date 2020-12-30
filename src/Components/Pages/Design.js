import React from 'react'
import smarthome from '../Images/smarthome.jpg';
import onboard from '../Images/onboard.png';
import booking from '../Images/booking.png';
import juice from '../Images/juice-product.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faArrow} from '@fortawesome/free-solid-svg-icons'

export default function Design() {
  return (
    <div  className="container">
      <h2 className="design_title">
      Good design means good business
      </h2>

<div className="design_contents">
    <div className="first_content">
        <img src={smarthome} alt="smarthome" className="image1"/>
        <h5 className="design_heading">Full stack application</h5>
        <span className="design_role">Smart home dashboard</span>
    </div>


    <div className="first_content">
        <img src={onboard} alt="smarthome" className="image1"/>
        <h5 className="design_heading">UX/UI design</h5>
        <p className="design_role">Smart home dashboard</p>
    </div>

    <div className="first_content">
        <img src={booking} alt="smarthome" className="image1"/>
        <h5 className="design_heading">Mobile application</h5>
        <p className="design_role">Booking system</p>
    </div>


    <div className="first_content">
        <img src={juice} alt="smarthome" className="image1"/>
        <h5 className="design_heading">Front End application</h5>
        <p className="design_role">Juice product homepage</p>
    </div>

    

</div>
<p className="seemore">see more <i class="fas fa-long-arrow-alt-right"></i></p>


    </div>
  )
}
