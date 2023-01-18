import Image from 'next/image';
import styles from '../styles/components/navigation.module.scss';
import helpIcon from '../public/images/help-icon.svg';
import toggleIcon from '../public/images/menu-burger-icon.svg';

function Navigation(): JSX.Element {
  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        <li>Библиотека</li>
        <li>Курсы</li>
        <li>Разделы</li>
        <li>
          <Image
            className={styles.helpIcon}
            src={helpIcon}
            alt="Иконка авторизации"
            width={24}
            height={24}
          />
        </li>
      </ul>
      <button className={styles.toggleButton} type="button">
        <Image
          className={styles.toggleIcon}
          src={toggleIcon}
          alt="Иконка открытия меню"
          width={28}
          height={28}
        />
      </button>
    </nav>
  );
}

export default Navigation;
