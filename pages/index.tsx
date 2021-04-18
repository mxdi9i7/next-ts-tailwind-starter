import Head from 'next/head';
import React from 'react';
import Example from '../components/Example';

const Home: React.FC = () => {
  return (
    <div className='container'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
      </Head>

      <Example />
    </div>
  );
};

export default Home;
