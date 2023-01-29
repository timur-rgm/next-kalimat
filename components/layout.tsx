import Logo from './logo';
import Navigation from './navigation';
import Authorization from './authorization';
import FooterLogo from './footerLogo';
import Social from './social';
import FooterMenu from './footerMenu';
import Copyright from './copyright';
import OurApps from './ourApps';
import styles from '../styles/layout.module.scss';

type LayoutPropsType = {
  children: JSX.Element;
};

function Layout({ children }: LayoutPropsType): JSX.Element {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Logo />
          <div className={styles.menuContainer}>
            <Navigation />
            <Authorization />
          </div>
        </div>
      </header>
      {children}
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <FooterLogo />
          <Social />
          <FooterMenu />
          <Copyright />
          <OurApps />
        </div>
      </footer>
    </>
  );
}

export default Layout;
