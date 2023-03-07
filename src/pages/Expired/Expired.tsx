import React from 'react';
import withError from 'components/Error/withError';
import Layout from 'components/Layout';

function Expired() {
  return <Layout withHeader>Page Expired.</Layout>;
}

export default withError(Expired);
