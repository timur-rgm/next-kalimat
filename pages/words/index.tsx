import styles from '@/styles/components/word.module.scss';

function Word(): JSX.Element {
  return (
    <main className={styles.root}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>كَتَبَ</h1>
          <ul className={styles.categoryList}>
            <li>Глагол (фи`ль)</li>
            <li>1 порода, У</li>
          </ul>
          <div className={styles.tabContainer}>
            <ul className={styles.tabList}>
              <li className={styles.active}>Главная</li>
              <li>Примеры</li>
              <li>Однокоренные слова</li>
              <li>Спряжение</li>
              <li>Толкования</li>
              <li>Связи</li>
            </ul>
          </div>
        </header>

        <div className={styles.content}>
          <dl className={styles.extra}>
            <dt>Масдары:</dt>
            <dd>كِتَابَةٌ</dd>
          </dl>
          <ul className={styles.translationList}>
            <h2>Переводы:</h2>
            <li className={styles.translationItem}>
              <h3>1{`)`} писать, составлять</h3>
              <ul className={styles.exampleList}>
                <li>
                  <span className={styles.arabic}>كَتَبَ إِلَيْهِ</span> -
                  писать кому-либо
                </li>
                <li>
                  <span className={styles.arabic}>كَتَبَ وَقَرَأَ</span> -
                  писать и читать, быть грамотным
                </li>
              </ul>
            </li>
            <li className={styles.translationItem}>
              <h3>2{`)`} описывать (что عن)</h3>
            </li>
            <li className={styles.translationItem}>
              <h3>3{`)`} письменно завещать (кому ل)</h3>
            </li>
            <li className={styles.translationItem}>
              <h3>4{`)`} предписывать (кому على)</h3>
              <ul className={styles.exampleList}>
                <li>
                  <span className={styles.arabic}>كُتِبَ لَهُ</span> - страд.
                  ему было суждено
                </li>
                <li>
                  <span className={styles.arabic}>
                    كَتَبَتْ عَلَيْنَا الْأَقْدَارُ أَنْ
                  </span>{' '}
                  - ему было предписано, что...
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Word;
