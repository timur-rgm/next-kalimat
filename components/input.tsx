import Image from 'next/image';
import searchButtonIcon from '../public/images/search-button-icon.svg';
import keyboardIcon from '../public/images/keyboard-icon.svg';
import styles from '../styles/components/input.module.scss';

function Input() {
  return (
    <>
      <input className={styles.input} type="text" placeholder="Введите слово" />
      <Image
        className={styles.keyboardIcon}
        src={keyboardIcon}
        alt="Иконка открытия меню"
        width={40}
        height={24}
      />
      <button className={styles.button}>
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
