import React from "react";
import InterestsItems from "./interests.items";
import {
  DiDigitalOcean,
  DiPython,
  DiReact,
  DiNodejs,
  DiJenkins,
  DiAndroid,
} from "react-icons/di";

export default class Interests extends React.Component {
  render() {
    return (
      <div>
        <h1 className="interests__heading">My Interests</h1>
        <div className="container__interests">
          <InterestsItems icon={<DiDigitalOcean />} title="Cloud Engineer" />
          <InterestsItems icon={<DiReact />} title="Front-end" />
          <InterestsItems icon={<DiNodejs />} title="Back-end" />
          <InterestsItems icon={<DiJenkins />} title="DevOps" />
          <InterestsItems icon={<DiAndroid />} title="Android" />
          <InterestsItems icon={<DiPython />} title="Machine Learning" />
        </div>
      </div>
    );
  }
}
