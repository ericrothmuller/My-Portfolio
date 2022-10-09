import React from "react";
import "../../Style.css";
import "animate.css";

export default function Contact() {
  return (
    <div className="contactMe animate__animated animate__fadeIn">
      <h1>Get In Contact</h1>
      <p>You can reach me by phone or email at:</p>
      <p>
        <strong>Phone: </strong>
        <a href="tel:17078432047">707-843-2047</a>
      </p>
      <p>
        <strong>Email: </strong>
        <a href="mailto:ericrothmuller@gmail.com">ericrothmuller@gmail.com</a>
      </p>
    </div>
  );
}
