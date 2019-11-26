import React, {Component} from "react";
import Message from './Message';
import PropTypes from 'prop-types';

class MessageList extends Component{
    render() {

        return this.props.messages.map((message => (
                <Message key={message.id} message={message} />
        )))
    }
}

// PropTypes
MessageList.propTypes = {
    messages: PropTypes.array.isRequired
}

export default MessageList;