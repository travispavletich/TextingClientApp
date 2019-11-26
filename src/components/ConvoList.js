import React, { Component } from 'react';
import Convo from "./Convo"
import PropTypes from 'prop-types';

class ConvoList extends Component {

    render() {

        // for (Convo in buttons) {
        //     buttons[Convo].onclick = function() {
        //         console.log('test')
        //         var yellowButton = document.querySelectorAll(".yellow")[0];
        //         if (this.className == "green") {
        //             if (yellowButton) yellowButton.className = "green";
        //             this.className = "yellow";
        //         }
        //     }
        // }

        return this.props.convos.map((convo => (
            <Convo key={convo.id} convo={convo} />
        )))
    }
}

// PropTypes
ConvoList.propTypes = {
    convos: PropTypes.array.isRequired
}

export default ConvoList;
