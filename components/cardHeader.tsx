import { Tabs, partsOfSpeech, diacritics } from '@/const';
import styles from '@/styles/components/cardHeader.module.scss';

function CardHeader({ word }: any): JSX.Element {
  return (
    <header className={styles.root}>
      <h1 className={styles.title}>{word.arabicText}</h1>
      <ul className={styles.categoryList}>
        <li>{partsOfSpeech[word.type]}</li>
        {word.type === 'verb' && (
          <li>
            {word.additionalInfo.verbFormNumber} порода{' '}
            {word.additionalInfo.mudariLetters.length !== 0 &&
              `, ${
                word.additionalInfo.mudariLetters[0].pastTime
                  ? `${
                      diacritics[word.additionalInfo.mudariLetters[0].pastTime]
                    }/`
                  : ''
              }${diacritics[word.additionalInfo.mudariLetters[0].presentTime]}`}
          </li>
        )}
      </ul>
      <div className={styles.tabContainer}>
        <ul className={styles.tabList}>
          {Object.values(Tabs).map((tab, i) => (
            <li
              className={i === 0 ? `${styles.active}` : ''}
              key={`${tab} + ${i}`}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default CardHeader;
