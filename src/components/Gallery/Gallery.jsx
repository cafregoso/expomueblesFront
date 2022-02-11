import React from 'react'
import { Carousel } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

const styles = {
    img: {
        width: '100%',
        maxWidth: '1500px',
    },
    container: {
        width: '100%',
        display: 'grid',
        placeItems: 'center',
        padding: '10px',
    }
}

export default function Slide({ banner1, banner2, banner3, banner4 }) {
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
                        alt="Banner 1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={ styles.img }
                        src={ banner3 }
                        alt="Banner 1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={ styles.img }
                        src={ banner4 }
                        alt="Banner 4"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
