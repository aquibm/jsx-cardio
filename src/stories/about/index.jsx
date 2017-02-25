import React from 'react';

const About = ({}) => (
    <div className="root">
        <h1>JSX Cardio</h1>
        <p>Built so I can practice jsx &amp; experiment with different ways to style components.</p>

        <style jsx>{`
            .root {
                font-family: 'Helvetica Neue', Roboto, 'Segoe UI', Arial, sans-serif;
            }
        `}</style>
    </div>
)

export default About
