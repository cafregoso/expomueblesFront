import React, { Fragment } from 'react'

import './Card.css'

const styles = {
    title: {
        display: 'flex',
        justifyContent: 'center',
    },
    image: {
        width: '300px',
        borderRadius: '4px',
        margin: '10px'
    },
}

export default function Card({ img, name }) {

    return (
        <Fragment>
            <img className="card__image" style={styles.image} src={img} alt={name} />
            {
                name && <h3 style={styles.title}>{name}</h3>
            }
        </Fragment>
    )
}