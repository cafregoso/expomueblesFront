import React from 'react'
import { Carousel } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

const styles = {
    img: {
        width: '100%',
        maxWidth: '1700px',
    },
    container: {
        width: '100%',
        display: 'grid',
        placeItems: 'center',
        padding: '10px',
    }
}

export default function Gallery({ banner1, banner2, banner3 }) {
    return (
        <div style={ styles.container }>
            <Carousel >
                <Carousel.Item>
                    <img
                        style={ styles.img }
                        src={ banner1 }
                        alt="Banner 1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={ styles.img }
                        src={ banner2 }
                        alt="Banner 2"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={ styles.img }
                        src={ banner3 }
                        alt="Banner 3"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
