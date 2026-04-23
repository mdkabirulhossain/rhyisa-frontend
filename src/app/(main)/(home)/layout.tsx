import React from 'react';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
