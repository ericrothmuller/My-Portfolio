import React, { useState } from "react";
import "../../Style.css";
import CocktailConcoctor from "./portfolioItems/CocktailConcoctor";
import JediClicker from "./portfolioItems/JediClicker";
import EliteMd from "./portfolioItems/EliteMd";
import MurderRidge from "./portfolioItems/MurderRidge";
import WeatherDashboard from "./portfolioItems/WeatherDashboard";
import JavaScriptCodeChallenge from "./portfolioItems/JavaScriptCodeChallenge";
import FlyingGoatCoffee from "./portfolioItems/FlyingGoatCoffee";
import AppliedSigns from "./portfolioItems/AppliedSigns";
import FureverYours from "./portfolioItems/FureverYours";
import WorkDayScheduler from "./portfolioItems/WorkDayScheduler";
import SonomaCrust from "./portfolioItems/SonomaCrust";
import FlakeyCream from "./portfolioItems/FlakeyCream";
import FourSeasons from "./portfolioItems/FourSeasons";
import ImageAthletic from "./portfolioItems/ImageAthletic";

const centerP = {
  textAlign: "center",
};

const spaceTop = {
  paddingTop: "15px",
  fontWeight: "700",
};

const spaceMiddle = {
  paddingTop: "15px",
  paddingBottom: "15px",
};

const spaceBottom = {
  paddingBottom: "25px",
};

export default function Portfolio() {
  const [imageOneIsOpen, toggleimageOneIsOpen] = useState(false);
  const [imageTwoIsOpen, toggleImageTwo] = useState(false);
  const [imageThreeIsOpen, toggleImageThree] = useState(false);
  const [imageFourIsOpen, toggleImageFour] = useState(false);
  const [imageFiveIsOpen, toggleImageFive] = useState(false);
  const [imageSixIsOpen, toggleImageSix] = useState(false);
  const [imageSevenIsOpen, toggleImageSeven] = useState(false);
  const [imageEightIsOpen, toggleImageEight] = useState(false);
  const [imageNineIsOpen, toggleImageNine] = useState(false);
  const [imageTenIsOpen, toggleImageTen] = useState(false);
  const [imageElevenIsOpen, toggleImageEleven] = useState(false);
  const [imageTwelveIsOpen, toggleImageTwelve] = useState(false);
  const [imageThirteenIsOpen, toggleImageThirteen] = useState(false);
  const [imageFourteenIsOpen, toggleImageFourteen] = useState(false);

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
        <div className="row">
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
              onClick={() =>
                toggleImageFunction(imageTwoIsOpen, toggleImageTwo)
              }
            />
            {imageTwoIsOpen ? <JediClicker /> : null}
          </div>
        </div>
        <div className="row">
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
              alt="Murder Ridge Winery Portfolio"
              title="Murder Ridge Winery"
              onClick={() =>
                toggleImageFunction(imageFourIsOpen, toggleImageFour)
              }
            />
            {imageFourIsOpen ? <MurderRidge /> : null}
          </div>
        </div>
        <div className="row">
          <div className="portfolioDiv">
            <img
              className="portfolioImage"
              src={require("../../images/Weather-Dashboard-Screenshot.jpg")}
              alt="Weather Dashboard Portfolio"
              title="Weather Dashboard"
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
              alt="JavaScript Code Challenge Portfolio"
              title="JavaScript Code Challenge"
              onClick={() =>
                toggleImageFunction(imageSixIsOpen, toggleImageSix)
              }
            />
            {imageSixIsOpen ? <JavaScriptCodeChallenge /> : null}
          </div>
        </div>
        <div className="row">
          <div className="portfolioDiv">
            <img
              className="portfolioImage"
              src={require("../../images/Flying-Goat-Screenshot.jpg")}
              alt="Flying Goat Coffee Portfolio"
              title="Flying Goat Coffee"
              onClick={() =>
                toggleImageFunction(imageSevenIsOpen, toggleImageSeven)
              }
            />
            {imageSevenIsOpen ? <FlyingGoatCoffee /> : null}
          </div>
          <div className="portfolioDiv">
            <img
              className="portfolioImage"
              src={require("../../images/Applied-Signs-Screenshot.jpg")}
              alt="Applied Signs Portfolio"
              title="Applied Signs"
              onClick={() =>
                toggleImageFunction(imageEightIsOpen, toggleImageEight)
              }
            />
            {imageEightIsOpen ? <AppliedSigns /> : null}
          </div>
        </div>
        <div className="row">
          <div className="portfolioDiv">
            <img
              className="portfolioImage"
              src={require("../../images/Furever-Yours-Screenshot.jpg")}
              alt="Furever Yours Portfolio"
              title="Furever Yours"
              onClick={() =>
                toggleImageFunction(imageNineIsOpen, toggleImageNine)
              }
            />
            {imageNineIsOpen ? <FureverYours /> : null}
          </div>
          <div className="portfolioDiv">
            <img
              className="portfolioImage"
              src={require("../../images/Work-Day-Scheduler-Screenshot.jpg")}
              alt="Work Day Scheduler Portfolio"
              title="Work Day Scheduler"
              onClick={() =>
                toggleImageFunction(imageTenIsOpen, toggleImageTen)
              }
            />
            {imageTenIsOpen ? <WorkDayScheduler /> : null}
          </div>
        </div>
        <div className="row">
          <div className="portfolioDiv">
            <img
              className="portfolioImage"
              src={require("../../images/Sonoma-Crust-Screenshot.jpg")}
              alt="Sonoma Crust Portfolio"
              title="Sonoma Crust"
              onClick={() =>
                toggleImageFunction(imageElevenIsOpen, toggleImageEleven)
              }
            />
            {imageElevenIsOpen ? <SonomaCrust /> : null}
          </div>
          <div className="portfolioDiv">
            <img
              className="portfolioImage"
              src={require("../../images/Flakey-Cream-Screenshot.jpg")}
              alt="Flakey Cream Portfolio"
              title="Flakey Cream"
              onClick={() =>
                toggleImageFunction(imageTwelveIsOpen, toggleImageTwelve)
              }
            />
            {imageTwelveIsOpen ? <FlakeyCream /> : null}
          </div>
        </div>
        <div className="row">
          <div className="portfolioDiv">
            <img
              className="portfolioImage"
              src={require("../../images/Four-Seasons-Vineyard-Management-Screenshot.jpg")}
              alt="Four Seasons Vineyard Management Portfolio"
              title="Four Seasons Vineyard Management"
              onClick={() =>
                toggleImageFunction(imageThirteenIsOpen, toggleImageThirteen)
              }
            />
            {imageThirteenIsOpen ? <FourSeasons /> : null}
          </div>
          <div className="portfolioDiv">
            <img
              className="portfolioImage"
              src={require("../../images/Image-Athletic-Screenshot.jpg")}
              alt="Image Athletic Portfolio"
              title="Image Athletic"
              onClick={() =>
                toggleImageFunction(imageFourteenIsOpen, toggleImageFourteen)
              }
            />
            {imageFourteenIsOpen ? <ImageAthletic /> : null}
          </div>
        </div>
        <p style={spaceTop}>Note:</p>
        <p style={spaceMiddle}>
          This is just a portion of the items I've made to give you an idea of
          the type of work I've done. This is not all of the items I've created.
        </p>
        <p style={spaceBottom}>
          This portfolio website was created using React.
        </p>
      </div>
    </div>
  );
}
