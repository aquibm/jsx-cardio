import React, { PropTypes } from 'react'
import styles from './styles'

const Checkout = ({}) => (
    <div className="root">
        <div className="info">
            <h1 className="info__header">Upgrade to Awesome!</h1>

            <p className="info__summary">Unlock more room in your Buffer, extra social accounts and more!</p>

            <h2 className="info__pricing">
                <span className="info__pricing__wrap">
                    <span className="info__pricing__cost">$250</span>
                    <span className="info__pricing__period">/yr</span>
                </span>
            </h2>

            <p className="info__offer"><strong>15% discount</strong> compared to the monthly plan.</p>

            <div className="info__toggle-button">
                <ul className="info__toggle-button__list">
                    <li className="info__toggle-button__list-item">Monthly</li>
                    <li className="info__toggle-button__list-item info__toggle-button__list-item--active">Yearly</li>
                </ul>
            </div>
        </div>

        <div className="payment">
            Noot
        </div>

        { styles() }
    </div>
)

Checkout.propTypes = {

}

export default Checkout
