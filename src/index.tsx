import React from 'react';
import ReactDOM from 'react-dom';

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
  ReactDOM.render(
    //<React.StrictMode>
    <App />,
    //</React.StrictMode>,
    document.getElementById('root'),
  );
})();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
