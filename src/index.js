import React, { Component } from "react";
import ReactDOM from "react-dom";
import Project from "./Project";
import SocialProfiles from "./SocialProfiles";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <Project />

        <hr />

        <SocialProfiles />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
