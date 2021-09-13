import React from "react";

export default class SkillsItems extends React.Component {
  render() {
    return (
      <div className="skills__items">
        <div className="skills__icon">
          <h1>{this.props.icon}</h1>
        </div>
        <p className="skills_title">{this.props.title}</p>
      </div>
    );
  }
}
