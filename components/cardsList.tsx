import styles from '../styles/components/cardsList.module.scss';

function CardsList(): JSX.Element {
  return (
    <ul className={styles.root}>
      <li className={styles.card}>
        <header className={styles.header}>
          <h3 className={styles.title}>كَتَبَ</h3>
          <p className={styles.desc}>1 порода, У</p>
        </header>
        <dl className={styles.extra}>
          <dt>Масдары:</dt>
          <dd>كِتَابَةٌ</dd>
        </dl>
        <ul className={styles.translationsList}>
          <li>1{`)`} книга</li>
          <li>2{`)`} письмо, послание, грамота</li>
          <li>3{`)`} секретарство</li>
          <li>4{`)`} мн. ч. надпись, письмо, письмена</li>
        </ul>
      </li>
      <li className={styles.card}>
        <header className={styles.header}>
          <h3 className={styles.title}>كُتَّابٌ</h3>
          {/* <p className={styles.desc}>1 порода, У</p> */}
        </header>
        <dl className={styles.extra}>
          <dt>Мн:</dt>
          <dd>كَتَاتِيبُ</dd>
        </dl>
        <ul className={styles.translationsList}>
          <li>1{`)`} начальная школа</li>
        </ul>
      </li>
      <li className={styles.card}>
        <header className={styles.header}>
          <h3 className={styles.title}>كِتَابَةٌ</h3>
          {/* <p className={styles.desc}>1 порода, У</p> */}
        </header>
        <dl className={styles.extra}>
          <dt>Мн:</dt>
          <dd>كِتَابَاتٌ</dd>
        </dl>
        <ul className={styles.translationsList}>
          <li>1{`)`} писание</li>
          <li>2{`)`} секретарство</li>
          <li>3{`)`} мн. надпись , письмо, письмена</li>
          <li>4{`)`} исписанная бумага, записка</li>
          <li>5{`)`} стиль</li>
        </ul>
      </li>
      <li className={styles.card}>
        <header className={styles.header}>
          <h3 className={styles.title}>مِكْتَابٌ</h3>
          {/* <p className={styles.desc}>1 порода, У</p> */}
        </header>
        {/* <dl className={styles.extra}>
          <dt>Масдары:</dt>
          <dd>كِتَابَةٌ</dd>
        </dl> */}
        <ul className={styles.translationsList}>
          <li>1{`)`} пишущая машинка</li>
        </ul>
      </li>
      <li className={styles.card}>
        <header className={styles.header}>
          <h3 className={styles.title}>إسْتِكْتَابٌ</h3>
          {/* <p className={styles.desc}>1 порода, У</p> */}
        </header>
        {/* <dl className={styles.extra}>
          <dt>Масдары:</dt>
          <dd>كِتَابَةٌ</dd>
        </dl> */}
        <ul className={styles.translationsList}>
          <li>1{`)`} диктовка, диктант</li>
          <li>2{`)`} выписка (напр. книг)</li>
        </ul>
      </li>
      <li className={styles.card}>
        <header className={styles.header}>
          <h3 className={styles.title}>اِكْتَأَبَ</h3>
          <p className={styles.desc}>8 порода</p>
        </header>
        {/* <dl className={styles.extra}>
          <dt>Масдары:</dt>
          <dd>كِتَابَةٌ</dd>
        </dl> */}
        <ul className={styles.translationsList}>
          <li>1{`)`} быть удручённым, унылым; печалиться; грустить; быть сумрачным</li>
          <li>2{`)`} быть темноватым</li>
        </ul>
      </li>
      <li className={styles.card}>
        <header className={styles.header}>
          <h3 className={styles.title}>كِتَابِيٌّ</h3>
          {/* <p className={styles.desc}>1 порода, У</p> */}
        </header>
        {/* <dl className={styles.extra}>
          <dt>Масдары:</dt>
          <dd>كِتَابَةٌ</dd>
        </dl> */}
        <ul className={styles.translationsList}>
          <li>1{`)`} письменный</li>
          <li>2{`)`} относящийся к священному писанию</li>
        </ul>
      </li>
    </ul>
  );
}

export default CardsList;
