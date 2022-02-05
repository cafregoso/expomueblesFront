import React, { useState, useEffect, Fragment } from 'react'
import Axios from 'axios'
import Slide from '../../components/Slide/Slide'

import './Home.css'

import banner1 from '../../banners/Proceso-creativo.webp'
import banner2 from '../../banners/Oficina.webp'
import banner3 from '../../banners/Restaurant.webp'

export default function Home() {
  const [space, setSpace] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios({
          url: 'http://127.0.0.1:8000/api/'
        })

        setSpace(response.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchData()
  }, [setSpace])

  return (
    <Fragment>
      <Slide
        banner1={banner1}
        banner2={banner2}
        banner3={banner3}
      />
      {space != '' &&
        <main className='container-home'>
          <section className='container-image'>
            <div className='container-left'>

              <img src={space[3].image} alt={space[3].name} />

            </div>
            <div className='container-right'>
              <p className='container-pgh'>
                Este espacio fue creado con 2
                intenciones claras: transmitir lo
                aprendido durante 2021 sobre el
                diseño de espacios de trabajo
                PostCovid. Es una zona de reunión,
                capacitación y webinars
                presenciales, con expertos en
                diferentes temas que complementan
                las nuevas formas de trabajo.
                Una espacio versátil, desde la
                selección de mobiliario, hasta la
                integración de una gran sala para
                impartir un platica con alguno de
                nuestros expertos de negocio.
              </p>
            </div>
          </section>

          <section className='container-image'>
            <div className='container-left'>
              <p className='container-pgh'>
                Este espacio muestra cómo nuestro WORKING
                mobiliario se adapta a los nuevos
                entornos de trabajo, que van mas
                allá de un espacio de oficina, es
                claro, que ahora un restaurante, una
                café o una habitación de hotel, son
                espacio de trabajo que seguirán
                evolucionado.
                También, integramos el concepto de
                “Agile Work”, donde exponemos
                sillas con un visión moderna y actual,
                que se adaptan a cualquier estilo y
                diseño interior.
              </p>
            </div>
            <div className='container-right'>

              <img src={space[1].image} alt={space[1].name} />

            </div>
          </section>

          <section className='container-image'>
            <div className='container-left'>

              <img src={space[0].image} alt={space[0].name} />

            </div>
            <div className='container-right'>
              <p className='container-pgh'>
                Tiene como propósito primario,
                mostrar cómo una colección de
                mobiliario exterior, puede
                interactuar con una zona de
                relajación y donde ambas son
                “básicos” al diseñar un layout de un
                espacio de oficina.
                La barra principal también se
                convierte en un “must be” en los
                espacios de oficina, son zonas de
                interacción donde los colaboradores
                pueden reforzar lazos de
                pertenencia con compañeros y la
                empresa en general.
              </p>
            </div>
          </section>

          <section className='container-image'>
            <div className='container-left'>
              <p className='container-pgh'>
                La muestra de innovación,
                tendencias y fortalezas de Grupo
                Requiez.
                De una forma simplificada, a través
                de 5 piezas de mobiliario, mostrando
                sus materiales y procesos
                sustentables, que son
                representativos de nuestras marcas.
              </p>
            </div>
            <div className='container-right'>

              <img src={space[2].image} alt={space[2].name} />

            </div>
          </section>
        </main>
      }
    </Fragment>
  )
}
