import React from "react";

export default class AboutButton extends React.Component {
  render() {
    return (
      <a href="https://linktr.ee/wahidrizka" target="_blank" rel="noreferrer">
        <button className="btn about__button">{this.props.btnLabel}</button>
      </a>
    );
  }
}
