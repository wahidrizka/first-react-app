import React from "react";

export default class ExperiencesItems extends React.Component {
  render() {
    return (
      <section>
        <li className="experiences__item">
          <div className="experiences__top">
            <div className="experiences__circle">{this.props.date}</div>
            <div className="experiences__title">{this.props.title}</div>
          </div>
          <div className="experiences__company">{this.props.company}</div>
          <div className="experiences__desc">{this.props.description}</div>
        </li>
      </section>
    );
  }
}
