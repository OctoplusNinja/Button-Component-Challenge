import React, { Component } from "react";
import "./ButtonText.css";

class ButtonText extends Component {
  render() {
    return <p className="btn-text">{this.props.text}</p>;
  }
}

export default ButtonText;
