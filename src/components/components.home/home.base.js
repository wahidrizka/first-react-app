import React from "react";
import HomeImage from "../../images/avatar/me.png";
import HomeText from "./home.text";

export default class Home extends React.Component {
  render() {
    return (
      <div className="container__home">
        <div className="container__home__image">
          <img className="home__image" src={HomeImage} alt="Its me" />
        </div>
        <div className="home__text">
            <HomeText />
        </div>
        <div>
        </div>
      </div>
    );
  }
}