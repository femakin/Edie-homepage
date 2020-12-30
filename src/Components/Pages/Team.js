import React from 'react'
import person1 from '../Images/person1.png';
import person2 from '../Images/person2.png';
import person3 from '../Images/person3.png';

export default function Team() {
  return (
    <div className="container">
      <div className="team_content">
          <div className="left_content">
<p className="team_title">
Meet the team
</p>
<h2 className="team_info">We are chilled and a laidback team</h2>
<span className="team_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </div>
          <div className="right_content">
<div className="imageone">
<figure className="gallery__item gallery__item--1">
    <img src={person1} alt="person1" className="gallery__img"/>
</figure>
</div>

<div className="imagetwo">
<figure className="gallery__item gallery__item--2">
    <img src={person2} alt="person2" className="gallery__img"/>
</figure>

<figure className="gallery__item gallery__item--3">
    <img src={person3} alt="person3" className="gallery__img"/>
</figure>
</div>
          </div>
      </div>
    </div>
  )
}
