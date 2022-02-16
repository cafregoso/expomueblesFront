import React, { Fragment } from 'react';
import Banner from '../../components/Banner/Banner'
import Space from '../../components/Space/Space';
import Footer from '../../components/Footer/Footer';

// Images
import banner from '../../banners/us.webp'
import product from '../../banners/Nosotros_2.webp'
import image from '../../banners/Nosotros.webp'

// Logos
import infiniti from '../../assets/Infiniti.webp'
import labenze from '../../assets/Labenze.webp'
import okamura from '../../assets/Okamura.webp'
import quadrifoglio from '../../assets/Quadrifoglio.webp'
import requiez from '../../assets/Requiez.webp'

import './Us.css'

export default function Us() {
  return (
      <Fragment>
          <Banner img = { banner } />
          <Space 
            name = 'Banner Nosotros'
            image = { image }
            info = 'Nacido en Guadalajara, Jalisco, desde 1985, Grupo Requiez colabora en la generación de experiencias, ofreciendo una gama de productos dotados de alta calidad, diseño y tecnología diseñados para ayudar a las personas a alcanzar su máximo potencial y cubrir cada necesidad de uso y funcionalidad en diversos espacios y ambientes de trabajo.'
            color = '#3c6756'
          />
          <section className="us-info">
            <img src={ product } alt='banco' className='us-info_img' />
            <div className="us-text">
              <p>
                Nuestro portafolio completo está integrado por cinco líneas y cientos de configuraciones para personalizar cada experiencia.
              </p>
              <p>
                Además de estar comprometidos con la calidad en los procesos y servicios, y en especial con la salud de los usuarios al ofrecer productos ergonómicos, también estamos comprometidos con el cuidado del planeta, utilizando materiales e insumos amigables con el medio ambiente, reciclados y reciclables.
              </p>
            </div>
          </section>
          <section>
            <div className='us-marcas'>
              <h2 className='us-marcas_title'>NUESTRAS MARCAS</h2>
              <hr className='us-marcas_hr' />
            </div>
            <div className="us-marcas_logos">
              <a href='https://requiez.com' target='_blank' rel='noreferrer'>
                <img src={ requiez } alt='Requiez Logo' />
              </a>
              <a href='https://infinitidesignmexico.com/es' target='_blank' rel='noreferrer'>
                <img src={ infiniti } alt='Infiniti Logo' />
              </a>
              <a href='https://labenze.com' target='_blank' rel='noreferrer'>
                <img src={ labenze } alt='Labenze Logo' />
              </a>
              <a href='https://quadrifoglio.com.mx' target='_blank' rel='noreferrer'>
                <img src={ quadrifoglio } alt='Quadrifoglio Logo' />
              </a>
              <a href='https://okamuramexico.com' target='_blank' rel='noreferrer'>
                <img src={ okamura } alt='Okamura Logo' />
              </a>
            </div>
          </section>
          <Footer />
      </Fragment>
  )
}
