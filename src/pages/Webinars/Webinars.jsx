import React, { Fragment, useEffect, useState } from 'react';
import  Axios  from 'axios';
import BusinessCard from '../../components/BusinessCard/BusinessCard';
import Footer from '../../components/Footer/Footer';

import './Webinars.css'

export default function Webinars() {
    const [webinar, setWebinar] = useState([])


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await Axios({
              url: 'https://cafregoso.com/api/webinars/'
            })
    
            setWebinar(response.data)
          } catch (err) {
            console.error(err)
          }
        }
    
        fetchData()
      }, [setWebinar])


    return (
        <Fragment>
          <h1 className='title-webinar'>WEBINARS</h1>
          <div className='container-webinar'>
            {
                webinar.map(({ id, name, theme, date, image }) => (
                    <BusinessCard 
                        key={ id }
                        name = { name }
                        theme = { theme }
                        date = { date }
                        image = { image }
                    />
                ))
            }
          </div>
          <Footer />
        </Fragment>
    )
}
