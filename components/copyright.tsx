import styles from '../styles/components/copyright.module.scss';

function Copyright(): JSX.Element {
  return (
    <div className={styles.root}>
      <p className={styles.heading}>© Все права защищены</p>
      <p className={styles.desc}>
        Любое копирование и воспроизведение текста, фото, аудио, видео и
        графических материалов, в том числе частичное и в любых формах без
        письменного разрешения правообладателя запрещено.
      </p>
    </div>
  );
}

export default Copyright;
