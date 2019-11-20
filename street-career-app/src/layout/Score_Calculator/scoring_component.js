import React, { Component } from 'react'
import '../../styles/styles.css'
import Screen from './Screen/Screen'
import Keypad from  './KeyPad/KeyPad'



export class scoring_component extends Component {
    state = {
        score : {
            runs:0,
            wickets:0
        },
        overs: {
            overNumber:0,
            ballNumber:0
        },
        isExtra:false,
        prevScore: {
            runs:0,
            wickets:0
        },
        prevOvers:{
            overNumber:0,
            ballNumber:0
        },
        lastFiveEvents:[],
        noofEvents:0
    }
    
    onButtonPress = event => {
        let runs = this.state.score.runs;
        let wickets = this.state.score.wickets;
        let overNumber = this.state.overs.overNumber;
        let ballNumber = this.state.overs.ballNumber;
        let prevScoreRuns = this.state.score.runs;
        let prevScoreWickets = this.state.score.wickets;
        let prevOversOverNo = this.state.overs.overNumber;
        let prevOversBallNo = this.state.overs.ballNumber;
        let isExtra = this.state.isExtra;
        const pressedButton = event.target.innerHTML;

        if (pressedButton >= '0' && pressedButton<="6") {
            
            if(isExtra)
            {
                runs += parseInt(pressedButton);
                isExtra = false;
            }
            else
            {
                runs += parseInt(pressedButton);
                ballNumber += 1;
                isExtra = false;
                if(ballNumber%6 === 0)
                {
                    overNumber += 1;
                    ballNumber = 0;
                }
           }

           this.state.lastFiveEvents[this.state.noofEvents] = pressedButton;

           this.state.noofEvents += 1;
           
           this.setState({score: {runs:runs, wickets:wickets}, overs:{overNumber:overNumber, ballNumber:ballNumber}, isExtra : isExtra, prevScore:{runs:prevScoreRuns, wickets:prevScoreWickets},
           prevOvers:{overNumber:prevOversOverNo, ballNumber:prevOversBallNo}});
        }
        else if(pressedButton === "wd")
        {
            if(!isExtra)
            {
                isExtra = true;
                runs += 1;
                this.setState({score: {runs:runs, wickets:wickets}, overs:{overNumber:overNumber, ballNumber:ballNumber}, isExtra: isExtra});
            }
        }
        else if(pressedButton === "nb")
        {
            if(!isExtra)
            {
                isExtra = true;
                runs += 1;
                this.setState({score: {runs:runs, wickets:wickets}, overs:{overNumber:overNumber, ballNumber:ballNumber}, isExtra:isExtra});
            }
        }
        else if(pressedButton === "C")
        {

            this.setState({score: {runs:this.state.prevScore.runs, wickets:this.state.prevScore.wickets},
                 overs:{overNumber:this.state.prevOvers.overNumber, ballNumber:this.state.prevOvers.ballNumber}, isExtra:isExtra});
        }
        else if(pressedButton === "W")
        {
            wickets += 1
            ballNumber += 1;
            isExtra = false;
            if(ballNumber%6 === 0)
            {
                overNumber += 1;
                ballNumber = 0;
            }
            this.setState({score: {runs:runs, wickets:wickets}, overs:{overNumber:overNumber, ballNumber:ballNumber}, isExtra : isExtra, prevScore:{runs:prevScoreRuns, wickets:prevScoreWickets,
                prevOvers:{overNumber:prevOversOverNo, ballNumber:prevOversBallNo}}});
        }
      }
    render() {
        return (
        <div className="scoring_component">
            <Screen score={this.state.score} overs={this.state.overs}/>
            <Keypad onButtonPress={this.onButtonPress} />
        </div>
        )
    }
}


export default scoring_component;