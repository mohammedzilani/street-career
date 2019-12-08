import React, { Component } from 'react'
import './styles/styles.css'
import ScoringComponent from './layout/ScoreCalculator/ScoringComponent'


export class App extends Component {

  render() {
    return (
      <div className="App">
        <ScoringComponent/>
      </div>
    )
  }
}

export default App
