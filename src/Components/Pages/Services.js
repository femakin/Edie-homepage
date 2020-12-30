import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import {faTerminal} from '@fortawesome/free-solid-svg-icons'

export default function Services() {
  return (
    <div  className="container">
       <h2 className="services__title">We offer high demand services</h2>
       <div className="services">
           <div className="uiux">
               <div className="uiux_icon"><FontAwesomeIcon icon={faPen} className="iconn" /></div>
               <h2 className="uiux_title">UI/UX Design</h2>
               <p className="uiux_desc">Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
               <button className="btn2"><a href="/" className="uiux_a">Get started</a></button>
           </div>


           <div className="uiux">
               <div className="uiux_icon" id="uiux_icon"><FontAwesomeIcon icon={faCode} className="iconn" /></div>
               <h2 className="uiux_title"> Front End </h2>
               <p className="uiux_desc">Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
               <button className="btn3"><a href="/" className="uiux_a" id="btn3">Get started</a></button>
           </div>


           <div className="uiux">
               <div className="uiux_icon" id="backend_icon"><FontAwesomeIcon icon={faTerminal} className="iconn" /></div>
               <h2 className="uiux_title"> Back End </h2>
               <p className="uiux_desc">Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
               <button className="btn2"><a href="/" className="uiux_a" id="btn4">Get started</a></button>
           </div>





       </div>
    </div>
  )
}
