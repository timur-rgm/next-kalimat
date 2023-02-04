import Image from 'next/image';
import closeIcon from '../public/images/close-icon.svg';
import logoImg from '../public/images/logo.svg';
import styles from '../styles/components/modalMenu.module.scss';

type ModalMenuPropsType = {
  onCloseIconClick: () => void;
};

function ModalMenu({ onCloseIconClick }: ModalMenuPropsType) {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Image
            className={styles.logoIcon}
            src={logoImg}
            alt="Логотип Kalimat"
            width={65}
            height={18}
          />
          <Image
            className={styles.closeIcon}
            src={closeIcon}
            alt="Иконка закрытия меню"
            width={13}
            height={13}
            onClick={onCloseIconClick}
          />
        </div>
        <ul className={styles.menuList}>
          <li>Библиотека</li>
          <li>Курсы</li>
          <li>Разделы</li>
          <li>Курсы</li>
          <li>Коран</li>
          <li>Справочник </li>
        </ul>
      </div>
    </div>
  );
}

export default ModalMenu;
