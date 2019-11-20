import React, { Component } from 'react'
import './styles/styles.css'
import ScoringComponent from './layout/Score_Calculator/scoring_component'


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
