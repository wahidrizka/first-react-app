import React from "react";

export default class InterestsItems extends React.Component {
  render() {
    return (
      <div className="interests__items">
        <div className="interests__icon">
          <h1>{this.props.icon}</h1>
        </div>
        <p className="interests_title">{this.props.title}</p>
      </div>
    );
  }
}
