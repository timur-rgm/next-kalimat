import Image from 'next/image';
import Link from 'next/link';
import logoImg from '../public/images/footer-logo.svg';
import styles from '../styles/components/footerLogo.module.scss';

function FooterLogo(): JSX.Element {
  return (
    <div className={styles.root}>
      <Link href="#">
        <Image
          className={styles.logo}
          src={logoImg}
          alt="Логотип Калимат"
          width={41}
          height={62}
        />
        </Link>
        <Link href="#">
        <div className={styles.title}>
          <h3>Kalimat</h3>
          <p>
            Платформа для изучения
            <br />
            арабского языка
          </p>
        </div>
      </Link>
    </div>
  );
}

export default FooterLogo;
