import Image from 'next/image';
import appStoreImg from '../public/images/app-store-icon.svg';
import googlePlayImg from '../public/images/google-play-icon.svg';
import styles from '../styles/components/ourApps.module.scss';

function OurApps(): JSX.Element {
  return (
    <div>
      <ul className={styles.list}>
        <li>
          <Image
            className={styles.appStoreIcon}
            src={appStoreImg}
            alt="Иконка приложения в App Store"
            width={164}
            height={54}
          />
        </li>
        <li>
          <Image
            className={styles.googlePlayIcon}
            src={googlePlayImg}
            alt="Иконка приложения в Google Play"
            width={177}
            height={54}
          />
        </li>
      </ul>
    </div>
  );
}

export default OurApps;
