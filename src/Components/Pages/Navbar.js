import React, { useState } from "react";
import { IconContext } from "react-icons";
import { MdMenu } from "react-icons/md";
// import { MdClose } from "react-icons/md";

export default function Navbar() {
    const[navLinkOpen, navLinkToggle] = useState(false)
    const handleNavLinksToggle = () =>{
        navLinkToggle(!navLinkOpen)
    }
    const renderClasses = () =>{
        let classes = "navlinks";
        if(navLinkOpen){
            classes += " active"
        }
        return classes;
    }
  return (
    <div>
      <div className="container">
     <nav>
     <div className="logo">
          <a href="/">Edie</a>
      </div>
      <ul className={renderClasses()}>
          <li className="link"> <a href="/">Home</a> </li>
          <li className="link"> <a href="/">Services</a> </li>
          <li className="link"> <a href="/">Our Works</a> </li>
          <li className="link"> <a href="/">Clients</a> </li>
          <li className="link"> <a href="/">Contacts</a> </li>
      </ul>
      <IconContext.Provider value={{ color: "#000000", size: "30px", className: "icon" }}>
      <div onClick={handleNavLinksToggle} className="hamburger-toggle">
          <MdMenu/>
      </div>
      </IconContext.Provider>
     </nav>
      </div>
    </div>
  )
}
