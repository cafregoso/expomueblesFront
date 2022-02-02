import React from 'react'
import { Carousel } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

const styles = {
    img: {
        width: '80%',
    }
}

export default function Slide({ data }) {
    return (
        <Carousel>
            {
                data.map(({ id, image, name }) => (
                    <Carousel.Item key={ id }>
                        <img
                            style={ styles.img }
                            src={ image }
                            alt={ name }
                        />
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )
}
