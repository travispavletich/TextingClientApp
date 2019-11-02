import React, { Component } from 'react';
import Convo from "./Convo"
import PropTypes from 'prop-types';


class ConvoList extends Component {
    
    render() {
        return this.props.convos.map((convo => (
            <Convo key={convo.id} convo={convo} />
        )))
    }
}

// PropTypes
ConvoList.propTypes = {
    convos: PropTypes.array.isRequired
}

export default ConvoList;
