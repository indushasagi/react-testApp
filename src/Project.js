import React, { Component } from "react";
import PROJECTS from "./data/project";

class Project extends Component {
  render() {
    return (
      <div>
        <h2>Highlighted Projects</h2>
        <div>
          {PROJECTS.map(PROJECT => {
            return <div key={PROJECT.id}>{PROJECT.title}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default Project;
