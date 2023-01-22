import Image from 'next/image';
import instaImg from '../public/images/insta-icon.svg';
import telegramImg from '../public/images/telegram-icon.svg';
import youtubeImg from '../public/images/youtube-icon.svg';
import styles from '../styles/components/social.module.scss';

function Social(): JSX.Element {
  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        <li>
          <Image
            className={styles.instaIcon}
            src={instaImg}
            alt="Иконка инстаграма"
            width={24}
            height={24}
          />
          Instagram
        </li>
        <li>
          <Image
            className={styles.telegramIcon}
            src={telegramImg}
            alt="Иконка телеграма"
            width={28.35}
            height={24}
          />
          Telegram
        </li>
        <li>
          <Image
            className={styles.youtubeIcon}
            src={youtubeImg}
            alt="Иконка ютуба"
            width={31.69}
            height={24}
          />
          YouTube
        </li>
      </ul>
    </div>
  );
}

export default Social;
