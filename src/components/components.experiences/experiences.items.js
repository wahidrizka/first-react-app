import React from "react";

export default class ExperiencesItems extends React.Component {
  render() {
    return (
      <section>
        <li class="experiences__item">
          <div class="experiences__top">
            <div class="experiences__circle">{this.props.date}</div>
            <div class="experiences__title">{this.props.title}</div>
          </div>
          <div class="experiences__company">{this.props.company}</div>
          <div class="experiences__desc">{this.props.description}</div>
        </li>
      </section>
    );
  }
}
