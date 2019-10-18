import React, {Component} from "react";

class Message extends Component{
    render() {
        const self = this.props.self ? 'self' : '';
        return (
          <div className={`message ${self}`}>
            <div className='avatar'>{this.props.avatar}</div>
            <div className='message-body'>{this.props.message}</div>
          </div>
        );
      }
}

export default Message;