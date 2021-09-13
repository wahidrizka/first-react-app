import React from "react";

export default class ButtonLink extends React.Component {
  render() {
    return(
      <button className="btn btn-link">
        {this.props.btnLabel}
      </button>
    ); 
  }
}