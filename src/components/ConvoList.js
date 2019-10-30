import React, { Component } from 'react';
import Convo from "./Convo"
import PropTypes from 'prop-types';

export class ConversationList extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

// PropTypes
ConvoList.propTypes = {
    convos: PropTypes.array.isRequired
}

export default ConversationList
