import React, {Component} from "react";
import PropTypes from 'prop-types';

export class Message extends Component{
  getStyle = () => {
    return {
      background: this.props.message.self ? '#f2f2f2' : '#fffff',
      textAlign: this.props.message.self ? 'right' : 'left',
      padding: '10px',
    }
  }


  render() {
    const { id, sender, message, number } = this.props.message;

    return (
      <div style={this.getStyle()}>
        <b>{ number } // { sender }</b>
        <p>{ message }</p>
      </div>
    )
  }
}

// PropTypes
Message.propTypes = {
  message: PropTypes.object.isRequired
}

export default Message;


