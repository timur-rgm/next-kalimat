import Link from 'next/link';
import styles from '../styles/components/footerMenu.module.scss';

function FooterMenu(): JSX.Element {
  return (
    <ul className={styles.root}>
      <li>
        <Link href="#">Главная</Link>
      </li>
      <li>
        <Link href="#">О проекте</Link>
      </li>
      <li>
        <Link href="#">Словарь</Link>
      </li>
      <li>
        <Link href="#">План изучения арабского</Link>
      </li>
      <li>
        <Link href="#">Библиотека</Link>
      </li>
      <li>
        <Link href="#">F.A.Q.</Link>
      </li>
      <li>
        <Link href="#">Курсы</Link>
      </li>
      <li>
        <Link href="#">Контакты</Link>
      </li>
    </ul>
  );
}

export default FooterMenu;
