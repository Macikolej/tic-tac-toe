import React, {useState} from 'react';

import styles from './styles.module.scss';
import Row from 'components/Row';

function MainPage() {

  const [nextIsX, changeNextFigure] = useState(true);

  console.log(nextIsX);
  return (
    <div className={styles.mainContainer}>
      <Row nextIsX={nextIsX} changeNextFigure={changeNextFigure} />
      <Row nextIsX={nextIsX} changeNextFigure={changeNextFigure} />
      <Row nextIsX={nextIsX} changeNextFigure={changeNextFigure} />
    </div>
  );
}

export default MainPage;
