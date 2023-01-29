import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchWords } from '@/store/data/async';
import { getSearchValue } from '@/store/process/selectors';
import { useAppDispatch } from '@/store/store';
import Search from '@/components/search';
import Settings from '@/components/settings';
import CardList from '@/components/cardList';
import NotFound from '@/components/notFound';
import styles from '@/styles/words.module.scss';

export default function Words() {
  const searchValue = useSelector(getSearchValue);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWords(searchValue));
  }, [searchValue]);

  return (
    <main className={styles.main}>
      <div className={styles.mainWrapper}>
        <section className={styles.searchContainer}>
          <Search />
          <Settings />
        </section>
        <section className={styles.cardListContainer}>
          <CardList />
          {/* <NotFound /> */}
        </section>
      </div>
    </main>
  );
}

// export async function getServerSideProps(context: any) {
//   const query = context.query.searchQuery;

//   if (query) {
//     const response = await fetch(
//       `https://kalimat.io/api/dictionary/search?searchQuery=${query}&mode=default`
//     );
//     const data = await response.json();

//     return {
//       props: {
//         words: data,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// }
