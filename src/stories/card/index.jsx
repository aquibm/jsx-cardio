import React, { PropTypes } from 'react'
import s from './style.css'

const Card = ({image, name, summary, onFollow}) => {
    return (
        <div className={s.root}>
            <div className={s.card}>
                <div>
                    <img className={s.avatar} src={image} alt={name} />
                </div>

                <p className={s.name}>{name}</p>

                <p className={s.summary}>{summary}</p>

                <div>
                    <button className={s.button} onClick={onFollow}>Follow</button>
                </div>
            </div>

            <p className={s.credits}>Inspired by <a href="https://dribbble.com/shots/3323652-Card" target="_blank">owl</a></p>
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
