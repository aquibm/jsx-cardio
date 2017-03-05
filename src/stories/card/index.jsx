import React, { PropTypes } from 'react'
import styles from './styles.jsx'

const Card = ({image, name, summary, onFollow}) => {
    return (
        <div className="root">
            <div className="card">
                <div>
                    <img className="card__avatar" src={image} alt={name} />
                </div>

                <p className="card__user">{name}</p>

                <p className="card__summary">{summary}</p>

                <div>
                    <button className="card__action" onClick={onFollow}>Follow</button>
                </div>
            </div>

            { styles() }
        </div>
    )
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    onFollow: PropTypes.func.isRequired
}

export default Card
