import React, { Component } from "react";
import DaterPicker from "react-datepicker";

class Countdown extends Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <h1> Y2k 2 CountDown</h1>
                <DaterPicker />
            </div>
        )
    };
}

export default Countdown;