import CardHeader from '@/components/cardHeader';
import CardContent from '@/components/cardContent';
import styles from '@/styles/components/word.module.scss';

function Word({word}: any): JSX.Element {
  return (
    <main className={styles.root}>
      <div className={styles.wrapper}>
        <CardHeader word={word}/>
        <CardContent word={word}/>
      </div>
    </main>
  );
}

export async function getServerSideProps(context: any) {
  const id = context.params?.id;

  const response = await fetch(`https://stage.kalimat.io/api/dictionary/${id}`);
  const data = await response.json();

  return {
    props: {
      word: data,
    },
  };
}

export default Word;
