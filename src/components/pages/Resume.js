import React from 'react';
import '../../Style.css';
import ResumeImage from '../../images/Eric-Rothmuller-Resume.jpg';
import ResumePdf from '../../images/Eric-Rothmuller-Resume.pdf';

export default function Resume() {

  return (
    <div>
      <h1>Eric Rothmuller's Resume</h1>
      <div>
        <a href={ResumePdf} target="blank" className="resumeDiv"><img src={ResumeImage} className="resume" alt="Eric Rothmuller's Resume" title="Eric Rothmuller's Resume" /></a>
      </div>
    </div>
  );
}