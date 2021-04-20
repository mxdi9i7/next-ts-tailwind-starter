import { useState } from '@hookstate/core';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Example from '../components/Example';

const Home: React.FC = () => {
  return (
    <div className='container'>
      <Head>
        <title>Landing page</title>
      </Head>
      <Example />
    </div>
  );
};

export default Home;
