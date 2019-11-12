import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { colors } from "../vars_colors"

export class Convo extends Component {
    //change style of convo depending on activity
    getStyle = () => {
        return {
            background: this.props.convo.active ? colors.gray1 : colors.gray2,
            color: this.props.convo.active ? colors.white1 : colors.white3,
            borderBottom: '2px solid',
            borderBottomColor: colors.gray3,
            padding: '10px',
        }
    }

    render() {
        const { id, sender, preview } = this.props.convo;
        
        return (
            <div style={this.getStyle()}>
                <p style = {{ fontWeight: '300' }}>
                    { sender }
                <br />
                <div style={{ fontWeight: 'normal'}}>
                    { preview } </div>
                </p>
            </div>
        )
    }
}

// PropTypes
Convo.propTypes = {
    convo: PropTypes.object.isRequired
}

export default Convo;
