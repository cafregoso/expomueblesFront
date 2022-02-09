import React from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Space.css";

export default function Space({ id, name, image, info, color }) {
  return (
    <div className="space-container">
      <Link to={`/productos/${id}`}>
        <div className="space-image">
          <img src={image} alt={name} />
        </div>
      </Link>
      <div className="space-text" style={{ backgroundColor: color }}>
        <p
          className="container-pgh"
          style={{ color: name === "gp-values" ? "#394653" : "#d6d4d3" }}
        >
          {info}
        </p>
        <Accordion className="accordion-space">
          <Accordion.Item className="accordion-item" eventKey="0">
            <Accordion.Header className="accordion-header">
              Más información
            </Accordion.Header>
            <Accordion.Body className="accordion-body">{info}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
