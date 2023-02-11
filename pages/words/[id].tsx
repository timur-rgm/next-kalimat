import { GetServerSideProps } from 'next';
import CardHeader from '@/components/cardHeader';
import CardContent from '@/components/cardContent';
import { WordType } from '@/types/word';
import styles from '@/styles/components/word.module.scss';

type WordPropsType = {
  word: WordType;
};

function Word({ word }: WordPropsType): JSX.Element {
  return (
    <main className={styles.root}>
      <div className={styles.wrapper}>
        <CardHeader word={word} />
        <CardContent word={word} />
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;

  const response = await fetch(`https://stage.kalimat.io/api/dictionary/${id}`);
  const data = await response.json();

  return {
    props: {
      word: data,
    },
  };
};

export default Word;
