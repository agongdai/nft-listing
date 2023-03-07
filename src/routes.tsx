import React, { lazy, Suspense } from 'react';
import Loading from 'pages/Loading';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));
const Expired = lazy(() => import('pages/Expired/Expired'));

export default function PublicRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/expired' component={Expired} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}
