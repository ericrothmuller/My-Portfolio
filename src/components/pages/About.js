import React from 'react';
import '../../Style.css';



export default function About() {

  const viewDevSkills = () => {
    document.getElementById("devDiv").classList.remove('hiddenDiv');
    document.getElementById("devDiv").classList.add('visibleDiv');
  };

  const viewMarkSkills = () => {
    document.getElementById("marketingDiv").classList.remove('hiddenDiv');
    document.getElementById("marketingDiv").classList.add('visibleDiv');
  };

  return (
    <div className="aboutMe animate__animated animate__fadeIn">
      <h1>About Me</h1>
      <p>
      My name is Eric Rothmuller and I'm a web developer living in Northern California. I have been working in the web design and online marketing field since 2011. I graduated from U.C. Berkeley's Full-Stack Coding Bootcamp which had an emphasis on the <div class="merntooltip">MERN<span class="merntooltiptext">MongoDB, Express.js, React, and Node.js.</span></div> stack and I am seeking a full-time permanent job that'll allow me to work as a web developer.
      </p>

      <div className="aboutImageDiv">
      <img className="aboutImage animate__animated animate__slideInRight" src={require("../../images/Eric.jpg")} alt="Eric Rothmuller Headshot" title="Eric Rothmuller" />
    </div>

    {/* SKILLS BUTTONS */}

    <div className="skillsButtons">
      <div className="columnDiv">
      <button className="developerSkillsButton" onClick={viewDevSkills}>Developer Skills</button>
      <button className="marketingSkillsButton" onClick={viewMarkSkills}>Marketing Skills</button>
        <div id="leftDiv" className="leftDiv">
          <div id="devDiv" className="hiddenDiv">
            <h2>Developer Skills:</h2>
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
        <div id="marketingDiv" className="hiddenDiv">
          <h2>Marketing Skills:</h2>
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
    
  );
}