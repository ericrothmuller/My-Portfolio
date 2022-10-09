import React from "react";
import "../../../Style.css";

export default function FlyingGoatCoffee() {
  return (
    <div className="portfolioDetails animate__animated animate__fadeIn animate__faster">
      <p>
        <strong>Description:</strong> An eCommerce website build for a coffee
        company.
      </p>
      <p>
        <strong>Built for:</strong> Flying Goat Coffee
      </p>
      <p>
        <strong>Built with:</strong> HTML, CSS, Wordpress, WooCommerce, and
        Paint.net.
      </p>
      <p>
        <strong>Deployed link:</strong>{" "}
        <a href="https://flyinggoatcoffee.com/">flyinggoatcoffee.com</a>
      </p>
    </div>
  );
}
