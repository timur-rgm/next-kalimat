import React from 'react';
import styles from '../styles/components/modalSettings.module.scss';

type ModalSettingsPropsType = {
  onButtonClick: () => void;
};

function ModalSettings({ onButtonClick }: ModalSettingsPropsType) {
  return (
    <div className={styles.container}>
      <form className={styles.popup}>
        <fieldset className={styles.arabicSettings}>
          <legend>Арабский</legend>
          <div>
            <input type="radio" id="exactModal" name="arabic" defaultChecked />
            <label htmlFor="exactModal">Точное совпадение</label>
          </div>
          <div>
            <input type="radio" id="unexactlyModal" name="arabic" />
            <label htmlFor="unexactlyModal">Неточный поиск</label>
          </div>
          <div>
            <input type="radio" id="rootModal" name="arabic" />
            <label htmlFor="rootModal">Поиск по корню</label>
          </div>
        </fieldset>
        <fieldset className={styles.translationSettings}>
          <legend>Перевод</legend>
          <div>
            <input
              type="radio"
              id="keywords1"
              name="translation"
              defaultChecked
            />
            <label htmlFor="keywords1">Только по ключевым словам</label>
          </div>
          <div>
            <input type="radio" id="textModal" name="translation" />
            <label htmlFor="textModal">Поиск по всему тексту</label>
          </div>
        </fieldset>
        <button className={styles.button} type="button" onClick={onButtonClick}>
          Готово
        </button>
      </form>
    </div>
  );
}

export default ModalSettings;
