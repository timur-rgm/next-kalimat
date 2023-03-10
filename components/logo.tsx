import Link from 'next/link';
import Image from 'next/image';
import logoImg from '../public/images/logo.svg';
import styles from '../styles/components/logo.module.scss';

function Logo(): JSX.Element {
  return (
    <div className={styles.root}>
      <Link href="/">
        <Image
          className={styles.logoImg}
          src={logoImg}
          alt="Логотип Калимат"
          width={128}
          height={36}
        />
      </Link>
    </div>
  );
}

export default Logo;
