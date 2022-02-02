import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
// import Slide from '../../components/Slide/Slide'

import './Home.css'


export default function Home() {
  const [space, setSpace] = useState([])

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/`)
      .then(response => {
        setSpace(response.data)
      })
  }, [])

  return (
    <Fragment>
      {
        console.log(space)
      }
      <section className='container'>
        <div className='container-left'>

        </div>
        <div className='container-right'>
          
        </div>
      </section>

      <section className='container'>
        <div className='container-left'>

        </div>
        <div className='container-right'>

        </div>
      </section>

      <section className='container'>
        <div className='container-left'>

        </div>
        <div className='container-right'>

        </div>
      </section>

      <section className='container'>
        <div className='container-left'>

        </div>
        <div className='container-right'>

        </div>
      </section>
    </Fragment>
  )
}
