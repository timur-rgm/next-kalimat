import styles from '@/styles/components/cardContent.module.scss';

function CardContent() {
  return (
    <div className={styles.root}>
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
              <span className={styles.exampleArabic}>كَتَبَ إِلَيْهِ</span> -
              писать кому-либо
            </li>
            <li>
              <span className={styles.exampleArabic}>كَتَبَ وَقَرَأَ</span> -
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
              <span className={styles.exampleArabic}>كُتِبَ لَهُ</span> - страд.
              ему было суждено
            </li>
            <li>
              <span className={styles.exampleArabic}>
                كَتَبَتْ عَلَيْنَا الْأَقْدَارُ أَنْ
              </span>{' '}
              - ему было предписано, что...
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default CardContent;
