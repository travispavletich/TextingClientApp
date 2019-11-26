import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { colors } from "../vars_colors"
import "../scss/Convo.scss"


export class Convo extends Component {
    handleClick(){
        // this.setState(state =>({
        //     this.props.convo.active= !
        // }

        // ))
    }

    render() {
        const { sender, preview, active } = this.props.convo;
        let convoStyle = '';
    
        // set style based on active or not
        if (active) { convoStyle += 'active'; }
        else { convoStyle += 'inactive'; }        

        return (
            //onClick={this.handleClick}
            <div className={convoStyle}>
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
