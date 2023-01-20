import { useState } from 'react';
import Image from 'next/image';
import helpIcon from '../public/images/help-icon.svg';
import toggleIcon from '../public/images/menu-burger-icon.svg';
import closeIcon from '../public/images/close-icon.svg';
import styles from '../styles/components/navigation.module.scss';
import cn from 'classnames';

function Navigation(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleNavMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.root}>
      <ul className={cn(styles.list, { [styles.listOpened]: isMenuOpen })}>
        <li>Библиотека</li>
        <li>Курсы</li>
        <li>Разделы</li>
        <li>
          <Image
            className={styles.helpIcon}
            src={helpIcon}
            alt="Иконка справки"
            width={24}
            height={24}
          />
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
    </nav>
  );
}

export default Navigation;
