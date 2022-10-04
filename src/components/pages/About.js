import React from 'react';
import '../../Style.css';



export default function About() {

  const viewDevSkills = () => {
    if (document.getElementById("devDiv").classList[0] === "hiddenDiv") {
      document.getElementById("devDiv").classList.remove('hiddenDiv');
      document.getElementById("devDiv").classList.add('visibleDiv');
      document.getElementById("devDiv").classList.add('animate__animated');
      document.getElementById("devDiv").classList.add('animate__fadeInLeft');
    }
    else {
      document.getElementById("devDiv").classList.remove('animate__animated');
      document.getElementById("devDiv").classList.remove('animate__fadeInLeft');
      document.getElementById("devDiv").classList.add('animate__animated');
      document.getElementById("devDiv").classList.add('animate__fadeOutLeft');
      setTimeout(function() {
        document.getElementById("devDiv").classList.remove('visibleDiv');
        document.getElementById("devDiv").classList.add('hiddenDiv');
        document.getElementById("devDiv").classList.remove('animate__animated');
        document.getElementById("devDiv").classList.remove('animate__fadeOutLeft');
      }, 500);
    }
  };


  const viewMarkSkills = () => {
    if (document.getElementById("marketingDiv").classList[0] === "hiddenDiv") {
      document.getElementById("marketingDiv").classList.remove('hiddenDiv');
      document.getElementById("marketingDiv").classList.add('visibleDiv');
      document.getElementById("marketingDiv").classList.add('animate__animated');
      document.getElementById("marketingDiv").classList.add('animate__fadeInRight');
    }
    else {
      document.getElementById("marketingDiv").classList.remove('animate__animated');
      document.getElementById("marketingDiv").classList.remove('animate__fadeInRight');
      document.getElementById("marketingDiv").classList.add('animate__animated');
      document.getElementById("marketingDiv").classList.add('animate__fadeOutRight');
      setTimeout(function() {
        document.getElementById("marketingDiv").classList.remove('visibleDiv');
        document.getElementById("marketingDiv").classList.add('hiddenDiv');
        document.getElementById("marketingDiv").classList.remove('animate__animated');
        document.getElementById("marketingDiv").classList.remove('animate__fadeOutRight');
      }, 500);
    }
  };

  const certificate = require("../../images/U.C.Berkeley-Certificate.pdf");

  const whiteStyle = {
    color: "white",
    textDecoration: "underline"
  };

  return (
    <div className="aboutMe animate__animated animate__fadeIn backgroundImage">
      <h1>About Me</h1>
      <div className="aboutImageDiv">
      <img className="aboutImage animate__animated animate__slideInRight" src={require("../../images/Eric.jpg")} alt="Eric Rothmuller Headshot" title="Eric Rothmuller" />
    </div>
      <p>
      My name is Eric Rothmuller and I'm a web developer living in Northern California. I have been working in the web design and online marketing field since 2011 and I graduated from <a href={certificate} style={whiteStyle}>U.C. Berkeley's Full-Stack Coding Bootcamp</a> which had an emphasis on the <div class="merntooltip">MERN<span class="merntooltiptext">MongoDB, Express.js, React, and Node.js.</span></div> stack.
      </p>

    &nbsp;
      <p>
      Outside of my over a decade long web design and online marketing experience, I have most recently worked as an IT professional and underwriter for a funeral funding company. In my more distant past (before I fell in love with web development), I was an animal control officer, professional gamer, and worked in mortgage.
      </p>

      &nbsp;
      <p>
        In my spare time, I enjoy spending time with my family and friends. My wife and I go swimming quite often with my step-daughter and niece. I am also a fairly competitive tennis player and enjoy getting on court. I also thoroughly enjoy continuing to learn programming and I dedicate a minimum of 2 hours a day learning new things and improving my craft.
      </p>

      &nbsp;
      <p>
      I am seeking a full-time permanent job that'll allow me to work as a web developer. I am willing to work in-office or remote and I am willing to relocate if needed. I am looking for a company that I could spend the rest of my professional life at.
      </p>
<div>
    <div className="skillsButtons">
      <div className="columnDiv">
        <div id="leftDiv" className="leftDiv">
        <button className="developerSkillsButton" onClick={viewDevSkills}>Developer Skills</button>
          <div id="devDiv" className="hiddenDiv">
            <ul>
                <li className='normalUl'>HTML</li>
                <li className='normalUl'>CSS</li>
                <li className='normalUl'>JavaScript</li>
                <li className='normalUl'>React</li>
                <li className='normalUl'>Responsive Design</li>
                <li className='normalUl'>SQL</li>
                <li className='normalUl'>Node.js</li>
                <li className='normalUl'>Express.js</li>
                <li className='normalUl'>MongoDB</li>
                <li className='normalUl'>Mongoose</li>
                <li className='normalUl'>REST APIs</li>
                <li className='normalUl'>Third-party APIs</li>
                <li className='normalUl'>Mongoose</li>
                <li className='normalUl'>Git and GitHub</li>
                <li className='normalUl'>Dev Tools</li>
              </ul>
            </div>
        </div>
      <div id="rightDiv" className="rightDiv">
      <button className="marketingSkillsButton" onClick={viewMarkSkills}>Marketing Skills</button>
        <div id="marketingDiv" className="hiddenDiv">
          <ul>
              <li className='normalUl'>Search Engine Optimization</li>
              <li className='normalUl'>Google Analytics</li>
              <li className='normalUl'>Google Search Console</li>
              <li className='normalUl'>Google My Business</li>
              <li className='normalUl'>Google Ads</li>
              <li className='normalUl'>WordPress</li>
              <li className='normalUl'>WooCommerce</li>
              <li className='normalUl'>eCommerce Product Management</li>
              <li className='normalUl'>Content Writing</li>
              <li className='normalUl'>Graphic Design</li>
              <li className='normalUl'>Email Marketing</li>
              <li className='normalUl'>Social Media Marketing</li>
              <li className='normalUl'>Lighthouse</li>
            </ul>
          </div>
      </div>
      </div>
      </div>
    </div>
    </div>
  );
}