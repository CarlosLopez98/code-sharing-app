import React from "react";
import "./Star.css";

interface StarPropTypes {
  color: string;
  size?: "small" | "medium" | "large";
}

const Star: React.FC<StarPropTypes> = ({ color }) => {
  return (
    <div className="star" style={{ backgroundColor: color, width: "32px" }}>
      <div className="part part-0"></div>
      <div className="part part-1"></div>
      <div className="part part-2"></div>
      <div className="part part-3"></div>
    </div>
  )
}

export default Star;