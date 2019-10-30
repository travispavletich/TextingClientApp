import React, {Component} from "react";
import PropTypes from 'prop-types';

export class Message extends Component{
    render() {
      const { sender, message } = this.props.message;

      return (
        <p>{ sender }: {message}</p>
      )
    }
}

// PropTypes
Message.propTypes = {
  message: PropTypes.object.isRequired
}

export default Message;


