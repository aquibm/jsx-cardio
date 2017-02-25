import React, { PropTypes } from 'react'
import styles from './styles'
import SimpleLoader from './simple-loder'

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

        this.setState({
            isSaving: true
        })

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

    render() {
        const buttonClass = `root__button ${this.state.isSaving ?
            'root__button--is-saving' : ''} ${this.state.isSaved ?
                'root__button--is-saved' : ''}`

        return (
            <div className="root">
                <button className={buttonClass} onClick={this.onClick}>
                    { !this.state.isSaving && !this.state.isSaved && <span>Save Changes</span> }
                    { this.state.isSaving && <span>Saving<SimpleLoader /></span>}
                    { this.state.isSaved && <span>&#10003; Saved</span> }
                </button>
                
                <p><a href="#" onClick={this.reset}>Reset</a></p>
                <p>Inspired by <a href="https://dribbble.com/shots/2839483-Save-Button-Animation" target="_blank">Dan Strogiy</a></p>

                { styles() }
            </div>
        )
    }
}

AsyncButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
}

export default AsyncButton
