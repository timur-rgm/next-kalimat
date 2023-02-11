import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  setSearchValue,
  setModeArabic,
  setModeCyrillic,
} from '@/store/process/slice';
import Search from '@/components/search';
import Settings from '@/components/settings';
import CardList from '@/components/cardList';
import NotFound from '@/components/notFound';
import { SearchModesArabic, SearchModesTranslation } from '@/const';
import { isStringCyrillic } from '@/utils';
import { WordType } from '@/types/word';
import styles from '@/styles/words.module.scss';

type WordsPropsType = {
  words: WordType[];
  searchQuery: string;
  modeQuery: SearchModesArabic & SearchModesTranslation;
};

function Words({ words, searchQuery, modeQuery }: WordsPropsType) {
  const wordsCount = words?.length;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchValue(searchQuery));

    const isSearchQueryCyrillic = isStringCyrillic(searchQuery);

    isSearchQueryCyrillic
      ? dispatch(setModeCyrillic(modeQuery))
      : dispatch(setModeArabic(modeQuery));
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.mainWrapper}>
        <section className={styles.searchContainer}>
          <Search value={searchQuery} count={wordsCount} />
          <Settings />
        </section>
        <section className={styles.cardListContainer}>
          {wordsCount > 0 ? <CardList words={words} /> : <NotFound />}
        </section>
      </div>
    </main>
  );
}

export async function getServerSideProps(context: any) {
  const searchQuery = context.query.search;
  const modeQuery = context.query.mode;

  if (searchQuery) {
    const response = await fetch(
      `https://kalimat.io/api/dictionary/search?searchQuery=${searchQuery}&mode=${modeQuery}`
    );

    const { words } = await response.json();

    return {
      props: {
        words,
        searchQuery,
        modeQuery,
      },
    };
  }

  return {
    props: {},
  };
}

export default Words;
