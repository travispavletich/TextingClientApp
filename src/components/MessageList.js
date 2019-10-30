import React, {Component} from "react";
import Message from './Message';
import PropTypes from 'prop-types';

class MessageList extends Component{
    render() {
        return this.props.todos.map((message => (
            <Message key={message.id} message={message} />
        )))
    }
}

// PropTypes
MessageList.propTypes = {
    MessageList: PropTypes.array.isRequired
}

export default MessageList;