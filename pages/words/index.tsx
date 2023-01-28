import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchWords } from '@/store/data/async';
import { getSearchValue } from '@/store/process/selectors';
import { useAppDispatch } from '@/store/store';
import Main from '@/components/main';

export default function Home() {
  const searchValue = useSelector(getSearchValue);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchWords(searchValue)
    );
  }, [searchValue]);

  return <Main />;
}

// export async function getServerSideProps(context: any) {
//   const query = context.query.searchQuery;

//   if (query) {
//     const response = await fetch(
//       `https://kalimat.io/api/dictionary/search?searchQuery=${query}&mode=default`
//     );
//     const data = await response.json();

//     return {
//       props: {
//         words: data,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// }
