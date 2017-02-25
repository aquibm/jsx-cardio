import React from 'react'

const lightGreen = '#3CCD94'
const grey = '#333'

const styles = () => (
    <style jsx>{`
        .root {
            margin: 20px 20px;
        }

        .root__button {
            outline: none;
            border: 2px solid ${lightGreen};
            cursor: pointer;
            background: ${lightGreen};
            padding: 15px 40px;
            border-radius: 8px;
            transition: all .5s ease;

            font-size: 14px;
            color: white;
            font-weight: 100;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        .root__button--is-saving {
            background: white;
            color: ${grey};
            border: 2px solid ${grey};
            cursor: default;
        }

        .root__button--is-saved {
            background: white;
            color: ${lightGreen};
            border: 2px solid ${lightGreen};
            cursor: default;
        }
    `}</style>
)

export default styles
