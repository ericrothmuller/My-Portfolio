import React from "react";
import "../../../";

export default function FureverYours() {
  return (
    <div className="portfolioDetails animate__animated animate__fadeIn animate__faster">
      <p>
        <strong>Description:</strong> A web app that displays adoptable pets
        based on a user's search input.
      </p>
      <p>
        <strong>Built for:</strong> U.C. Berkeley Coding Bootcamp
      </p>
      <p>
        <strong>Built with:</strong> HTML, CSS, JavaScript, Node, Express,
        Bcrypt, Dotenv, MongoDB, Mongoose, React, Adopt-A-Pet.com API,
        Paint.net, React-autocomplete-hint, Font Awesome, Git, GitHub, and
        Heroku.
      </p>
      <p>
        <strong>Deployed link:</strong>{" "}
        <a href="https://furever-yours.herokuapp.com/">
          furever-yours.herokuapp.com
        </a>
      </p>
    </div>
  );
}
