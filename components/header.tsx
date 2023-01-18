import Image from 'next/image';
import styles from '../styles/components/header.module.scss';
import logoImg from '../public/images/logo.svg';
import helpIcon from '../public/images/help-icon.svg';

function Header() {
  return (
    <header className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logoImg}
            src={logoImg}
            alt="Логотип Калимат"
            width={128}
            height={36}
          />
        </div>

        <div className={styles.menuContainer}>
          <nav className={styles.navigationContainer}>
            <ul className={styles.navigationList}>
              <li>Библиотека</li>
              <li>Курсы</li>
              <li>Разделы</li>
              <li>
                <Image
                  className={styles.helpIcon}
                  src={helpIcon}
                  alt="Справка"
                  width={24}
                  height={24}
                />
              </li>
            </ul>
          </nav>
          <div className={styles.authorizationContainer}>
            <button className={styles.authorizationButton}>Войти</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
