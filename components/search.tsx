import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Keyboard from './keyboard';
import searchButtonIcon from '../public/images/search-button-icon.svg';
import keyboardIcon from '../public/images/keyboard-icon.svg';
import styles from '../styles/components/search.module.scss';

function Search({ query }: any) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [isKeyboardOpen, setIsKeyboardOpen] = useState<boolean>(false);

  const router = useRouter();

  // useEffect(() => {
  //   setInputValue(router.query.searchQuery as string);
  // }, []);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSearchButtonClick = () => {
    inputValue
      ? router.push(`/words?searchQuery=${inputValue}`)
      : router.push(`/words`);
    setIsKeyboardOpen(false);
  };

  const handleKeyboardIconClick = () => {
    setIsKeyboardOpen((prev) => !prev);
  };

  const handleKeyboardButtonClick = (letter: string) => {
    setInputValue((prev) => prev + letter);
    inputRef.current?.focus();
  };

  const handleClearButtonClick = () => {
    setInputValue('');
    inputRef.current?.focus();
  };

  return (
    <>
      <div className={styles.inputContainer}>
        <input
          defaultValue={query}
          value={inputValue}
          className={styles.input}
          type="text"
          placeholder="Введите слово"
          onChange={(evt) => handleInputChange(evt.target.value)}
          ref={inputRef}
        />
        <Image
          className={styles.keyboardIcon}
          src={keyboardIcon}
          alt="Иконка клавиатуры"
          width={40}
          height={24}
          onClick={handleKeyboardIconClick}
        />
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
      <p className={styles.randomQuery}>
        Случайные запросы:{' '}
        <Link href="/words?searchQuery=كتاب">
          <span className={styles.randomQueryArabic}>كتاب</span>
        </Link>{' '}
        или книга
      </p>
    </>
  );
}

export default Search;
