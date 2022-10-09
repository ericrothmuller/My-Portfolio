import React from "react";
import "../../Style.css";
import ResumeImage from "../../images/Eric-Rothmuller-Resume.jpg";
import ResumePdf from "../../images/Eric-Rothmuller-Resume.pdf";

const centerP = {
  textAlign: "center",
};

export default function Resume() {
  return (
    <div className="animate__animated animate__fadeIn">
      <h1>My Resume</h1>
      <p style={centerP}>Click on the image to download a PDF version.</p>
      <div>
        <a href={ResumePdf} target="blank" className="resumeDiv">
          <img
            src={ResumeImage}
            className="resume"
            alt="Eric Rothmuller's Resume"
            title="Eric Rothmuller's Resume"
          />
        </a>
      </div>
    </div>
  );
}
