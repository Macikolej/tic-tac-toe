import React from 'react';

import styles from './styles.module.scss';
import Tile from 'components/Tile';


const Row = ({nextIsX, changeNextFigure}) => {
  return (
    <div className={styles.Row}>
      <Tile nextIsX={nextIsX} changeNextFigure={changeNextFigure}/>
      <Tile nextIsX={nextIsX} changeNextFigure={changeNextFigure}/>
      <Tile nextIsX={nextIsX} changeNextFigure={changeNextFigure}/>
    </div>
  );
}

export default Row;
