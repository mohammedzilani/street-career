import { isIntStr } from "../utils/utils";
import { sum } from "lodash";

export class ScoreComputationHelper {
    constructor(ballResults, onGoingBall) {
        this.ballResults = ballResults;
        this.onGoingBall = onGoingBall;
    }

    static isExtraKeyId = (keyId) => keyId === "nb" || keyId === "wd"

    static getRunsOfBall = ballResult => {
        return sum(ballResult.map(keyId => {
            if (ScoreComputationHelper.isExtraKeyId(keyId)) {
                return 1;
            } else if (isIntStr(keyId)) {
                return parseInt(keyId)
            }
            return 0;
        }))
    }

    static getWicketsOfBall = ballResult => {
        return sum(ballResult.map(keyId => keyId === "w" ? 1 : 0))
    }

    getWickets() {
        return sum(this.ballResults.map(ScoreComputationHelper.getWicketsOfBall))
            + ScoreComputationHelper.getWicketsOfBall(this.onGoingBall)
    }

    getRuns() {
        return sum(this.ballResults.map(ScoreComputationHelper.getRunsOfBall))
            + ScoreComputationHelper.getRunsOfBall(this.onGoingBall)
    }

    getOvers() {
        const ballResults = this.ballResults
        return {
            overNumber: Math.floor(ballResults.length / 6),
            ballNumber: ballResults.length % 6
        }
    }
}