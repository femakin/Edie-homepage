import React from 'react'
import instagram from '../Images/instagram.svg';
import linkedin from '../Images/linkedin.svg';
import twitter from '../Images/twitter.svg';

export default function Footer() {
  return (
    
      <div className="footer">
<div className="container">
<div className="footer_item">
<div className="footer_list">
    <ul>
        <li> <a href="/">Home</a> </li>
        <li> <a href="/">Services</a> </li>
        <li> <a href="/">Our works</a> </li>
        <li> <a href="/">Clients</a> </li>
        <li> <a href="/">Contact</a> </li>
    </ul>
</div>

<div className="footer_social">
    <h2 className="footer_name">Edie</h2>
    <div className="footer_social">
<img src={instagram} alt="instagram" className="instagram_icon"/>
<img src={linkedin} alt="linkedin" className="linkedin_icon"/>
<img src={twitter} alt="twitter" className="twitter_icon"/>
    </div>
</div>


<div className="footer_input">
    <p className="third__para">Want us to contact you?</p>  
          <input type="text" placeholder="Email" id="input"/>  
          <button className="btn6"><a href="/">Join</a></button>
</div>

</div>
<span className="lastoffer"><a href="/">Femi@</a><a href="https://devchallenges.io/mysolutions">DevChallenges.io</a></span>
      </div>
     
    </div>
  )
}
