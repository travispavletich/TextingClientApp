import React, {Component} from "react";
import PropTypes from 'prop-types';

import '../css/Message.css'

export class Message extends Component{
  //change style depending on sender (self vs contact)
  getStyle = () => {
    return {
      background: this.props.message.self ? '#f2f2f2' : '#fffff',
      textAlign: this.props.message.self ? 'right' : 'left',
      padding: '10px',
      maxWidth: '325px',
    }
  }


  render() {
    const { sender, text, number } = this.props.message;

    return (
      <div>
        <div>
          <p style={{fontWeight: '300'}}>
            { number } // { sender }
          </p>
        </div>
        
        <div style={this.getStyle()} className={'bubble'}>
          <p>{ text }</p>
        </div>
      </div>
    )
  }
}

// PropTypes
Message.propTypes = {
  message: PropTypes.object.isRequired
}

export default Message;


