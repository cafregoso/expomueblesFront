import React from 'react'

import './Banner.css'

export default function Banner({ img }) {
    return (
        <div className="banner__container">
            <img className="banner__image" src={ img } alt="banner" />
        </div>
    )
}
