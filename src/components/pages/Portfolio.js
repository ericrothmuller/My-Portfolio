import React from 'react';
import '../../Style.css';

const centerP = {
  textAlign: "center",
}

export default function Portfolio() {



  return (
    <div>
      <h1>Portfolio</h1>
      <p style={centerP}>
        Here is a list of some of the projects I've worked on. You can click on each image for more information on each project.
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