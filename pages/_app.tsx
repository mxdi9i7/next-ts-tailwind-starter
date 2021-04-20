import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import AxiosHelper from '../services/config';
import Notification from '../components/Notification';
import { globalAuthToken } from '../state';
import { useState } from '@hookstate/core';
import { useRouter } from 'next/router';
import { Persistence } from '@hookstate/persistence';

export const isBrowser = typeof window !== 'undefined';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const authToken = useState(globalAuthToken);
  const router = useRouter();

  useEffect(() => {
    if (isBrowser) {
      authToken.attach(Persistence('state.authToken'));
      if (authToken.value) {
        AxiosHelper.setAxiosHeader({ token: authToken.value });
      } else {
        router.push('/login');
      }
    }
    AxiosHelper.setAxiosBaseUrl();
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <Notification />
    </>
  );
};

export default MyApp;
