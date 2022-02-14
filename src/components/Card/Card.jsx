import React from 'react'

import './Card.css'

const styles = {
    title: {
        display: 'flex',
        justifyContent: 'right',
        width: '100%',
        paddingRight: '10px',
    },
    image: {
        width: '100%',
        borderRadius: '4px',
        padding: '10px',
    },
}

export default function Card({ img, name }) {

    return (
        <div className='card-container'>
            <img className="card__image" style={styles.image} src={img} alt={name} />
            {
                name && <h3 style={styles.title}>{name}</h3>
            }
        </div>
    )
}