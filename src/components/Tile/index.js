import React, {useState} from 'react';

import styles from './styles.module.scss';

const classNameForTile = (tile) => {
  if (tile === 'circle') return styles.oTile;
  if (tile === 'x') return styles.xTile;
  return styles.emptyTile;
}

const Tile = ({index, makeMove, gameState}) => (
  <div className={styles.Tile}>
    <div
      onClick={() => makeMove(index - 1)}
      className={classNameForTile(gameState[index - 1])}
    />
  </div>
);

export default Tile;
