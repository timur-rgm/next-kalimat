import Search from '@/components/search';
import Settings from '@/components/settings';
import CardList from '@/components/cardList';
import NotFound from '@/components/notFound';
import styles from '@/styles/words.module.scss';

export default function Words({ words, query }: any) {
  const wordsCount = words?.length;

  return (
    <main className={styles.main}>
      <div className={styles.mainWrapper}>
        <section className={styles.searchContainer}>
          <Search query={query} count={wordsCount} />
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
  const query = context.query.searchQuery;

  if (query) {
    const response = await fetch(
      `https://kalimat.io/api/dictionary/search?searchQuery=${query}&mode=default`
    );
    const data = await response.json();

    return {
      props: {
        words: data.words,
        query,
      },
    };
  }

  return {
    props: {},
  };
}
