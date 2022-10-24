/**
 * @flow strict-local
 * @author Weixuan Lin
 */

import App from 'App.react';

import * as React from 'react';
import ReactDOM from 'react-dom/client';
import {RecoilRoot} from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
);
