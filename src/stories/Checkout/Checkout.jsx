import React, { PropTypes } from 'react'
import s from './style.css'

const Checkout = ({}) => (
    <div className={s.root}>
        <div className={s.info}>
            <h1 className={s.infoHeader}>Upgrade to Awesome!</h1>

            <p className={s.infoSummary}>Unlock more room in your Buffer, extra social accounts and more!</p>

            <h2 className={s.infoPricing}>
                <span className={s.infoPricingWrap}>
                    <span className={s.infoPricingCost}>$250</span>
                    <span className={s.infoPricingPeriod}>/yr</span>
                </span>
            </h2>

            <p className={s.infoOffer}><strong>15% discount</strong> compared to the monthly plan.</p>
        </div>

        <div className={s.payment}>
            Noot
        </div>
    </div>
)

export default Checkout
