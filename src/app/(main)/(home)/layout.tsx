import React from 'react';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-site-bg">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
