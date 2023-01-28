import React from 'react';
import styles from '@/styles/components/cardContent.module.scss';

function CardContent({ word }: any) {
  return (
    <div className={styles.root}>
      {word.type === 'noun' && word.additionalInfo.pluralForms.length > 0 && (
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
      <ul className={styles.translationList}>
        <h2>Переводы:</h2>
        {word.translations.map((traslation: any, i: number) => (
          <li className={styles.translationItem} key={traslation.text + i}>
            <h3>{`${i + 1}) ${traslation.text}`}</h3>
            <ul className={styles.exampleList}>
              {traslation.samples.map((sample: any, i: number) => (
                <li key={sample.translationText + i}>
                  <span className={styles.exampleArabic}>
                    {sample.arabicText}
                  </span>{' '}
                  - {sample.translationText}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardContent;
