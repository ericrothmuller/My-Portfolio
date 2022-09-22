import React from 'react';
import '../../Style.css';

const portfolioCard = {
  width: "45%",
  padding: "25px",
  borderRadius: "35px",
  cursor: "pointer",
}

export default function Portfolio() {

  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        Portfolio Items will go here.
      </p>
      <div className="cardsDiv">
        <img src={require("../../images/Cocktail-Concoctor-Screen-Shot.jpg")} alt="Cocktail Concocter Portfolio" title="Cocktail Concocter" style={portfolioCard} />
        <img src={require("../../images/Cocktail-Concoctor-Screen-Shot.jpg")} alt="Cocktail Concocter Portfolio" title="Cocktail Concocter" style={portfolioCard} />
        <img src={require("../../images/Cocktail-Concoctor-Screen-Shot.jpg")} alt="Cocktail Concocter Portfolio" title="Cocktail Concocter" style={portfolioCard} />
        <img src={require("../../images/Cocktail-Concoctor-Screen-Shot.jpg")} alt="Cocktail Concocter Portfolio" title="Cocktail Concocter" style={portfolioCard} />
      </div>
    </div>
  );
}