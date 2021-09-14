import React from "react";
import AwardsItem from "./awards.item";
import bangkit from "../../images/awards/bangkit.png";
import ndsc from "../../images/awards/ndsc.png";
import amicta from "../../images/awards/amicta.png";

export default class Awards extends React.Component {
  render() {
    return (
      <div>
        <h1 className="awards__heading">Awards</h1>
        <div className="container__awards">
          <AwardsItem source={bangkit} alt="Bangkit 2021" />
          <AwardsItem source={ndsc} alt="NDSC" />
          <AwardsItem source={amicta} alt="AMICTA" />
        </div>
      </div>
    );
  }
}
