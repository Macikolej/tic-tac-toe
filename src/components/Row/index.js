import React from 'react';

import styles from './styles.module.scss';
import Tile from 'components/Tile';


const Row = ({index, nextFigure, makeMove, gameState}) => {
  return (
    <div className={styles.Row}>
      <Tile index={index * 3 + 1} nextFigure={nextFigure} makeMove={makeMove} gameState={gameState} />
      <Tile index={index * 3 + 2} nextFigure={nextFigure} makeMove={makeMove} gameState={gameState} />
      <Tile index={index * 3 + 3} nextFigure={nextFigure} makeMove={makeMove} gameState={gameState} />
    </div>
  );
}

export default Row;
