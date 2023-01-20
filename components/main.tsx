import Image from 'next/image';
import Input from './input';
import settingsIcon from '../public/images/settings-icon.svg';
import styles from '../styles/components/main.module.scss';

function Main() {
  return (
    <main className={styles.root}>
      <div className={styles.wrapper}>
        <section className={styles.searchContainer}>
          <Input />

          <div className={styles.settings}>
            <Image
              className={styles.settingsIcon}
              src={settingsIcon}
              alt="Иконка открытия меню"
              width={40}
              height={40}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;
