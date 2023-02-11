import Image from 'next/image';
import Search from '@/components/search';
import Social from '@/components/social';
import SiteSections from '@/components/siteSections';
import videoIcon from '@/public/images/video-play-icon.svg';
import styles from '../styles/home.module.scss';

function Home(): JSX.Element {
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
        <div className={styles.videoContainer}>
          <p className={styles.videoTitle}>Познакомьтесь с нами получше!</p>
          <Image
            className={styles.videoIcon}
            src={videoIcon}
            alt="Иконка воспроизведения видео"
            width={40}
            height={40}
          />
          <p className={styles.videoTitleTablet}>Видео о Kalimat</p>
        </div>
        <div className={styles.socialContainer}>
          <Social />
        </div>
      </div>
      <section className={styles.siteSectionsContainer}>
        <SiteSections />
      </section>
    </main>
  );
}

export default Home;
