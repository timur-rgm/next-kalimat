import Logo from './logo';
import Navigation from './navigation';
import Authorization from './authorization';
import styles from '../styles/components/header.module.scss';

// Сверстать планшетную и мобильную версии

function Header(): JSX.Element {
  return (
    <header className={styles.root}>
      <div className={styles.wrapper}>
        <Logo />
        <div className={styles.menuContainer}>
          <Navigation />
          <Authorization />
        </div>
      </div>
    </header>
  );
}

export default Header;
