import Image from 'next/image';
import styles from '../styles/components/logo.module.scss';
import logoImg from '../public/images/logo.svg';

function Logo(): JSX.Element {
  return (
    <div>
      <Image
        className={styles.logoImg}
        src={logoImg}
        alt="Логотип Калимат"
        width={128}
        height={36}
      />
    </div>
  );
}

export default Logo;
