import styles from '@/styles/components/siteSections.module.scss';
import cn from 'classnames';

function SiteSections() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Разделы сайта</h2>
      <ul className={styles.list}>
        <li className={cn(styles.item, styles.dictionary)}>
          <h3>Словарь</h3>
          <p>
            Современный словарь на базе известного арабско-русского словаря
            Баранова. Помимо этого мы добавли много нового: примеры
            использования слова, спряжение и т. д.
          </p>
        </li>
        <li className={cn(styles.item, styles.library)}>
          <h3>Библиотека</h3>
          <p>
            Большое количество практического материала: книги на арабском с
            параллельным переводом на русский, тексты, видео, списки слов и
            многое другое.
          </p>
        </li>
        <li className={cn(styles.item, styles.quran, styles.isSoon)}>
          <h3>Коран</h3>
          <p>
            Глубокое погружение в языковую, а также смысловую сторону Корана,
            чтобы понять его красоту
          </p>
        </li>
        <li className={cn(styles.item, styles.courses)}>
          <h3>Курсы</h3>
          <p>
            Уроки по грамматике, морфологии и красноречию арабского языка в
            текстовом виде, дополненные видеоуроками, шархами на арабском и
            текстами.
          </p>
        </li>
        <li className={cn(styles.item, styles.liveСourses, styles.isSoon)}>
          <h3>Живые курсы</h3>
          <p>
            Групповые занятия с профессиональными преподавателями для братьев и
            сестёр: онлайн-уроки, проверка полученных знаний, экзамены
          </p>
        </li>
        <li className={cn(styles.item, styles.handbook, styles.isSoon)}>
          <h3>Справочник по грамматике</h3>
          <p>
            Здесь мы собрали и структурировали информацию обо всех аспектах
            арабской грамматики для быстрого ознакомпления с нужной темой
          </p>
        </li>
      </ul>
    </div>
  );
}

export default SiteSections;
