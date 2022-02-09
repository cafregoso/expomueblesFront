import React from 'react';

import './Footer.css'

export default function Footer() {
  return (
      <footer>
          <div className='coryright'>
            <p>Copyright ©2021 All rights reserved | <br/> Grupo Requiez</p>
          </div>
          <div className='contact-info'>
              <h3>CONTACTO</h3>
            <p className='contact-mail'>
                <a href='mailto:hola@gruporequiez.com'>hola@gruporequiez.com</a>
            </p>
            <p className='contact-phone'>
                <a href='tel:3338337788'>+52 (33) 3833 7788</a>
            </p>
          </div>
      </footer>
  )
}
