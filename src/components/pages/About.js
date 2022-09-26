import React from 'react';
import '../../Style.css';

export default function About() {

  return (
    <div className="animate__animated animate__fadeIn">
      <h1>About Me</h1>
      <p>
      My name is Eric Rothmuller and I'm a web designer and programmer from Northern California, USA. I have been working in the online marketing field since 2011 and am proficient in the following skill:
      </p>
    <div className="aboutImageDiv">
      <img className="aboutImage" src={require("../../images/Eric.jpg")} alt="Eric Rothmuller Headshot" title="Eric Rothmuller" />
    </div>
      <ul>
        <li className='normalUl'>UX / UI Web Design</li>
        <li className='normalUl'>WordPress</li>
        <li className='normalUl'>Search Engine Optimization</li>
        <li className='normalUl'>Social Media Marketing</li>
        <li className='normalUl'>Email Marketing</li>
        <li className='normalUl'>Digital Advertising</li>
        <li className='normalUl'>Content Writing</li>
        <li className='normalUl'>Google Analytics</li>
        <li className='normalUl'>Google Search Console Tools</li>
        <li className='normalUl'>Lighthouse</li>
      </ul>

      <p>I also attended the U.C. Berkeley Coding Bootcamp to become a full-stack programmer and am proficient in the following skills:</p>

      <ul>
        <li className='normalUl'>HTML</li>
        <li className='normalUl'>CSS</li>
        <li className='normalUl'>JavaScript</li>
        <li className='normalUl'>Bootstrap</li>
        <li className='normalUl'>JQuery</li>
        <li className='normalUl'>Node.js</li>
        <li className='normalUl'>Express.js</li>
        <li className='normalUl'>MySQL</li>
        <li className='normalUl'>Schema</li>
        <li className='normalUl'>Git and GitHub</li>
        <li className='normalUl'>JSON</li>
        <li className='normalUl'>Web API's, Server Side API's, and Third Party API's</li>
        <li className='normalUl'>MongoDB</li>
        <li className='normalUl'>Mongoose</li>
        <li className='normalUl'>React</li>
      </ul>
    </div>
  );
}