import { useState } from 'react';
import { keyboardLetters } from '@/const';
import styles from '../styles/components/keyboard.module.scss';
import cn from 'classnames';

type KeyboardPropsType = {
  onButtonClick: (letter: string) => void;
  onClearButtonClick: () => void;
  onSearchButtonClick: () => void;
};

function Keyboard({
  onButtonClick,
  onClearButtonClick,
  onSearchButtonClick,
}: KeyboardPropsType) {
  const [isShiftPressed, setIsShiftPressed] = useState<boolean>(false);

  const handleShiftButtonClick = () => {
    setIsShiftPressed((prev) => !prev);
  };

  return (
    <div className={styles.root}>
      <div className={styles.row}>
        {!isShiftPressed
          ? keyboardLetters.firstRow.map((letter, i) => (
              <button
                className={styles.button}
                key={letter + i}
                onClick={() => onButtonClick(letter)}
              >
                {letter}
              </button>
            ))
          : keyboardLetters.firstRowB.map((letter, i) => (
              <button
                className={styles.button}
                key={letter + i}
                onClick={() => onButtonClick(letter)}
              >
                {letter}
              </button>
            ))}
        <button
          className={cn(styles.button, styles.clearButton)}
          onClick={onClearButtonClick}
        >
          Очистить
        </button>
      </div>
      <div className={styles.row}>
        <button className={cn(styles.button, styles.tabButton)}></button>
        {!isShiftPressed
          ? keyboardLetters.secondRow.map((letter, i) => (
              <button
                className={styles.button}
                key={letter + i}
                onClick={() => onButtonClick(letter)}
              >
                {letter}
              </button>
            ))
          : keyboardLetters.secondRowB.map((letter, i) => (
              <button
                className={styles.button}
                key={letter + i}
                onClick={() => onButtonClick(letter)}
              >
                {letter}
              </button>
            ))}
      </div>
      <div className={styles.row}>
        <button className={cn(styles.button, styles.capsButton)}></button>
        {!isShiftPressed
          ? keyboardLetters.thirdRow.map((letter, i) => (
              <button
                className={styles.button}
                key={letter + i}
                onClick={() => onButtonClick(letter)}
              >
                {letter}
              </button>
            ))
          : keyboardLetters.thirdRowB.map((letter, i) => (
              <button
                className={styles.button}
                key={letter + i}
                onClick={() => onButtonClick(letter)}
              >
                {letter}
              </button>
            ))}
        <button
          className={cn(styles.button, styles.searchButton)}
          onClick={onSearchButtonClick}
        >
          Поиск
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={cn(styles.button, styles.leftShiftButton, {
            [styles.pressed]: isShiftPressed,
          })}
          onClick={handleShiftButtonClick}
        >
          Shift
        </button>
        {!isShiftPressed
          ? keyboardLetters.fourthRow.map((letter, i) => (
              <button
                className={styles.button}
                key={letter + i}
                onClick={() => onButtonClick(letter)}
              >
                {letter}
              </button>
            ))
          : keyboardLetters.fourthRowB.map((letter, i) => (
              <button
                className={styles.button}
                key={letter + i}
                onClick={() => onButtonClick(letter)}
              >
                {letter}
              </button>
            ))}
        <button className={cn(styles.button, styles.rightShiftButton)}></button>
      </div>
    </div>
  );
}

export default Keyboard;
