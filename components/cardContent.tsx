import React from 'react';
import ExampleList from './exampleList';
import { WordType } from '@/types/word';
import styles from '@/styles/components/cardContent.module.scss';

type CardContentPropsType = {
  word: WordType;
};

function CardContent({ word }: CardContentPropsType): JSX.Element {
  return (
    <div className={styles.root}>
      {word.type === 'noun' && word.additionalInfo.pluralForms.length > 0 && (
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
      {word.type === 'verb' && word.additionalInfo.masdars.length > 0 && (
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
      <ul className={styles.translationList}>
        <h2>Переводы:</h2>
        {word.translations.map((traslation, i) => (
          <li className={styles.translationItem} key={traslation.text + i}>
            <h3>{`${i + 1}) ${traslation.text}`}</h3>
            <ExampleList traslation={traslation} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardContent;
