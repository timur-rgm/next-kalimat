import { useState } from 'react';
import Image from 'next/image';
import settingsIcon from '../public/images/settings-icon.svg';
import styles from '../styles/components/settings.module.scss';

function Settings() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.root}>
      <Image
        className={styles.icon}
        src={settingsIcon}
        alt="Иконка открытия меню"
        width={40}
        height={40}
        onClick={handleButtonClick}
      />
      {isOpen && (
        <form className={styles.popup}>
          <fieldset className={styles.arabicSettings}>
            <legend>Арабский</legend>
            <div>
              <input type="radio" id="exact" name="arabic" />
              <label htmlFor="exact">Точное совпадение</label>
            </div>
            <div>
              <input type="radio" id="unexactly" name="arabic" />
              <label htmlFor="unexactly">Неточный поиск</label>
            </div>
            <div>
              <input type="radio" id="root" name="arabic" />
              <label htmlFor="root">Поиск по корню</label>
            </div>
          </fieldset>
          <fieldset className={styles.translationSettings}>
            <legend>Перевод</legend>
            <div>
              <input type="radio" id="keywords" name="translation" />
              <label htmlFor="keywords">Только по ключевым словам</label>
            </div>
            <div>
              <input type="radio" id="text" name="translation" />
              <label htmlFor="text">Поиск по всему тексту</label>
            </div>
          </fieldset>
          <button
            className={styles.completedButton}
            type="button"
            onClick={handleButtonClick}
          >
            Готово
          </button>
        </form>
      )}
    </div>
  );
}

export default Settings;
