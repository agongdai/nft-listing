import React, { memo } from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';

interface Props {
  children: React.ReactNode;
  withHeader?: boolean;
  withFooter?: boolean;
}

const Layout = ({ children, withHeader = false, withFooter = true }: Props) => {
  return (
    <main>
      {withHeader && <Header />}
      {children}
      {withFooter && <Footer />}
    </main>
  );
};

export default memo(Layout);
