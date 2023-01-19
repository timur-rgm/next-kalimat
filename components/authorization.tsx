import Image from 'next/image';
import styles from '../styles/components/authorization.module.scss';
import accountIcon from '../public/images/account-icon.svg';

function Authorization(): JSX.Element {
  return (
    <div>
      <button className={styles.buttonAuthorization}>Войти</button>
      <button className={styles.buttonAccount} type="button">
        <Image
          className={styles.accountIcon}
          src={accountIcon}
          alt="Иконка входа в аккаунт"
          width={20}
          height={24}
        />
      </button>
    </div>
  );
}

export default Authorization;
