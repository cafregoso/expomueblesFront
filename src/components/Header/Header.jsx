import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container style={{ margin: "0 20px" }}>
        <Navbar.Brand>
          <Link to="/">
            <img
              src={logo}
              alt="Logo Grupo Requiez"
              style={{ width: "200px" }}
            />
          </Link>
        </Navbar.Brand>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#000",
                    fontSize: "1.3rem",
                    fontWeight: "400",
                    margin: "0 20px",
                  }}
                  to="/nosotros"
                >
                  NOSOTROS
                </Link>
              </Nav>
              <Nav>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#000",
                    fontSize: "1.3rem",
                    fontWeight: "400",
                    margin: "0 20px",
                  }}
                  to="/webinars"
                >
                  WEBINARS
                </Link>
              </Nav>
              <Nav>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#000",
                    fontSize: "1.3rem",
                    fontWeight: "400",
                    margin: "0 20px",
                  }}
                  to="/creativo"
                >
                  PROCESO CREATIVO
                </Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}
