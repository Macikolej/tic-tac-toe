import React, {useState} from 'react';

import styles from './styles.module.scss';

const Tile = ({nextIsX, changeNextFigure}) => {

  const [figure, changeFigure] = useState('none');

  function changeFigures() {
    if (figure == 'none') {
      changeFigure(nextIsX);
      changeNextFigure(!nextIsX);
    }
  }

  return (
    <div className={styles.Tile}>
      {figure == true ? (
        <div onClick={() => changeFigures()} className={styles.xTile}> </div>

        ) : (
        figure == false ? (
          <div onClick={() => changeFigures()} className={styles.oTile}> </div>
          ) : (
          <div onClick={() => changeFigures()} className={styles.emptyTile}> </div>
        )
      )}
    </div>
  );
}

export default Tile;
