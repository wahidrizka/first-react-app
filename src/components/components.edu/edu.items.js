import React from "react";

export default class EduItems extends React.Component {
  render(){
    return (
      <section>
          <li className="edu__item">
            <div className="edu__top">
              <div className="edu__circle">{this.props.date}</div>
              <div className="edu__title">{this.props.school}</div>
            </div>
            <div className="edu__company">{this.props.major}</div>
            <div className="edu__desc">{this.props.description}</div>
          </li>
      </section>
    );
  }
}