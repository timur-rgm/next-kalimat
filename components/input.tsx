import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../store/process/slice';
import Image from 'next/image';
import searchButtonIcon from '../public/images/search-button-icon.svg';
import keyboardIcon from '../public/images/keyboard-icon.svg';
import styles from '../styles/components/input.module.scss';

function Input() {
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useDispatch();

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };
  
  const handleButtonClick = () => {
    dispatch(setSearchValue(inputValue));
  };

  return (
    <>
      <input
        className={styles.input}
        type="text"
        placeholder="Введите слово"
        onChange={(evt) => handleInputChange(evt.target.value)}
      />
      <Image
        className={styles.keyboardIcon}
        src={keyboardIcon}
        alt="Иконка открытия меню"
        width={40}
        height={24}
      />
      <button className={styles.button} type="button" onClick={handleButtonClick}>
        <Image
          className={styles.buttonIcon}
          src={searchButtonIcon}
          alt="Иконка открытия меню"
          width={24}
          height={24}
        />
      </button>
    </>
  );
}

export default Input;
