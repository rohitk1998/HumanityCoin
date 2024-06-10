import React from "react";
import roadmap from "../Assets/Images/roadmap.png";
import "./Roadmap.scss";
export default function Roadmap() {
  return (
    <div className="roadmap">
      <h2>Roadmap</h2>
      <p>
        Constitution of the <span>PARADISIAT</span> community throughout the
        world
      </p>
      <div className="roadmapinner">
        <img src={roadmap} alt="imgs" />
      </div>
    </div>
  );
}
