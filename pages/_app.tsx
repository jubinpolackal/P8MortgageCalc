import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout';
import { StateProvider } from '../globalState/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (<StateProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </StateProvider>
         );
}

export default MyApp
