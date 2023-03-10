import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import store from '@/store'

import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
