import Image from 'next/image';
import Logo from './logo';
import styles from '../styles/components/header.module.scss';
import logoImg from '../public/images/logo.svg';
import helpIcon from '../public/images/help-icon.svg';

// Произвести декопмозицию
// Сверстать планшетную и мобильную версии

function Header(): JSX.Element {
  return (
    <header className={styles.root}>
      <div className={styles.wrapper}>
        <Logo />
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
