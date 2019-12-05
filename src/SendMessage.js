import React, {Component} from "react";

import './scss/SendMessage.scss';

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

    connect = (e) => {
        e.preventDefault();
        this.props.setConnected(true);
        window.connect();
    }

    render() {
        const connected = this.props.connected;
        //console.log(connected);
        let connectClass = 'btn';
        if(connected){
            connectClass += ' connected';
        }
        else{
            connectClass += ' conBtn';
        }
        return (
            <div>
                <form onSubmit={this.connect} className="container">
                    <input
                        type="submit"
                        value="Connect"
                        className={connectClass}
                        id="connectBtn"
                        style={{flex: 1}}
                    />
                </form>
                <form onSubmit={this.onSubmit} className="container">
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
            </div>
        )
    }
}

export default SendMessage