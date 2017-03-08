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
