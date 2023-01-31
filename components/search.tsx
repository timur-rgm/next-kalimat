import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../store/process/slice';
import { useRouter } from 'next/router';
import Image from 'next/image';
import searchButtonIcon from '../public/images/search-button-icon.svg';
import keyboardIcon from '../public/images/keyboard-icon.svg';
import styles from '../styles/components/search.module.scss';
import { useSelector } from 'react-redux';
import { getSearchValue } from '@/store/process/selectors';
import Link from 'next/link';

function Search({ query }: any) {
  const router = useRouter();

  const [inputValue, setInputValue] = useState<string>('');

  const searchValue = useSelector(getSearchValue);
  const dispatch = useDispatch();

  useEffect(() => {
    setInputValue(searchValue);
  }, []);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleButtonClick = () => {
    dispatch(setSearchValue(inputValue));
    inputValue
      ? router.push(`/words?searchQuery=${inputValue}`)
      : router.push(`/words`);
  };

  return (
    <>
      <div className={styles.inputContainer}>
        <input
          defaultValue={query}
          className={styles.input}
          type="text"
          placeholder="Введите слово"
          onChange={(evt) => handleInputChange(evt.target.value)}
        />
        <Image
          className={styles.keyboardIcon}
          src={keyboardIcon}
          alt="Иконка клавиатуры"
          width={40}
          height={24}
        />
        <button
          className={styles.button}
          type="button"
          onClick={handleButtonClick}
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
