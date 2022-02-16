import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="coryright">
        <p>
          Copyright ©2022 All rights reserved | <br /> Grupo Requiez
        </p>
      </div>
      <div className="contact-info">
        <h3>CONTACTO</h3>
        <p className="contact-mail">
          <a href="mailto:hola@gruporequiez.com">hola@gruporequiez.com</a>
        </p>
        <p className="contact-phone">
          <a href="tel:3338337788">+52 (33) 3833 7788</a>
        </p>
      </div>
      <div className="social">
        <div>
        <a
          href="https://www.facebook.com/Requiez.Oficina/"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon
            style={{
              fontSize: "50px",
              cursor: "pointer",
              color: "#fff",
              marginRight: "30px",
            }}
            className='footer-icon'
            />
        </a>
        <a
          href="https://www.instagram.com/requiez.sillas/"
          target="_blank"
          rel="noreferrer"
          >
          <InstagramIcon
            style={{
              fontSize: "50px",
              cursor: "pointer",
              color: "#fff",
              marginRight: "30px",
            }}
            className='footer-icon'
          />
        </a>
        </div>
      </div>
    </footer>
  );
}
