import React from "react";

export default class AwardsItem extends React.Component {
  render() {
    return (
      <div className="awards__items">
        <div className="awards__img">
          <img src={this.props.source} alt={this.props.alt} />
        </div>
        <p className="awards_title">{this.props.title}</p>
      </div>
    );
  }
}