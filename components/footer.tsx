import FooterLogo from './footerLogo';
import Social from './social';
import FooterMenu from './footerMenu';
import Copyright from './copyright';
import OurApps from './ourApps';
import styles from '../styles/components/footer.module.scss';

function Footer(): JSX.Element {
  return (
    <footer className={styles.root}>
      <div className={styles.wrapper}>
        <FooterLogo />
        <Social />
        <FooterMenu />
        <Copyright />
        <OurApps />
      </div>
    </footer>
  );
}

export default Footer;
