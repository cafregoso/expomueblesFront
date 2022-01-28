import React, { useState, useEffect, Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import Card from '../../components/Card/Card'


export default function Home() {
  const { pathname } = useLocation();
  const [space, setSpace] = useState([])

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/`)
      .then(response => {
          setSpace(response.data)
      })
  })

  return (
    <Fragment>
      {
        space.map(({ id, image, name }) => (
            <Card
                img={image}
            /> 
        ))
      }
    </Fragment>
  )
}