import React, { Component } from 'react';

import styles from './styles.module.scss';
import Row from 'components/Row';
import { apiFetchGameState, apiMakeMove, apiResetGame } from 'utils/api.js';


class MainPage extends Component {
  state = {
    nextFigure: 'circle',
    gameState: [],
    won: 'none',
  }

  componentDidMount() {
    this.refreshGameState();
    setInterval(this.refreshGameState, 1000);
  }

  makeMove = (index) => {
    if (this.state.won === 'none') {
      apiMakeMove(index)
      .then(game => this.setState(game));
    }
  }

  refreshGameState = () => {
    apiFetchGameState()
      .then(game => this.setState(game));
  }

  resetGame = () => {
    apiResetGame()
      .then(game => this.setState(game));
  }

  render() {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.wonContainer}>
          <div className={styles.smallerWinner}>
            <div className={styles.smallerTextInfo}>
             Next to move: {this.state.nextFigure}
            </div>
          </div>
          {this.state.won === 'circle' || this.state.won === 'x' || this.state.won === 'draw' ? (
            <div className={styles.winner}>
              <div className={styles.textInfo}> Winner: {this.state.won} </div>
              <button onClick={() => this.resetGame()} className={styles.resetButton}> Reset </button>
            </div>
          ) : (
            <div> </div>
          )}
        </div>
        <div className={styles.gameContainer}>
          <Row index={0} nextFigure={this.state.nextFigure} makeMove={this.makeMove} gameState={this.state.gameState} />
          <Row index={1} nextFigure={this.state.nextFigure} makeMove={this.makeMove} gameState={this.state.gameState} />
          <Row index={2} nextFigure={this.state.nextFigure} makeMove={this.makeMove} gameState={this.state.gameState} />
        </div>
      </div>
    );
  }
}

export default MainPage;
