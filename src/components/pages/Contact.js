import React from "react";
import "../../Style.css";
import "animate.css";

const blackColorTop = {
  color: "black",
  fontWeight: "700",
  paddingBottom: "15px",
};

const blackColorBottom = {
  color: "black",
  fontWeight: "700",
  paddingTop: "15px",
};

export default function Contact() {
  return (
    <div className="contactMe animate__animated animate__fadeIn backgroundImage">
      <div className="aboutImageDiv">
        <img
          className="contactImage"
          src={require("../../images/Eric.jpg")}
          alt="Eric Rothmuller Headshot"
          title="Eric Rothmuller"
        />
      </div>
      <h1>Get In Contact</h1>
      <p style={blackColorTop}>You can reach me by phone or email at:</p>
      <p>
        <strong>Phone: </strong>
        <a href="tel:17078432047">707-843-2047</a>
      </p>
      <p>
        <strong>Email: </strong>
        <a href="mailto:ericrothmuller@gmail.com">ericrothmuller@gmail.com</a>
      </p>
      <p style={blackColorBottom}>Thank you for your interest!</p>
    </div>
  );
}
