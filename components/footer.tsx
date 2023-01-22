import FooterLogo from './footerLogo';
import Image from 'next/image';
import logoImg from '../public/images/footer-logo.svg';
import styles from '../styles/components/footer.module.scss';

function Footer(): JSX.Element {
  return (
    <footer className={styles.root}>
      <div className={styles.wrapper}>
        <FooterLogo />

        <div className={styles.socialsContainer}></div>

        <div className={styles.footerMenuContainer}></div>

        <div className={styles.copyright}></div>

        <div className={styles.apps}></div>
      </div>
    </footer>
  );
}

export default Footer;
