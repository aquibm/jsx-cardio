import React from 'react'

const Styles = () => (
    <style jsx>{`
        .root {
            min-width: 650px;
            min-height: 350px;
            display: flex;
            flex-direction: row;

            background: white;
            border-radius: 10px;
            box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.1);
        }

        .info {
            background: #2A93E3;
            color: white;
            flex-basis: 50%;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            padding: 20px;
        }

            .info__header {
                font-size: 24px;
                font-weight: 400;
                text-align: center;
                letter-spacing: 2px;
                text-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.1);
            }

            .info__summary {
                padding: 0px 20px;
                text-align: center;
                font-size: 14px;
                color: rgba(255, 255, 255, 0.5);
            }

            .info__pricing {
                text-align: center;
                margin-top: 40px;
            }

                .info__pricing__wrap {
                    background: #0F456F;
                    padding: 15px 20px;
                    border-radius: 4px;
                }

                .info__pricing__cost {
                    font-size: 24px;
                    font-weight: 400;
                }

                .info__pricing__period {
                    font-size: 14px;
                    font-weight: 100;
                    color: rgba(255, 255, 255, 0.8);
                    margin-left: 2px;
                }

            .info__offer {
                color: #0F456F;
                text-align: center;
                font-size: 14px;
                font-weight: 100;
                padding: 0 40px;
            }

            .info__toggle-button {
                
            }

                .info__toggle-button__list {
                    margin: 0;
                    list-style: none;
                }

                .info__toggle-button__list-item {
                    float: left;
                }
                
        .payment {
            background: white;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;

            flex-basis: 50%;
            display: flex;
            flex-direction: column;
            padding: 20px;
        }
    `}</style>
)

export default Styles
