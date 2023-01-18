import Image from 'next/image';
import Logo from './logo';
import Navigation from './navigation';
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
          <Navigation />
          <div className={styles.authorizationContainer}>
            <button className={styles.authorizationButton}>Войти</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
