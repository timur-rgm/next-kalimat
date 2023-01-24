import Input from './input';
import Settings from './settings';
import CardsList from './cardsList';
import NotFound from './notFound';
import styles from '../styles/components/main.module.scss';

function Main(): JSX.Element {
  return (
    <main className={styles.root}>
      <div className={styles.wrapper}>
        <section className={styles.searchContainer}>
          <Input />
          <Settings />
        </section>
        <section className={styles.cardsContainer}>
          {/* <CardsList /> */}
          <NotFound />
        </section>
      </div>
    </main>
  );
}

export default Main;
