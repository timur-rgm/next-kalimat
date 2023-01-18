import Image from 'next/image';
import styles from '../styles/components/navigation.module.scss';
import helpIcon from '../public/images/help-icon.svg';

function Navigation(): JSX.Element {
  return (
    <nav>
      <ul className={styles.list}>
        <li>Библиотека</li>
        <li>Курсы</li>
        <li>Разделы</li>
        <li>
          <Image
            className={styles.helpIcon}
            src={helpIcon}
            alt="Справка"
            width={24}
            height={24}
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
