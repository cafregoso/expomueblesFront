import React from 'react';
import { Image } from 'react-bootstrap';

import './BusinessCard.css'

export default function BusinessCard({ name, theme, date, image }) {
  return (
      <section className='webinar-main'>
        <div className='webinar-section'>
          <Image roundedCircle src={ image } alt={ name } className='webinar-image' /> 
          <h2 className='webinar-name'>{ name }</h2>
          <hr className='webinar-hr'/>
          <p className='webinar-theme'>{ theme }</p>
          <p className='webinar-date'>{ date }</p>
        </div>
      </section>
  )
}