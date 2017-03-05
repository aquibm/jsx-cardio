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
            padding: 30px;
            max-width: 200px;
            max-height: 300px;

            border: 1px solid #efefef;
            box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.05);

            text-align: center;
        }

        .card__avatar {
            border-radius: 50%;
        }

        p.card__user {
            margin: 30px 0 0 0;
            color: #666;
            font-size: 1.2em;
            letter-spacing: 1.2px;
            font-weight: lighter;
        }

        p.card__summary {
            margin: 30px 0;
            color: #999;
            letter-spacing: 1.2px;
            font-weight: lighter;
        }

        .card__action {
            min-width: 80%;
            background: #70B1FC;
            padding: 10px 20px;
            border: 0;
            outline: none;
            border-radius: 20px;
            box-shadow: 0px 5px 10px 0px rgba(112, 177, 252, .3);

            color: #fefefe;
            letter-spacing: 2px;
            text-transform: uppercase;
            font-weight: 100;
            font-size: .8em;

            cursor: pointer;
            transition: all .25s ease;
        }

            .card__action:hover {
                background: #5da3f5;
            }
    `}</style>
)

export default Styles
