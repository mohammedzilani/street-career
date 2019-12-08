import React from 'react'
import BallTrackUnitScreen from  './BallTrackUnitScreen/BallTrackUnitScreen'
import '../../../../styles/styles.css'

const BallTrackScreen = (props)=> (
  <section className="balltrack-screen">
      <BallTrackUnitScreen>4</BallTrackUnitScreen>
      <BallTrackUnitScreen>4</BallTrackUnitScreen>
      <BallTrackUnitScreen>4</BallTrackUnitScreen>
      <BallTrackUnitScreen>4</BallTrackUnitScreen>
      <BallTrackUnitScreen>4</BallTrackUnitScreen>
  </section>
);

export default BallTrackScreen;