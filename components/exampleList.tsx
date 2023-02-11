import React, { useState } from 'react';
import Image from 'next/image';
import { TranslationType } from '@/types/word';
import arrowIcon from '../public/images/arrow-icon.svg';
import styles from '@/styles/components/exampleList.module.scss';
import cn from 'classnames';

type ExampleListPropsType = {
  traslation: TranslationType;
};

function ExampleList({ traslation }: ExampleListPropsType): JSX.Element {
  const [isMoreButtonPressed, setIsMoreButtonPressed] =
    useState<boolean>(false);

  const handleMoreButtonClick = () => {
    setIsMoreButtonPressed((prev) => !prev);
  };

  return (
    <ul className={styles.root}>
      {traslation.samples.slice(0, 2).map((sample: any, i: number) => (
        <li className={styles.item} key={sample.translationText + i}>
          <span className={styles.arabic}>{sample.arabicText}</span> -{' '}
          {sample.translationText}
        </li>
      ))}
      {traslation.samples.slice(2).map((sample: any, i: number) => (
        <li
          className={cn(styles.item, {
            [styles.closed]: !isMoreButtonPressed,
            [styles.opened]: isMoreButtonPressed,
          })}
          key={sample + i}
        >
          <span className={styles.arabic}>{sample.arabicText}</span> -{' '}
          {sample.translationText}
        </li>
      ))}
      {traslation.samples.length > 2 && (
        <button className={styles.moreButton} onClick={handleMoreButtonClick}>
          {isMoreButtonPressed ? 'Свернуть' : 'Ещё примеры'}
          <Image
            className={cn(styles.arrowIcon, {
              [styles.inverted]: isMoreButtonPressed,
            })}
            src={arrowIcon}
            alt="Стрелка"
            width={13}
            height={23}
          />
        </button>
      )}
    </ul>
  );
}

export default ExampleList;
