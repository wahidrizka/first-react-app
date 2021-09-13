import React from "react";
import MyAvatar from "../../images/avatar/me.png";

export default class Avatar extends React.Component {
  render() {
    return (
      <div className="avatar">
        <img className="avatar__image" src={MyAvatar} alt="Its me" />
      </div>
    );
  }
}
