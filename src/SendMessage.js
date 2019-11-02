import React, {Component} from "react";

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
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                {/* new message box */}
                <input 
                    type="text" 
                    name="text" 
                    style = {{ flex: '10', padding: '5px' }}
                    placeholder="Type a message..." 
                    value={this.state.text}
                    onChange={this.onChange}
                />

                {/* submit message button */}
                <input 
                    type="submit" 
                    value="Submit" 
                    className="btn"
                    style={{flex: 1}}
                />
            </form>
        )
    }
}

export default SendMessage