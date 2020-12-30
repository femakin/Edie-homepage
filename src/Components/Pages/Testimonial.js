import React from 'react'
import person4 from '../Images/person4.png';

export default function Testimonial() {
  return (
    <div className="container">
      <h2 className="testimonial_heading">
      “Fast and outstanding resutls. Edie understands their customer’s needs. They have a young and talented team.”
      </h2>
      <div className="testimonial_agent">
          <img src={person4} alt="person4" className="person4"/>
          <div className="tes_content">
              <h2 className="tes_name">
              Carlos Tran 
              </h2>
              <p className="tes_role">The Decorate Gatsby</p>
          </div>
      </div>
    </div>
  )
}
