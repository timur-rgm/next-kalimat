import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Keyboard from './keyboard';
import searchButtonIcon from '../public/images/search-button-icon.svg';
import styles from '../styles/components/search.module.scss';
import cn from 'classnames';

function Search({ query, count }: any) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isKeyboardOpen, setIsKeyboardOpen] = useState<boolean>(false);

  const router = useRouter();

  const handleSearchButtonClick = () => {
    inputRef.current?.value
      ? router.push(`/words?searchQuery=${inputRef.current?.value}`)
      : router.push(`/words`);
    setIsKeyboardOpen(false);
  };

  const handleKeyboardIconClick = () => {
    setIsKeyboardOpen((prev) => !prev);
  };

  const handleKeyboardButtonClick = (letter: string) => {
    if (inputRef.current) {
      let cursorPositionValue = 0;

      if (inputRef.current.selectionStart !== null) {
        cursorPositionValue = inputRef.current.selectionStart + 1;
      }

      inputRef.current.setRangeText(letter);
      inputRef.current.selectionStart = inputRef.current.selectionEnd = cursorPositionValue;
      inputRef.current.focus();
    }
  };

  const handleClearButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div className={styles.inputContainer}>
        <input
          defaultValue={query}
          className={styles.input}
          type="text"
          placeholder="Введите слово"
          ref={inputRef}
          dir="auto"
        />
        <div
          className={cn(styles.keyboardIconContainer, {
            [styles.open]: isKeyboardOpen,
          })}
        >
          <svg
            className={styles.keyboardIcon}
            width="40"
            height="24"
            viewBox="0 0 40 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleKeyboardIconClick}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.95838 0.111249C2.22289 0.293041 1.75347 0.558685 1.21806 1.09631C0.927889 1.38763 0.599057 1.82273 0.476057 2.07795C-0.0158578 3.09885 5.87985e-05 2.76644 5.87985e-05 12.0103C5.87985e-05 20.9315 0.000725448 20.9482 0.383808 21.8172C0.63464 22.3863 1.47564 23.2306 2.08339 23.5235C3.13363 24.0298 1.99647 23.9997 20.0134 23.9997C31.9491 23.9997 36.6134 23.9737 36.9334 23.9055C37.6982 23.7423 38.2287 23.453 38.7821 22.8973C39.0721 22.6062 39.401 22.1711 39.5239 21.9158C40.0159 20.8949 39.9999 21.2274 39.9999 11.9835C39.9999 6.06845 39.9719 3.3695 39.907 3.06143C39.6028 1.61434 38.499 0.512258 36.9616 0.120668C36.5253 0.00947528 34.4555 -0.00502795 19.92 0.00122349C7.09037 0.00672475 3.28147 0.0313971 2.95838 0.111249ZM36.7008 2.82812C36.8342 2.89689 37.0217 3.05901 37.1175 3.18846C37.2915 3.42359 37.2916 3.43226 37.2916 11.9405C37.2916 21.2611 37.3194 20.7367 36.8064 21.1165L36.571 21.2907H20.0564C1.95464 21.2907 3.26922 21.3279 2.88255 20.8053C2.70855 20.5702 2.70838 20.5623 2.70838 11.9969C2.70838 3.45702 2.70905 3.42293 2.88097 3.18846C2.97588 3.05901 3.18213 2.88739 3.3393 2.80703C3.60913 2.66909 4.53804 2.66217 20.0417 2.68201C34.4429 2.70051 36.488 2.71843 36.7008 2.82812ZM5.33338 6.66234V7.99598H6.66671H8.00004V6.66234V5.3287H6.66671H5.33338V6.66234ZM10.6667 6.66234V7.99598H12H13.3334V6.66234V5.3287H12H10.6667V6.66234ZM16 6.66234V7.99598H17.3333H18.6667V6.66234V5.3287H17.3333H16V6.66234ZM21.3333 6.66234V7.99598H22.6667H24V6.66234V5.3287H22.6667H21.3333V6.66234ZM26.6666 6.66234V7.99598H28H29.3333V6.66234V5.3287H28H26.6666V6.66234ZM32 6.66234V7.99598H33.3333H34.6666V6.66234V5.3287H33.3333H32V6.66234ZM5.33338 11.9969V13.3305H6.66671H8.00004V11.9969V10.6633H6.66671H5.33338V11.9969ZM10.6667 11.9969V13.3305H12H13.3334V11.9969V10.6633H12H10.6667V11.9969ZM16 11.9969V13.3305H17.3333H18.6667V11.9969V10.6633H17.3333H16V11.9969ZM21.3333 11.9969V13.3305H22.6667H24V11.9969V10.6633H22.6667H21.3333V11.9969ZM26.6666 11.9969V13.3305H28H29.3333V11.9969V10.6633H28H26.6666V11.9969ZM32 11.9969V13.3305H33.3333H34.6666V11.9969V10.6633H33.3333H32V11.9969ZM5.33338 17.3315V18.6651H6.66671H8.00004V17.3315V15.9978H6.66671H5.33338V17.3315ZM10.6667 17.3315V18.6651H20H29.3333V17.3315V15.9978H20H10.6667V17.3315ZM32 17.3315V18.6651H33.3333H34.6666V17.3315V15.9978H33.3333H32V17.3315Z"
              fill="currentColor"
            />
          </svg>
        </div>
        {isKeyboardOpen && (
          <Keyboard
            onButtonClick={handleKeyboardButtonClick}
            onClearButtonClick={handleClearButtonClick}
            onSearchButtonClick={handleSearchButtonClick}
          />
        )}
        <button
          className={styles.button}
          type="button"
          onClick={handleSearchButtonClick}
        >
          <Image
            className={styles.buttonIcon}
            src={searchButtonIcon}
            alt="Кнопка поиска"
            width={24}
            height={24}
          />
        </button>
      </div>
      {router.pathname === '/words' ? (
        <p className={styles.foundCount}>
          Количество совпадений: {count ? count : 0}
        </p>
      ) : (
        <p className={styles.randomQuery}>
          Случайные запросы:{' '}
          <Link href="/words?searchQuery=كتاب">
            <span className={styles.randomQueryArabic}>كتاب</span>
          </Link>{' '}
          или книга
        </p>
      )}
    </>
  );
}

export default Search;
