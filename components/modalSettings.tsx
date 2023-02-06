import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModeArabic } from '@/store/process/slice';
import { getSearchValue, getModeArabic } from '@/store/process/selectors';
import { useRouter } from 'next/router';
import { SearchModesArabic } from '@/const';
import styles from '../styles/components/modalSettings.module.scss';

type ModalSettingsPropsType = {
  onButtonClick: () => void;
};

function ModalSettings({ onButtonClick }: ModalSettingsPropsType) {
  const router = useRouter();
  const searchValue = useSelector(getSearchValue);
  const modeArabic = useSelector(getModeArabic);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    modeArabic
      ? router.push({
          pathname: '/words',
          query: {
            searchQuery: searchValue,
            modeArabic: modeArabic,
          },
        })
      : router.push({
          pathname: '/words',
          query: {
            searchQuery: searchValue,
          },
        });

    onButtonClick();
  };

  return (
    <div className={styles.container}>
      <form className={styles.popup}>
        <fieldset className={styles.arabicSettings}>
          <legend>Арабский</legend>
          <div>
            <input
              type="radio"
              id="exactModal"
              name="arabic"
              defaultChecked={
                modeArabic === SearchModesArabic.Exact || modeArabic === ''
                  ? true
                  : false
              }
            />
            <label
              htmlFor="exactModal"
              onClick={() => dispatch(setModeArabic(SearchModesArabic.Exact))}
            >
              Точное совпадение
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="unexactlyModal"
              name="arabic"
              defaultChecked={
                modeArabic === SearchModesArabic.Default ? true : false
              }
            />
            <label
              htmlFor="unexactlyModal"
              onClick={() => dispatch(setModeArabic(SearchModesArabic.Default))}
            >
              Неточный поиск
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="rootModal"
              name="arabic"
              defaultChecked={
                modeArabic === SearchModesArabic.Root ? true : false
              }
            />
            <label
              htmlFor="rootModal"
              onClick={() => dispatch(setModeArabic(SearchModesArabic.Root))}
            >
              Поиск по корню
            </label>
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
        <button
          className={styles.button}
          type="button"
          onClick={handleButtonClick}
        >
          Готово
        </button>
      </form>
    </div>
  );
}

export default ModalSettings;
