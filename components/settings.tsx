import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModeArabic } from '@/store/process/slice';
import { getSearchValue, getModeArabic } from '@/store/process/selectors';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ModalSettings from './modalSettings';
import { SearchModesArabic } from '@/const';
import settingsIcon from '../public/images/settings-icon.svg';
import styles from '../styles/components/settings.module.scss';

function Settings(): JSX.Element {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const searchValue = useSelector(getSearchValue);
  const modeArabic = useSelector(getModeArabic);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleFormChange = () => {
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
        <form
          className={styles.popup}
          ref={formRef}
          onChange={handleFormChange}
        >
          <fieldset className={styles.arabicSettings}>
            <legend>Арабский</legend>
            <div>
              <input
                type="radio"
                id="exact"
                name="arabic"
                defaultChecked={
                  modeArabic === SearchModesArabic.Exact || modeArabic === ''
                    ? true
                    : false
                }
              />
              <label
                htmlFor="exact"
                onClick={() => dispatch(setModeArabic(SearchModesArabic.Exact))}
              >
                Точное совпадение
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="unexactly"
                name="arabic"
                defaultChecked={
                  modeArabic === SearchModesArabic.Default ? true : false
                }
              />
              <label
                htmlFor="unexactly"
                onClick={() =>
                  dispatch(setModeArabic(SearchModesArabic.Default))
                }
              >
                Неточный поиск
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="root"
                name="arabic"
                defaultChecked={
                  modeArabic === SearchModesArabic.Root ? true : false
                }
              />
              <label
                htmlFor="root"
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
                id="keywords"
                name="translation"
                defaultChecked
              />
              <label htmlFor="keywords">Только по ключевым словам</label>
            </div>
            <div>
              <input type="radio" id="text" name="translation" />
              <label htmlFor="text">Поиск по всему тексту</label>
            </div>
          </fieldset>
        </form>
      )}
      {isOpen && <ModalSettings onButtonClick={handleButtonClick} />}
    </div>
  );
}

export default Settings;
