import React from 'react';
import GlobalAlert from 'components/GlobalAlert';
import Heartbeat from 'components/Heartbeat';
import SEO from 'components/SEO';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import palette from 'themes/palette';

// @todo Put light theme first
import Routes from './routes';

import 'style/tailwind.css';

// BrowserRouter should wrap components with <Link>
function App() {
  return (
    <main>
      <style>
        {`
          :root {
            --primary: ${palette.primaryMain};
            --primary-dark: ${palette.primaryDark};
            --text-primary: ${palette.textPrimary};
            --alert-red: ${palette.errorMain};
          }
        `}
      </style>
      <RecoilRoot>
        <BrowserRouter basename='/'>
          <Heartbeat />
          <SEO />
          <Routes />
          <GlobalAlert />
        </BrowserRouter>
      </RecoilRoot>
    </main>
  );
}

export default App;
