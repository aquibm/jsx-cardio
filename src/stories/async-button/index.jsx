import React, { PropTypes } from 'react'
import styles from './styles'

class AsyncButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isSaving: false,
            isSaved: false
        }

        this.onClick = this.onClick.bind(this)
    }

    onClick() {
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
        }, 2000)
    }

    render() {
        return (
            <div style={styles.root}>
                <button style={styles.button} onClick={this.onClick}>
                    Save Changes
                </button>
            </div>
        )
    }
}

AsyncButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
}

export default AsyncButton
