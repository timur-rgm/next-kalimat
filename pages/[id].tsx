import CardHeader from '@/components/cardHeader';
import CardContent from '@/components/cardContent';
import styles from '@/styles/components/word.module.scss';

function Word(): JSX.Element {
  return (
    <main className={styles.root}>
      <div className={styles.wrapper}>
        <CardHeader />
        <CardContent />
      </div>
    </main>
  );
}

export default Word;
