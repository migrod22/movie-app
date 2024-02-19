
import { Provider as ReduxProvider } from 'react-redux';
import '../styles/globals.css'
import { SessionProvider, useSession } from 'next-auth/react';
import Navbar from '../components/Navbar';
import store from '../components/store';
import { Analytics } from '@vercel/analytics/react';


function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ReduxProvider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Analytics />
      </ReduxProvider>
    </SessionProvider>
  );
}

export default MyApp;
