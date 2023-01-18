import styles from '../styles/components/authorization.module.scss';

function Authorization(): JSX.Element {
  return (
    <div>
      <button className={styles.button}>Войти</button>
    </div>
  );
}

export default Authorization;
