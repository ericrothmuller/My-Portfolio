import React, {useState} from 'react';
import '../../Style.css';
import CocktailConcoctor from './portfolioItems/CocktailConcoctor';
import JediClicker from './portfolioItems/JediClicker';

const centerP = {
  textAlign: "center",
};

export default function Portfolio() {

const [imageOneIsOpen, toggleimageOneIsOpen] = useState(false);
const [imageTwoIsOpen, toggleImageTwo] = useState(false);

const toggleImageFunction = (state, setState) => {
  if (state === false) {
    setState(true);
  } else {
    setState(false);
  }
};

  return (
    <div>
      <h1>Portfolio</h1>
      <p style={centerP}>
        Here is a list of some of the projects I've worked on. You can click on each image for more information on each project.
      </p>
      <div className="cardsDiv">
        <div className="portfolioDiv">
          <img className="portfolioImage" src={require("../../images/Cocktail-Concoctor-Screen-Shot.jpg")} alt="Cocktail Concocter Portfolio" title="Cocktail Concocter" onClick={() => toggleImageFunction(imageOneIsOpen, toggleimageOneIsOpen)} />
          {imageOneIsOpen ? <CocktailConcoctor /> : null}
        </div>
        <div className="portfolioDiv">
          <img className="portfolioImage" src={require("../../images/Jedi-Clicker-Screen-Shot.jpg")} alt="Jedi Clicker Portfolio" title="Jedi Clicker" onClick={() => toggleImageFunction(imageTwoIsOpen, toggleImageTwo)}/>
          {imageTwoIsOpen ? <JediClicker /> : null}
        </div>
        <div className="portfolioDiv">
          <img className="portfolioImage" src={require("../../images/Elite-MD-Screenshot.jpg")} alt="Elite MD Portfolio" title="Elite MD" />
        </div>
        <div className="portfolioDiv">
          <img className="portfolioImage" src={require("../../images/Murder-Ridge-Screenshot.jpg")} alt="Murder Ridge Portfolio" title="Murder Ridge" />
        </div>
      </div>
    </div>
  );
};