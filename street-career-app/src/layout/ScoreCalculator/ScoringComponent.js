import React, { Component } from 'react'
import Screen from './Screen/Screen'
import Keypad from './KeyPad/KeyPad'
import { isIntStr } from '../../utils/utils'
import { ScoreComputationHelper } from '../../helpers/score-computation-helper'

/**
 * ballResults: [["wd", "1"], ["1"], ["2"]]
 * ***/

export class ScoringComponent extends Component {
    state = {
        ballResults: [],
        currentBallResult: []
    }

    getScoringKeyPadProps = () => {
        const numericKeyProps = (num) => {
            const numStr = num.toString();
            return { keyId: numStr, displayText: numStr }
        }
        return {
            rows: [
                [numericKeyProps(0), numericKeyProps(1), numericKeyProps(2)],
                [numericKeyProps(3), numericKeyProps(4), numericKeyProps(5), { keyId: "w", displayText: "W" }],
                [numericKeyProps(6), { keyId: "wd", displayText: "Wd" }, { keyId: "nb", displayText: "Nb" }, { keyId: "c", displayText: "C" }]
            ],
            onButtonPress: this.onButtonPress
        }
    }

    //TODO replace with some popup
    showAlert = msg => alert(msg)

    onButtonPress = keyId => {
        const state = this.state;
        const currentBallResult = state.currentBallResult;
        const ballResults = state.ballResults
        if (keyId === "c") {
            if (currentBallResult.length == 0) {
                ballResults.splice(ballResults.length - 1, 1)
            }
            this.setState({ currentBallResult: [], ballResults: ballResults })
        } else {
            const scoreComputationHelper = new ScoreComputationHelper(this.state.ballResults,
                this.state.currentBallResult);

            if (scoreComputationHelper.getWickets() >= 10) {
                return this.showAlert("All out");
            }
            const lastKeyId = currentBallResult[currentBallResult.length - 1];
            if (ScoreComputationHelper.isExtraKeyId(keyId)) {
                if (currentBallResult.length === 0) {
                    currentBallResult.push(keyId)
                } else {
                    if (ScoreComputationHelper.isExtraKeyId(lastKeyId)) {
                        this.showAlert("Runs for extra is missing")
                    }
                }
                this.setState({ currentBallResult: currentBallResult })
            } else if (keyId === "w") {
                //TODO allow only 10 wickets
                currentBallResult.push(keyId)
                if (lastKeyId && ScoreComputationHelper.isExtraKeyId(lastKeyId)) {
                    this.setState({ currentBallResult: currentBallResult })
                } else {
                    this.setState({ currentBallResult: [], ballResults: ballResults.concat([currentBallResult]) })
                }
            } else if (isIntStr(keyId)) {
                const num = parseInt(keyId)
                if (num >= 0 && num <= 6) {
                    currentBallResult.push(keyId)
                    if (lastKeyId && ScoreComputationHelper.isExtraKeyId(lastKeyId)) {
                        this.setState({ currentBallResult: currentBallResult })
                    } else {
                        this.setState({
                            currentBallResult: [],
                            ballResults: ballResults.concat([currentBallResult])
                        })
                    }
                }
            } else {
                alert("Unhandled keyId")
            }
        }
    }
    render() {
        console.log(this.state.ballResults, this.state.currentBallResult)
        const scoreComputationHelper = new ScoreComputationHelper(this.state.ballResults,
            this.state.currentBallResult);
        const runs = scoreComputationHelper.getRuns()
        return (
            <div className="scoring_component">
                <Screen score={{ runs: runs, wickets: scoreComputationHelper.getWickets() }}
                    overs={scoreComputationHelper.getOvers()} />
                <Keypad {...this.getScoringKeyPadProps()} />
            </div>
        )
    }
}


export default ScoringComponent;