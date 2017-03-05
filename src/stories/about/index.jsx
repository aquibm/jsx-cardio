import React from 'react';

const About = ({}) => (
    <div className="root">
        <h1 className="title">JSX Cardio</h1>

        <style jsx>{`
            .root {
                font-family: 'Helvetica Neue', Roboto, 'Segoe UI', Arial, sans-serif;
                margin: 50px;
            }

            .title {
                color: #333;
                font-weight: 100;
                text-transform: uppercase;
            }
        `}</style>
    </div>
)

export default About
