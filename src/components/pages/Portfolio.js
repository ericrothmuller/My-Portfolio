import React, { useState } from "react";
import "../../Style.css";
import CocktailConcoctor from "./portfolioItems/CocktailConcoctor";
import JediClicker from "./portfolioItems/JediClicker";
import EliteMd from "./portfolioItems/EliteMd";
import MurderRidge from "./portfolioItems/MurderRidge";
import WeatherDashboard from "./portfolioItems/WeatherDashboard";
import JavaScriptCodeChallenge from "./portfolioItems/JavaScriptCodeChallenge";

const centerP = {
  textAlign: "center",
};

export default function Portfolio() {
  const [imageOneIsOpen, toggleimageOneIsOpen] = useState(false);
  const [imageTwoIsOpen, toggleImageTwo] = useState(false);
  const [imageThreeIsOpen, toggleImageThree] = useState(false);
  const [imageFourIsOpen, toggleImageFour] = useState(false);
  const [imageFiveIsOpen, toggleImageFive] = useState(false);
  const [imageSixIsOpen, toggleImageSix] = useState(false);

  const toggleImageFunction = (state, setState) => {
    if (state === false) {
      setState(true);
    } else {
      setState(false);
    }
  };

  return (
    <div className="animate__animated animate__fadeIn">
      <h1>My Portfolio</h1>
      <p style={centerP}>
        Here is a list of some of the projects I've worked on. You can click on
        each image for more information on each project.
      </p>
      <div className="cardsDiv">
        <div className="portfolioDiv">
          <img
            className="portfolioImage"
            src={require("../../images/Cocktail-Concoctor-Screen-Shot.jpg")}
            alt="Cocktail Concocter Portfolio"
            title="Cocktail Concocter"
            onClick={() =>
              toggleImageFunction(imageOneIsOpen, toggleimageOneIsOpen)
            }
          />
          {imageOneIsOpen ? <CocktailConcoctor /> : null}
        </div>
        <div className="portfolioDiv">
          <img
            className="portfolioImage"
            src={require("../../images/Jedi-Clicker-Screen-Shot.jpg")}
            alt="Jedi Clicker Portfolio"
            title="Jedi Clicker"
            onClick={() => toggleImageFunction(imageTwoIsOpen, toggleImageTwo)}
          />
          {imageTwoIsOpen ? <JediClicker /> : null}
        </div>
        <div className="portfolioDiv">
          <img
            className="portfolioImage"
            src={require("../../images/Elite-MD-Screenshot.jpg")}
            alt="Elite MD Portfolio"
            title="Elite MD"
            onClick={() =>
              toggleImageFunction(imageThreeIsOpen, toggleImageThree)
            }
          />
          {imageThreeIsOpen ? <EliteMd /> : null}
        </div>
        <div className="portfolioDiv">
          <img
            className="portfolioImage"
            src={require("../../images/Murder-Ridge-Screenshot.jpg")}
            alt="Murder Ridge Portfolio"
            title="Murder Ridge"
            onClick={() =>
              toggleImageFunction(imageFourIsOpen, toggleImageFour)
            }
          />
          {imageFourIsOpen ? <MurderRidge /> : null}
        </div>
        <div className="portfolioDiv">
          <img
            className="portfolioImage"
            src={require("../../images/Weather-Dashboard-Screenshot.jpg")}
            alt="Murder Ridge Portfolio"
            title="Murder Ridge"
            onClick={() =>
              toggleImageFunction(imageFiveIsOpen, toggleImageFive)
            }
          />
          {imageFiveIsOpen ? <WeatherDashboard /> : null}
        </div>
        <div className="portfolioDiv">
          <img
            className="portfolioImage"
            src={require("../../images/JavaScript-Code-Challenge-Screenshot.jpg")}
            alt="Murder Ridge Portfolio"
            title="Murder Ridge"
            onClick={() => toggleImageFunction(imageSixIsOpen, toggleImageSix)}
          />
          {imageSixIsOpen ? <JavaScriptCodeChallenge /> : null}
        </div>
      </div>
    </div>
  );
}
