import Image from 'next/image';
import logoImg from '../public/images/footer-logo.svg';
import styles from '../styles/components/footer.module.scss';

function FooterLogo(): JSX.Element {
  return (
    <div className={styles.root}>
      <Image
        className={styles.logo}
        src={logoImg}
        alt="Логотип Калимат"
        width={41}
        height={62}
      />
      <div className={styles.title}>
        <h3>Kalimat</h3>
        <p>
          Платформа для изучения
          <br />
          арабского языка
        </p>
      </div>
    </div>
  );
}

export default FooterLogo;
