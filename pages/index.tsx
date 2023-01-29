import Search from '@/components/search';
import Social from '@/components/social';
import styles from '../styles/home.module.scss';

function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainWrapper}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            Платформа для изучения
            <br />
            арабского языка
          </h1>
          <p className={styles.subtitle}>
            Наша цель - облегчить изучение арабского языка
            <br />и сделать его доступным для русскоязычных мусульман
          </p>
        </div>
        <section className={styles.searchContainer}>
          <Search />
        </section>
        <div className={styles.planButtonContainer}>
          <button className={styles.planButton} type="button">
            План обучения
          </button>
        </div>
        <Social /> 
      </div>
    </main>
  );
}

export default Home;
