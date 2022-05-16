import React, { Component } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import "./Button.css";

class Button extends Component {
  render() {
    let textValue = "Default";
    let classes = ["btn"];
    let color = "primary";

    if (this.props.disabled) {
      textValue = "Disabled";
      classes.push("disabled");
    }
    if (this.props.disableShadow) {
      classes.push("disableShadow");
    }
    if (this.props.varient === "outline") {
      classes.push("outline");
    }
    if (this.props.varient === "text") {
      classes.push("text");
    }

    if (
      this.props.startIcon != null &&
      this.props.startIcon === "local_grocery_store"
    ) {
      classes.push("icon primary");
      classes = classes.join(" ");
      return (
        <button className={classes}>
          <MdAddShoppingCart /> {textValue}
        </button>
      );
    }

    if (
      this.props.endIcon != null &&
      this.props.endIcon === "local_grocery_store"
    ) {
      classes.push("icon primary");
      classes = classes.join(" ");
      return (
        <button className={classes}>
          {textValue}
          <MdAddShoppingCart />
        </button>
      );
    }

    if (this.props.color != null) {
      if (this.props.color !== "default") {
        color = this.props.color;
        classes.push(color);
      }
    }
    if (this.props.size != null) {
      classes.push(this.props.size);
      if (!("primary" in classes)) {
        classes.push("primary");
      }
    }
    classes = classes.join(" ");
    return <button className={classes}>{textValue}</button>;
  }
}

export default Button;
