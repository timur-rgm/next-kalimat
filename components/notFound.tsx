import Image from 'next/image';
import laptopSearchImg from '../public/images/laptop-search-icon.svg';
import styles from '../styles/components/notFound.module.scss';

function NotFound(): JSX.Element {
  return (
    <div className={styles.root}>
      <p className={styles.heading}>
        К сожалению по вашему запросу ничего не найдено :{`(`}
      </p>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={laptopSearchImg}
          alt="Ноутбук"
          width={300}
          height={198}
        />
      </div>
    </div>
  );
}

export default NotFound;
