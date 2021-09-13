import React from "react";
import ExperiencesTimeline from "./experiences.timeline";

export default class Experiences extends React.Component {
  render() {
    return (
      <div>
        <h1 className="experiences__heading">My Experiences</h1>
        <div className="container__experiences">
          <ExperiencesTimeline />
        </div>
      </div>
    );
  }
}
