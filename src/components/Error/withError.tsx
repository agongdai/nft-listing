import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Error from './Error';

const withError = (PageComp: (() => JSX.Element) | React.ComponentClass) => {
  return () => (
    <ErrorBoundary FallbackComponent={Error}>
      <PageComp />
    </ErrorBoundary>
  );
};

export default withError;
