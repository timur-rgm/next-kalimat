import Link from 'next/link';
import Image from 'next/image';
import bookIcon from '@/public/images/sections-book-icon.svg';
import booksIcon from '@/public/images/sections-books-icon.svg';
import quranIcon from '@/public/images/sections-quran-icon.svg';
import playIcon from '@/public/images/sections-play-icon.svg';
import videoChatIcon from '@/public/images/sections-video-chat-icon.svg';
import arabicArtIcon from '@/public/images/sections-arabic-art-icon.svg';
import styles from '@/styles/components/siteSections.module.scss';
import cn from 'classnames';

function SiteSections() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Разделы сайта</h2>
      <ul className={styles.list}>
        <Link href="#">
          <li className={styles.item}>
            <Image
              className={styles.icon}
              src={bookIcon}
              alt="Иконка книжки"
              width={80}
              height={80}
            />
            <h3>Словарь</h3>
            <p>
              Современный словарь на базе известного арабско-русского словаря
              Баранова. Помимо этого мы добавли много нового: примеры
              использования слова, спряжение и т. д.
            </p>
          </li>
        </Link>
        <Link href="#">
          <li className={styles.item}>
            <Image
              className={styles.icon}
              src={booksIcon}
              alt="Иконка книжкек"
              width={80}
              height={80}
            />
            <h3>Библиотека</h3>
            <p>
              Большое количество практического материала: книги на арабском с
              параллельным переводом на русский, тексты, видео, списки слов и
              многое другое.
            </p>
          </li>
        </Link>
        <Link href="#">
          <li className={cn(styles.item, styles.isSoon)}>
            <Image
              className={styles.icon}
              src={quranIcon}
              alt="Иконка Коран"
              width={80}
              height={80}
            />
            <h3>Коран</h3>
            <p>
              Глубокое погружение в языковую, а также смысловую сторону Корана,
              чтобы понять его красоту
            </p>
          </li>
        </Link>
        <Link href="#">
          <li className={styles.item}>
            <Image
              className={styles.icon}
              src={playIcon}
              alt="Иконка воспроизвести"
              width={80}
              height={80}
            />
            <h3>Курсы</h3>
            <p>
              Уроки по грамматике, морфологии и красноречию арабского языка в
              текстовом виде, дополненные видеоуроками, шархами на арабском и
              текстами.
            </p>
          </li>
        </Link>
        <Link href="#">
          <li className={cn(styles.item, styles.isSoon)}>
            <Image
              className={styles.icon}
              src={videoChatIcon}
              alt="Иконка с видео-чатом"
              width={80}
              height={80}
            />
            <h3>Живые курсы</h3>
            <p>
              Групповые занятия с профессиональными преподавателями для братьев
              и сестёр: онлайн-уроки, проверка полученных знаний, экзамены
            </p>
          </li>
        </Link>
        <Link href="#">
          <li className={cn(styles.item, styles.isSoon)}>
            <Image
              className={styles.icon}
              src={arabicArtIcon}
              alt="Иконка c арабским узором"
              width={80}
              height={80}
            />
            <h3>Справочник по грамматике</h3>
            <p>
              Здесь мы собрали и структурировали информацию обо всех аспектах
              арабской грамматики для быстрого ознакомпления с нужной темой
            </p>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default SiteSections;
