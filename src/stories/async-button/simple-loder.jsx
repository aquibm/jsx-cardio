import React, { PropTypes } from 'react'

class SimpleLoader extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            frame: 1
        }
    }

    componentDidMount() {
        this._interval = setInterval(() => {

            this.setState({
                frame: (this.state.frame + 1) % (this.props.numDots + 1)
            })

        }, this.props.interval)
    }

    componentWillUnmount() {
        clearInterval(this._interval)
    }

    // TODO(AM): Refactor this... Jesus.
    render() {
        const numDots = this.state.frame + 1
        const dots = Array(numDots).join('.')

        const numBlanks = (this.props.numDots - this.state.frame + 1) + 1
        const blanks = Array(numBlanks).join('\u00a0')
        
        return <span>{dots}{blanks}</span>
    }
}

SimpleLoader.defaultProps = {
    interval: 250,
    numDots: 3
}

SimpleLoader.propTypes = {
    interval: PropTypes.number,
    numDots: PropTypes.number
}

export default SimpleLoader
