import React from "react";
import "../../../Style.css";

export default function CocktailConcoctor() {
  return (
    <div className="portfolioDetails animate__animated animate__fadeIn animate__faster">
      <p>
        <strong>Description:</strong> A web application that finds cocktail
        recipes based on input ingredients.
      </p>
      <p>
        <strong>Built for:</strong> U.C. Berkeley Coding Bootcamp
      </p>
      <p>
        <strong>Built with:</strong> HTML, CSS, JavaScript, Tailwind, The
        CocktailDB API, YouTube API, Google Fonts API, Awesomplete API, and
        GitHub.
      </p>
      <p>
        <strong>Deployed link:</strong>{" "}
        <a href="https://ericrothmuller.github.io/Cocktail-Concocter/">
          ericrothmuller.github.io/Cocktail-Concocter/
        </a>
      </p>
    </div>
  );
}
