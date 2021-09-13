import React from "react";
import EduTimeline from "./edu.timeline";

export default class Education extends React.Component {
  render() {
    return (
      <div>
        <h1 className="edu__heading">My Education</h1>
        <div className="container__edu">
          <EduTimeline />
        </div>
      </div>
    );
  }
}
