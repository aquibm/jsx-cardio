import React from 'react'

const Styles = () => (
    <style jsx>{`
        .root {
            margin: 50px;
        }

        .card {
            display: flex;
            flex-direction: column;
            background: white;
            padding: 20px;
            min-width: 200px;
            min-height: 250px;

            border: 1px solid #efefef;
            box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.05);
        }

            .card__avatar {
                text-align: center;
            }

                .card__avatar__img {
                    border-radius: 50%;
                }
    `}</style>
)

export default Styles
