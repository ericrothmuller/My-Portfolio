import React from 'react';
import '../../Style.css';

export default function Portfolio() {

  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        Portfolio Items will go here.
      </p>
      <div className="cardsDiv">
        <img src={require("../../images/Cocktail-Concoctor-Screen-Shot.jpg")} alt="Cocktail Concocter Portfolio" title="Cocktail Concocter" className="portfolioCard" />
        <img src={require("../../images/Cocktail-Concoctor-Screen-Shot.jpg")} alt="Cocktail Concocter Portfolio" title="Cocktail Concocter" className="portfolioCard" />
        <img src={require("../../images/Cocktail-Concoctor-Screen-Shot.jpg")} alt="Cocktail Concocter Portfolio" title="Cocktail Concocter" className="portfolioCard" />
        <img src={require("../../images/Cocktail-Concoctor-Screen-Shot.jpg")} alt="Cocktail Concocter Portfolio" title="Cocktail Concocter" className="portfolioCard" />
      </div>
    </div>
  );
}