import { NextPage } from 'next';
import { ReactNode } from 'react';
import Navbar from '../Navbar';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='container mx-auto py-2'>{children}</main>
    </>
  );
};

export default Layout;
