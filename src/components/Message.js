import React, {Component} from "react";
import PropTypes from 'prop-types';

import { colors } from "../vars_colors"
import '../css/Message.css'

export class Message extends Component{
  //change style depending on sender (self vs contact)
  getStyle = () => {
    return {
      className: 'orange',
    }
  }

  getNameStyle = () => {
    return {
      textAlign: this.props.message.self ? 'right' : 'left',
      fontWeight: '300'

    }
  }


  render() {
    const { sender, text, number, self } = this.props.message;
    let nameStyle = '';
    let bubbleStyle = '';

    // set name + message style
    if (self) {
      nameStyle += 'myName';
      bubbleStyle += 'myMessage';
    }
    else {
      nameStyle += 'theirName';
      bubbleStyle += 'theirMessage'
    }                                      

    return (
      <div style={{width:'100%', overflow:'hidden'}}>
        <div>
          <p className={nameStyle}>
            { number } // { sender }
          </p>
        </div>
        
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


