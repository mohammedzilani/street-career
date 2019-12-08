import React from 'react'
import ScoreScreen from './ScoreScreen/ScoreScreen'
import OversScreen from './OversScreen/OversScreen'
import '../../../styles/styles.css'
import BallTrackScreen from './BallTrackScreen/BallTrackScreen'



const screen = (props)=> (
  <section className="screen">
    <section className = "score-over-screen">
      <ScoreScreen>{props.score.runs}/{props.score.wickets}</ScoreScreen>
      <OversScreen>{props.overs.overNumber}.{props.overs.ballNumber}</OversScreen>
    </section>
    <BallTrackScreen></BallTrackScreen>
  </section>

);

export default screen;