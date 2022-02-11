import React from "react";
import { Link } from "react-router-dom";

import "./SpaceRight.css";

export default function SpaceRight({ id, name, image, info, color }) {
  return (
    <div className="space-containerR">
      <div className="space-textR" style={{ backgroundColor: color }}>
        <p
          className="container-pghR"
          style={{ color: name === "gp-values" ? "#394653" : "#d6d4d3" }}
        >
          {info}
        </p>
      </div>
      {id ? (
        <Link to={`/productos/${id}`}>
          <div className="space-imageR">
            <img src={image} alt={name} />
          </div>
        </Link>
      ) : (
        <div className="space-imageR">
          <img src={image} alt={name} />
        </div>
      )}
    </div>
  );
}
