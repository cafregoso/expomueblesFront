import React, { Fragment } from 'react';
import Banner from '../../components/Banner/Banner'
import Space from '../../components/Space/Space';
import Footer from '../../components/Footer/Footer';

// Images
import banner from '../../banners/creativo.webp'
import image from '../../banners/plano.webp'
import product from '../../banners/Boceto.webp'
import Gallery from '../../components/Gallery/Gallery';

// Galery
import image1 from '../../banners/galery/1.webp'
import image2 from '../../banners/galery/2.webp'
import image3 from '../../banners/galery/3.webp'
import image4 from '../../banners/galery/4.webp'

import './Creative.css'

export default function Creative() {
  return (
      <Fragment>
          <Banner img = { banner } />
          <Space 
            name = 'Banner Proceso Creativo'
            image = { image }
            info = '“Siempre deberíamos diseñar una cosa considerándola en su próximo contexto más amplio: una silla en una habitación, una habitación en una casa, una casa en un entorno, un entorno en una ciudad.”'
            color = '#3c6756'
          />
          <section className="us-info_creative">
            <img src={ product } alt='banco' className='us-info_img_creative' />
            <div className="us-text_creative">
              <p>
                Trabajar, viajar y pasar tiempo juntos en el campus, juega un papel importante en la cultura de ciertas organizaciones.
              </p>
              <p>
                En estos casos, el campus es más que una oficina: es el hogar de la empresa, una manifestación física de su identidad y valores. Dichos sitios pueden incluir clubes, áreas de trabajo de proyectos y opciones de trabajo enfocado, junto con instalaciones de producción, comedores, guarderías, jardines, lugares de conferencias, áreas de bienvenida e instalaciones para la salud y el bienestar.
              </p>
            </div>
          </section>
          <section className='creative-gallery'>
              <div className='creative_gallery-cont'>
                <Gallery
                    banner1={ image1 }
                    banner2={ image2 }
                    banner3={ image3 }
                    banner4={ image4 }
                />
              </div>
          </section>
          <Footer />
      </Fragment>
  )
}
