import React, { PropTypes } from 'react'
import styles from './styles.jsx'

const Card = ({image, name}) => {
    return (
        <div className="root">
            <div className="card">
                <div className="card__avatar">
                    <img className="card__avatar__img" src={image} alt={name} />
                </div>

                <div className="card__user">
                    
                </div>

                <div className="card__summary">

                </div>
            </div>

            { styles() }
        </div>
    )
}

export default Card
