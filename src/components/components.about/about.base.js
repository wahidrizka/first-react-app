import React from "react";
import AboutText from "./about.text";
import AboutButton from "./about.button";
import AboutImage from "../../images/avatar/me.png";

export default class About extends React.Component {
  render() {
    return (
      <div className="container__about">
        <div className="container__about__image">
          <img className="about__image" src={AboutImage} alt="Its me" />
        </div>
        <div className="about__text">
          <AboutText />
        </div>
        <div>
          <AboutButton btnLabel="Send me a messages" />
        </div>
      </div>
    );
  }
}
