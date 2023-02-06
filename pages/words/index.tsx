import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue, setModeArabic } from '@/store/process/slice';
import Search from '@/components/search';
import Settings from '@/components/settings';
import CardList from '@/components/cardList';
import NotFound from '@/components/notFound';
import styles from '@/styles/words.module.scss';

export default function Words({ words, searchValue, modeArabic }: any) {
  const wordsCount = words?.length;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchValue(searchValue));
    modeArabic && dispatch(setModeArabic(modeArabic));
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.mainWrapper}>
        <section className={styles.searchContainer}>
          <Search value={searchValue} count={wordsCount} />
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
  const searchValue = context.query.searchQuery;
  let modeArabic = '';
  
  if (context.query.modeArabic) {
    modeArabic = context.query.modeArabic;
  }

  if (searchValue) {
    const response = await fetch(
      `https://kalimat.io/api/dictionary/search?searchQuery=${searchValue}&mode=${
      modeArabic ? modeArabic : 'exact'
      }`
    );
    const data = await response.json();

    return {
      props: {
        words: data.words,
        searchValue,
        modeArabic,
      },
    };
  }

  return {
    props: {},
  };
}
