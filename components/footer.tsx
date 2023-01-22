import FooterLogo from './footerLogo';
import Social from './social';
import Image from 'next/image';
import instaImg from '../public/images/insta-icon.svg';
import telegramImg from '../public/images/telegram-icon.svg';
import youtubeImg from '../public/images/youtube-icon.svg';
import styles from '../styles/components/footer.module.scss';

function Footer(): JSX.Element {
  return (
    <footer className={styles.root}>
      <div className={styles.wrapper}>
        <FooterLogo />
        <Social />

        <div className={styles.footerMenuContainer}></div>

        <div className={styles.copyright}></div>

        <div className={styles.apps}></div>
      </div>
    </footer>
  );
}

export default Footer;
