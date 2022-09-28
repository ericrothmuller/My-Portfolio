import React from 'react';
import '../../Style.css';

export default function About() {

  return (
    <div className="aboutMe animate__animated animate__fadeIn">
      <h1>About Me</h1>
      <p>
      My name is Eric Rothmuller and I'm a web developer living in Northern California. I have been working in the web design and online marketing field since 2011. I graduated from U.C. Berkeley's Full-Stack Coding Bootcamp which had an emphasis on the <div class="merntooltip">MERN<span class="merntooltiptext">MongoDB, Express.js, React, and Node.js.</span></div> stack and I am seeking a full-time permanent job that'll allow me to work as a web developer.
      </p>
    <div className="aboutImageDiv">
      <img className="aboutImage animate__animated animate__slideInRight" src={require("../../images/Eric.jpg")} alt="Eric Rothmuller Headshot" title="Eric Rothmuller" />
    </div>

    <div className="leftDiv">
      <h2>left div</h2>
    </div>

    <div className="rightDiv">
      <h2>right  div</h2>
    </div>



      <ul>
        <li className='normalUl animate__animated animate__slideInLeft'>HTML</li>
        <li className='normalUl animate__animated animate__slideInLeft'>CSS</li>
        <li className='normalUl animate__animated animate__slideInLeft'>JavaScript</li>
        <li className='normalUl animate__animated animate__slideInLeft'>React</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Responsive Design</li>
        <li className='normalUl animate__animated animate__slideInLeft'>SQL</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Node.js</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Express.js</li>
        <li className='normalUl animate__animated animate__slideInLeft'>MongoDB</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Mongoose</li>
        <li className='normalUl animate__animated animate__slideInLeft'>REST APIs</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Third-party APIs</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Mongoose</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Git and GitHub</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Dev Tools</li>
      </ul>

      <ul>
        <li className='normalUl animate__animated animate__slideInLeft'>Search Engine Optimization</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Google Analytics</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Google Search Console</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Google My Business</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Google Ads</li>
        <li className='normalUl animate__animated animate__slideInLeft'>WordPress</li>
        <li className='normalUl animate__animated animate__slideInLeft'>WooCommerce</li>
        <li className='normalUl animate__animated animate__slideInLeft'>eCommerce Product Management</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Content Writing</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Graphic Design</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Email Marketing</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Social Media Marketing</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Lighthouse</li>
      </ul>
    </div>
  );
}