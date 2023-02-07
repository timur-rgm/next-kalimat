import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModeArabic, setModeCyrillic } from '@/store/process/slice';
import {
  getSearchValue,
  getModeArabic,
  getModeCyrillic,
} from '@/store/process/selectors';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { SearchModesArabic, SearchModesTranslation } from '@/const';
import { isStringCyrillic } from '@/utils';
import settingsIcon from '../public/images/settings-icon.svg';
import styles from '../styles/components/settings.module.scss';

function Settings(): JSX.Element {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const formRef = useRef<HTMLFormElement>(null);

  const searchValue = useSelector(getSearchValue);
  const modeArabic = useSelector(getModeArabic);
  const modeCyrillic = useSelector(getModeCyrillic);

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleFormChange = () => {
    isStringCyrillic(searchValue)
      ? router.push({
          pathname: '/words',
          query: {
            search: searchValue,
            mode: modeCyrillic,
          },
        })
      : router.push({
          pathname: '/words',
          query: {
            search: searchValue,
            mode: modeArabic,
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
        <div className={styles.popupContainer}>
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
                    modeArabic === SearchModesArabic.Exact ? true : false
                  }
                />
                <label
                  htmlFor="exact"
                  onClick={() =>
                    dispatch(setModeArabic(SearchModesArabic.Exact))
                  }
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
                  onClick={() =>
                    dispatch(setModeArabic(SearchModesArabic.Root))
                  }
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
                  defaultChecked={
                    modeCyrillic === SearchModesTranslation.Keywords
                      ? true
                      : false
                  }
                />
                <label
                  htmlFor="keywords"
                  onClick={() =>
                    dispatch(setModeCyrillic(SearchModesTranslation.Keywords))
                  }
                >
                  Только по ключевым словам
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="text"
                  name="translation"
                  defaultChecked={
                    modeCyrillic === SearchModesTranslation.Full ? true : false
                  }
                />
                <label
                  htmlFor="text"
                  onClick={() =>
                    dispatch(setModeCyrillic(SearchModesTranslation.Full))
                  }
                >
                  Поиск по всему тексту
                </label>
              </div>
            </fieldset>
            <button
              className={styles.competedButton}
              type="button"
              onClick={handleButtonClick}
            >
              Готово
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Settings;
