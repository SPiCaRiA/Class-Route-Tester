/**
 * @flow strict-local
 * @author Weixuan Lin
 */

import AnalyticsPage from 'AnalyticsPage.react';
import TesterPage from 'TesterPage.react';

import axios from 'axios';
import * as React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

export default function App(): React.MixedElement {
  // Set globals.
  window.__DEV__ = process.env.NODE_ENV === 'development';
  axios.defaults.baseURL = window.__DEV__
    ? 'http://127.0.0.1:5000/api'
    : process.env.REACT_APP_API_DOMAIN;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TesterPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route
          path="*"
          element={
            // Fallbacks to the tester page.
            <TesterPage />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
