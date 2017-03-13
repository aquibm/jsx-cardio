import React, { PropTypes } from 'react'
import classNames from 'classnames'

import SimpleLoader from './simple-loder'
import s from './style.css'

class AsyncButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isSaving: false,
            isSaved: false
        }

        this.onClick = this.onClick.bind(this)
        this.reset = this.reset.bind(this)
    }

    onClick() {
        if(this.state.isSaved || this.state.isSaving)
            return

        this.props.onClick();

        this.setState({ isSaving: true })

        setTimeout(() => {
            this.setState({
                isSaving: false,
                isSaved: true
            })

            this.props.onSave()
        }, 2500)
    }

    reset() {
        this.setState({
            isSaving: false,
            isSaved: false
        })
    }

    buttonText() {
        if(this.state.isSaving) {
            return <span>Saving <SimpleLoader /></span>
        }

        if(this.state.isSaved) {
            return <span>&#10003; Saved</span>
        }

        return <span>Save Changes</span>
    }

    render() {
        const buttonClasses = classNames({
            [s.button]: true,
            [s.isSaving]: this.state.isSaving,
            [s.isSaved]: this.state.isSaved
        })

        return (
            <div className={s.root}>
                <button className={buttonClasses} onClick={this.onClick}>
                    { this.buttonText() }
                </button>
                
                <p><a href="#" onClick={this.reset}>Reset</a></p>
                <p>Inspired by <a href="https://dribbble.com/shots/2839483-Save-Button-Animation" target="_blank">Dan Strogiy</a></p>
            </div>
        )
    }
}

AsyncButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
}

export default AsyncButton
