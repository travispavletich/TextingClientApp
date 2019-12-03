import React, {Component} from "react";
import PropTypes from 'prop-types';

import { colors } from "../vars_colors"
import '../scss/Message.scss'

export class Message extends Component{

  render() {
    const { sender, text, number, self } = this.props.message;
    let nameStyle = '';
    let bubbleStyle = '';

    // set name + message style
    if(sender === "loading" && number === "loading"){
      bubbleStyle += 'loadingMessage';
    }
    else if (self) {
      bubbleStyle += 'myMessageUndelivered';
    }
    else {
      bubbleStyle += 'theirMessage'
    }                                      

    return (
      <div style={{width:'100%', overflow:'hidden'}}>
        <div className={bubbleStyle}>
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


