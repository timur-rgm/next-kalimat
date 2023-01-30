import React from 'react';
import { useSelector } from 'react-redux';
import { getWords } from '@/store/data/selectors';
import Link from 'next/link';
import { diacritics } from '../const';
import styles from '../styles/components/cardsList.module.scss';

function CardList({words}: any): JSX.Element {
  return (
    <ul className={styles.root}>
      {words?.map((word: any) => (
        <li key={word.id} className={styles.card}>
          <header className={styles.header}>
            <Link href={`/words/${word.id}`} key={word.id}>
              <h3 className={styles.title}>{word.arabicText}</h3>
            </Link>
            {word.type === 'verb' && (
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
            word.additionalInfo.pluralForms.length > 0 && (
              <dl className={styles.extra}>
                <dt>Мн:</dt>
                {word.additionalInfo.pluralForms.map((item: any, i: number) => (
                  <React.Fragment key={item + i}>
                    {word.additionalInfo.pluralForms.length > 1 && i > 0 && (
                      <p className={styles.or}>или</p>
                    )}
                    <dd>{item}</dd>
                  </React.Fragment>
                ))}
              </dl>
            )}
          {word.type === 'verb' && word.additionalInfo.masdars.length > 0 && (
            <dl className={styles.extra}>
              <dt>Масдары:</dt>
              {word.additionalInfo.masdars.map((item: any, i: number) => (
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
            {word.translations.map((traslation: any) => (
              <li key={traslation.id}>
                {traslation.sortOrder}
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
