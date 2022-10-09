import React from "react";
import "../../../Style.css";

export default function JediClicker() {
  return (
    <div className="portfolioDetails animate__animated animate__fadeIn animate__faster">
      <p>
        <strong>Description:</strong> A Star Wars based clicker game.
      </p>
      <p>
        <strong>Built for:</strong> U.C. Berkeley Coding Bootcamp.
      </p>
      <p>
        <strong>Built with:</strong> HTML, CSS, JavaScript, Node, Express,
        MySQL2, Bcrypt, Sequelize, Connect Session Sequelize, Dotenv, Express
        Handlebars, Handlebars, Paint.net, Git, GitHub, and Heroku.
      </p>
      <p>
        <strong>Deployed link:</strong>{" "}
        <a href="https://jediclicker.herokuapp.com/login">
          jediclicker.herokuapp.com/login
        </a>
      </p>
    </div>
  );
}
