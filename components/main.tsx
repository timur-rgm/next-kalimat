import Input from './input';
import Settings from './settings';
import styles from '../styles/components/main.module.scss';

function Main() {
  return (
    <main className={styles.root}>
      <div className={styles.wrapper}>
        <section className={styles.searchContainer}>
          <Input />
          <Settings />
        </section>
      </div>
    </main>
  );
}

export default Main;
