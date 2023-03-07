import React from 'react';
import withError from 'components/Error/withError';
import Layout from 'components/Layout';

const Home = () => {
  return (
    <Layout withHeader>
      <div>Home</div>
    </Layout>
  );
};

export default withError(Home);
