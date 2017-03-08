import React, { PropTypes } from 'react'
import styles from './styles'

const Checkout = ({}) => (
    <div className="root">
        <div className="info">
            <h1>Upgrade to Awesome!</h1>

            <p>Unlock more room in your Buffer, extra social accounts and more!</p>

            <h2>$250</h2>
            <p><strong>15% discount</strong> compared to the monthly plan</p>

            <div className="toggle-button">
                <span>Monthly</span>
                <span>Yearly</span>
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
