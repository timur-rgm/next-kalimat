import React from 'react';
import Link from 'next/link';
import { diacritics } from '../const';
import { WordType } from '@/types/word';
import styles from '../styles/components/cardList.module.scss';

type CardListPropsType = {
  words: WordType[];
};

function CardList({ words }: CardListPropsType): JSX.Element {
  return (
    <ul className={styles.root}>
      {words?.map((word) => (
        <li key={word.id} className={styles.card}>
          <header className={styles.header}>
            <Link href={`/words/${word.id}`} key={word.id}>
              <h3 className={styles.title}>{word.arabicText}</h3>
            </Link>
            {word.type === 'verb' && word.additionalInfo && (
              <p className={styles.desc}>
                {word.additionalInfo.verbFormNumber} порода{' '}
                {word.additionalInfo.mudariLetters.length !== 0 &&
                  `, ${
                    word.additionalInfo.mudariLetters[0].pastTime
                      ? `${
                          diacritics[
                            word.additionalInfo.mudariLetters[0].pastTime
                          ]
                        }/`
                      : ''
                  }${
                    diacritics[word.additionalInfo.mudariLetters[0].presentTime]
                  }`}
              </p>
            )}
          </header>
          {word.type === 'noun' &&
            word.additionalInfo &&
            word.additionalInfo.pluralForms.length > 0 && (
              <dl className={styles.extra}>
                <dt>Мн:</dt>
                {word.additionalInfo.pluralForms.map((item, i) => (
                  <React.Fragment key={item + i}>
                    {word.additionalInfo.pluralForms.length > 1 && i > 0 && (
                      <p className={styles.or}>или</p>
                    )}
                    <dd>{item}</dd>
                  </React.Fragment>
                ))}
              </dl>
            )}
          {word.type === 'verb' &&
            word.additionalInfo &&
            word.additionalInfo.masdars.length > 0 && (
              <dl className={styles.extra}>
                <dt>Масдары:</dt>
                {word.additionalInfo.masdars.map((item, i) => (
                  <React.Fragment key={item + i}>
                    {word.additionalInfo.masdars.length > 1 && i > 0 && (
                      <p className={styles.or}>или</p>
                    )}
                    <dd>{item}</dd>
                  </React.Fragment>
                ))}
              </dl>
            )}
          <ul className={styles.translationsList}>
            {word.translations.map((traslation, i) => (
              <li key={traslation.id}>
                {i + 1}
                {`)`} {traslation.text}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default CardList;
