import React from 'react';
import { createRoot } from 'react-dom/client';

import { IS_PROD } from './config/constants';
import App from './App';
import * as serviceWorker from './serviceWorker';

if (IS_PROD) {
  console.log = function () {
    // do nothing.
  };
  console.time = function () {
    // do nothing.
  };
  console.timeEnd = function () {
    // do nothing.
  };
}

(async () => {
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(<App />);
})();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
