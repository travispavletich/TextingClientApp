import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Convo extends Component {
    getStyle = () => {
        return {
            background: this.props.convo.active ? '#00ff00' : 'none',
            borderBottom: '1px #ccc dotted',
            padding: '10px',
        }
    }

    render() {
        const { id, sender, preview } = this.props.convo;
        
        return (
            <div style={this.getStyle()}>
                <p><b>{ sender }</b> <br></br> {preview}</p>
            </div>
        )
    }
}

// PropTypes
Convo.propTypes = {
    convo: PropTypes.object.isRequired
}

export default Convo;
