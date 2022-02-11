import React from "react";
import { Link } from "react-router-dom";

import "./Space.css";

export default function Space({ id, name, image, info, color }) {
  return (
    <div className="space-container">
      { id ? 
        <Link to={`/productos/${id}`}>
          <div className="space-image">
            <img src={image} alt={name} />
          </div>
        </Link> : 
        <div className="space-image">
          <img src={image} alt={name} />
        </div>
      }
      <div className="space-text" style={{ backgroundColor: color }}>
        <p
          className="container-pgh"
          style={{ color: name === "gp-values" ? "#394653" : "#d6d4d3" }}
        >
          {info}
        </p>
      </div>
    </div>
  );
}
