import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import moment from 'moment';

class Countdown extends Component {

 
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleGenerate = this.handleGenerate.bind(this)
        this.state = {
            startDate: moment(),
            formCompleted: false
        }
    }

    handleChange(date){

        this.setState({
            startDate: date
            
        });
        
    }

    handleGenerate() {
        this.setState({
            formCompleted: true
        })
        alert(this.state.formCompleted);
    }


    render() {
        return (
            <div>
                <h1> Y2k 2 CountDown</h1>
                <DatePicker 
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                />
                <a onClick={this.handleGenerate}>Generate Countdown</a>
                {
                            <h2>
                                 this is only appearing if the form has been formCompleted
                            </h2>

                }
               
            </div>
        )
    };
}

export default Countdown; 