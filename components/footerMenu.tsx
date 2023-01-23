import styles from '../styles/components/footerMenu.module.scss';

function FooterMenu(): JSX.Element {
  return (
    <ul className={styles.root}>
      <li>Главная</li>
      <li>О проекте</li>
      <li>Словарь</li>
      <li>План изучения арабского</li>
      <li>Библиотека</li>
      <li>F.A.Q.</li>
      <li>Курсы</li>
      <li>Контакты</li>
    </ul>
  );
}

export default FooterMenu;
