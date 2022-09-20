import React from 'react';
import '../../Style.css';
import ResumeImage from '../../images/Eric-Rothmuller-Resume.jpg'

export default function Resume() {

  return (
    <div>
      <h1>Eric Rothmuller's Resume</h1>
      <div className="resumeDiv">
        <img src={ResumeImage} className="resume" alt="Resume" title="Click to download PDF" />
      </div>
    </div>
  );
}