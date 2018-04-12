import React, { Component } from 'react';
import { clearInterval } from 'timers';

    class Clock extends Component {

        constructor(props) {
            super(props)

            this.timer = 0;
            this.countdown = props.countdownFormState.startDate.toString();
            this.getTimeRemaining = this.getTimeRemaining.bind(this);
            this.noYear = new Date(this.countdown).getFullYear() == new Date().getFullYear()

            this.state = {
                timeRemaining: this.getTimeRemaining(props.countdownFormState.startDate.toString())
            }
        }

        componentWillReceiveProps(nextPreops) {
            console.log(`next props: ${JSON.stringify(nextProps)}`)
        }

        getTimeRemaining(countdown) {
            var cdown = new Date(countdown);
            let today = new Date();

            const currentMonth = today.getMonth();
            const downMonth = cdown.getMonth();

            if(downMonth > currentMonth) {
                
                cdown.setFullYear(today.getFullYear());
            } 
            else if (downMonth < currentMonth) { 

                cdown.setFullYear(today.getFullYear() + 1);
            }
            else if(downMonth == currentMonth) {
                const downDay = cdown.getDate();
                const currentDay = today.getDate();
                if(downDay > currentDay) {
                    cdown.setFullYear(today.getFullYear());
                }
                else if (downDay < currentDay) {

                    cdown.setFullYear(today.getFullYear() + 1);
                } else { if (downDay == currentDay)  {
                    return 0
                }
            }
            }


             cdown.setFullYear(today.getFullYear());




            var distance = cdown.getTime() - today.getTime();

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
           
            return {
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            }
       }

       getDate = function() {
            var cdown = new Date(this.countdown);
            let today = new Date();


            var distance =  today.getTime() - cdown.getTime();
            var daysOld = Math.floor(distance / (1000 * 60 * 60 * 24));
            var yearsOld = Number((daysOld/365).toFixed(0)); 
            return yearsOld
       }.bind(this)
    
       componentDidMount () {
                 this.timer = setInterval(() => {
                     const timeRemaining = this.getTimeRemaining(this.countdown)
                     this.setState({ timeRemaining: timeRemaining })
                 }, 1000);
        }

        componentWillUnmount() {
                clearInterval(this.timer);
        } 

        renderMessage = function() {
            if(this.noYear) {
                return(
                    <h4>until your birthday!</h4> 
                )
            }
            return(
                <h4>remaining until you are {this.get()}</h4>
        )
        }.bind(this)

        render() {
            const data = this.state.timeRemaining
            return (
                <div className="countdown">
                {
                    this.state.timeRemaining == 0 ?
                      <div className="message-container">
                          <p className="message-container__title">Countdown Complete</p>
                          <p className="message-container__message">Happy Birthday</p>

                       </div>
        
                        :   
                        <div>
                          <ul className="countdown__clock">
                             <li>Days<p>{data.days}</p></li>
                             <li>HRS<p>{data.hours}</p></li>
                             <li>MINS<p>{data.minutes}</p></li>
                             <li>SECS<p>{data.seconds}</p></li>
                          </ul> 
                       <div>
                       {this.renderMessage()}
                    </div>
                </div>
                

                }
                </div>
            )
        }

    }



export default Clock;