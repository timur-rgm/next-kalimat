import { useRouter } from 'next/router';
import Logo from './logo';
import Navigation from './navigation';
import Authorization from './authorization';
import FooterLogo from './footerLogo';
import Social from './social';
import FooterMenu from './footerMenu';
import Copyright from './copyright';
import OurApps from './ourApps';
import styles from '../styles/layout.module.scss';
import cn from 'classnames';

type LayoutPropsType = {
  children: JSX.Element;
};

function Layout({ children }: LayoutPropsType): JSX.Element {
  const { pathname } = useRouter();

  return (
    <>
      <header
        className={cn(styles.header, { [styles.headerBlue]: pathname === '/' })}
      >
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
          <div className={styles.socialContainer}>
            <Social />
          </div>
          <FooterMenu />
          <Copyright />
          <OurApps />
        </div>
      </footer>
    </>
  );
}

export default Layout;
