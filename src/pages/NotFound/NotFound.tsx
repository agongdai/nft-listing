import React from 'react';
import withError from 'components/Error/withError';
import Layout from 'components/Layout';
import { Helmet } from 'react-helmet';

function NotFound() {
  return (
    <Layout>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      Page Not Found
    </Layout>
  );
}

export default withError(NotFound);
