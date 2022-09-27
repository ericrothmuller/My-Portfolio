import React from 'react';
import '../../Style.css';

export default function About() {

  return (
    <div className="aboutMe animate__animated animate__fadeIn">
      <h1>About Me</h1>
      <p>
      My name is Eric Rothmuller and I'm a web developer living in Northern California. I have been working in the web design and online marketing field since 2011. I graduated from U.C. Berkeley's Full-Stack Coding Bootcamp which had an emphasis on the <div class="merntooltip">MERN<span class="merntooltiptext">MongoDB, Express.js, React, and Node.js.</span></div> stack. I am seeking a job that'll allow me to work as a developer.
      </p>
    <div className="aboutImageDiv">
      <img className="aboutImage animate__animated animate__slideInRight" src={require("../../images/Eric.jpg")} alt="Eric Rothmuller Headshot" title="Eric Rothmuller" />
    </div>
      <ul>
        <li className='normalUl animate__animated animate__slideInLeft'>UX / UI Web Design</li>
        <li className='normalUl animate__animated animate__slideInLeft'>WordPress</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Search Engine Optimization</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Social Media Marketing</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Email Marketing</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Digital Advertising</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Content Writing</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Google Analytics</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Google Search Console Tools</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Lighthouse</li>
      </ul>

      <p>I also attended the U.C. Berkeley Coding Bootcamp to become a full-stack programmer and am proficient in the following skills:</p>

      <ul>
        <li className='normalUl animate__animated animate__slideInLeft'>HTML</li>
        <li className='normalUl animate__animated animate__slideInLeft'>CSS</li>
        <li className='normalUl animate__animated animate__slideInLeft'>JavaScript</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Bootstrap</li>
        <li className='normalUl animate__animated animate__slideInLeft'>JQuery</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Node.js</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Express.js</li>
        <li className='normalUl animate__animated animate__slideInLeft'>MySQL</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Schema</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Git and GitHub</li>
        <li className='normalUl animate__animated animate__slideInLeft'>JSON</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Web API's, Server Side API's, and Third Party API's</li>
        <li className='normalUl animate__animated animate__slideInLeft'>MongoDB</li>
        <li className='normalUl animate__animated animate__slideInLeft'>Mongoose</li>
        <li className='normalUl animate__animated animate__slideInLeft'>React</li>
      </ul>
    </div>
  );
}