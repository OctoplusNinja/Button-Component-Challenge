import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <p className="footer">
        Created by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://devchallenges.io/portfolio/OctoplusNinja"
        >
          @OctoplusNinja
        </a>{" "}
        - devChallenges.io
      </p>
    );
  }
}

export default Footer;
