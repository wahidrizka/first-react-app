import React from "react";

export default class EduItems extends React.Component {
  render(){
    return (
      <section>
          <li class="edu__item">
            <div class="edu__top">
              <div class="edu__circle">{this.props.date}</div>
              <div class="edu__title">{this.props.school}</div>
            </div>
            <div class="edu__company">{this.props.major}</div>
            <div class="edu__desc">{this.props.description}</div>
          </li>
      </section>
    );
  }
}