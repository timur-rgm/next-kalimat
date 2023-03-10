import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ModalMenu from './modalMenu';
import helpIcon from '../public/images/help-icon.svg';
import toggleIcon from '../public/images/menu-burger-icon.svg';
import closeIcon from '../public/images/close-icon.svg';
import styles from '../styles/components/navigation.module.scss';

function Navigation(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleNavMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        <li>
          <Link href="#">Библиотека</Link>
        </li>
        <li>
          <Link href="#">Курсы</Link>
        </li>
        <li>
          <Link href="#">Разделы</Link>
        </li>
        <li>
          <Link href="#">
            <Image
              className={styles.helpIcon}
              src={helpIcon}
              alt="Иконка справки"
              width={24}
              height={24}
            />
          </Link>
        </li>
      </ul>
      <button className={styles.toggleButton} type="button">
        {isMenuOpen ? (
          <Image
            className={styles.closeIcon}
            src={closeIcon}
            alt="Иконка закрытия меню"
            width={20}
            height={21}
            onClick={handleNavMenuClick}
          />
        ) : (
          <Image
            className={styles.toggleIcon}
            src={toggleIcon}
            alt="Иконка открытия меню"
            width={28}
            height={28}
            onClick={handleNavMenuClick}
          />
        )}
      </button>
      {isMenuOpen && <ModalMenu onCloseIconClick={handleNavMenuClick} />}
    </nav>
  );
}

export default Navigation;
