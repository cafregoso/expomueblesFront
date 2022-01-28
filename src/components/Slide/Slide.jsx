import React from 'react'
import { Carousel } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

const styles = {
    img: {
        width: '100%',
    }
}

export default function Slide({ banner1, banner2, banner3 }) {
    return (
        <Carousel
            nextIcon={''}
            prevIcon={''}
            nextLabel={''}
            prevLabel={''}
        >
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
        </Carousel>
    )
}
