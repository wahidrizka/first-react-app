import React from "react";

export default class SocialIcon extends React.Component {
  render() {
    return (
      <a href={this.props.link} target="_blank">
        <button className="btn-icon">{this.props.btnIcon}</button>
      </a>
    );
  }
}
