import { hot } from 'react-hot-loader'
import React, { Component, Fragment } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

// Components
import ScoreBoard from './score-board'
import Scene from './scene'
import Character from './character'
import Item from './item'
import Controls from './controls'
import Subscribe from './subscribe'

class Game extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <ScoreBoard />
        <Scene>
          {handlers => (
            <Fragment>
              <Item incrementScore={handlers.incrementScore} />
              <Character resetGame={handlers.resetGame} />
              <Controls keyDown={handlers.keyDown} />
              {handlers.isPaused &&
                <Subscribe startGame={handlers.startGame} />
              }
            </Fragment>
          )}
        </Scene>
      </Fragment>
    )
  }
}

export default hot(module)(Game)
