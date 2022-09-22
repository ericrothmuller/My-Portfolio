import React from 'react';
import '../../Style.css';

// const portfolioCard = {
//   width: "45%",
//   padding: "25px",
//   borderRadius: "35px",
//   cursor: "pointer",
// }

export default function Portfolio() {



  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        Portfolio Items will go here.
      </p>
      <div className="cardsDiv">
        <img className ="portfolioImage" src={require("../../images/Cocktail-Concoctor-Screen-Shot.jpg")} alt="Cocktail Concocter Portfolio" title="Cocktail Concocter" />
        <img className ="portfolioImage" src={require("../../images/Jedi-Clicker-Screen-Shot.jpg")} alt="Jedi Clicker Portfolio" title="Jedi Clicker" />
        <img className ="portfolioImage" src={require("../../images/Elite-MD-Screenshot.jpg")} alt="Elite MD Portfolio" title="Elite MD" />
        <img className ="portfolioImage" src={require("../../images/Murder-Ridge-Screenshot.jpg")} alt="Murder Ridge Portfolio" title="Murder Ridge" />
      </div>
    </div>
  );
}

{/* <img className="animalImage" src={animal.pic_url} alt="animal"/> */}