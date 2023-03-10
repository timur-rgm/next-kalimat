import { Provider } from 'react-redux';
import { store } from '../store/store';
import Layout from '@/components/layout';
import type { AppProps } from 'next/app';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
