import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { colors } from "../vars_colors"
import "../scss/Convo.scss"


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

    handleClick(){
        // this.setState(state =>({
        //     this.props.convo.active= !
        // }

        // ))
    }

    render() {
        const { sender, preview, active } = this.props.convo;

        
        return (
            //  style={this.getStyle()}
            //onClick={this.handleClick}
            <div className='active'>
                <p style = {{ fontWeight: '300' }}>
                    { sender }
                </p>
                <div style={{ fontWeight: 'normal'}}>
                    { preview } 
                </div>
            </div>
        )
    }
}

// PropTypes
Convo.propTypes = {
    convo: PropTypes.object.isRequired
}

export default Convo;
