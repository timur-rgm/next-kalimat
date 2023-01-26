import { Tabs } from '@/const';
import styles from '@/styles/components/cardHeader.module.scss';

function CardHeader(): JSX.Element {
  return (
    <header className={styles.root}>
      <h1 className={styles.title}>كَتَبَ</h1>
      <ul className={styles.categoryList}>
        <li>Глагол (фи`ль)</li>
        <li>1 порода, У</li>
      </ul>
      <div className={styles.tabContainer}>
        <ul className={styles.tabList}>
          {Object.values(Tabs).map((tab, i) => (
            <li
              className={i === 0 ? `${styles.active}` : ''}
              key={`${tab} + ${i}`}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default CardHeader;
