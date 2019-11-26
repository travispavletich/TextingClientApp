import React, {Component} from "react";

import './css/SendMessage.css';
import { colors } from "./vars_colors"

export class SendMessage extends Component {
    state = {
        text: ''
    }

    //update state of message to send-- can be called regardless of name
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    //submit 
    onSubmit = (e) => {
        //stop from sending to file
        e.preventDefault();
        this.props.sendMessage(this.state.text);
        this.setState({ text: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className={{ display: 'flex' }}>
                {/* new message box */}
                <input 
                    type = "text" 
                    name = "text" 
                    placeholder = "Type a message..." 
                    value = {this.state.text}
                    onChange = {this.onChange}
                    className = "newMessage"
                />

                {/* submit message button */}
                <input 
                    type="submit" 
                    value="Send" 
                    className="btn"
                    style={{flex: 1}}
                />
            </form>
        )
    }
}

export default SendMessage