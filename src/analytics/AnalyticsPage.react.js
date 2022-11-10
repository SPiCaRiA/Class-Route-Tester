/**
 * @flow strict-local
 * @author Daniel Tat
 */

import 'AnalyticsPage.react.css';

import * as React from 'react';

type Props = $ReadOnly<{}>;

export default function AnalyticsPage(_props: Props): React.MixedElement {
  return (
    <div className="page-heading">
      <div className="page-formatter">
        <div className="page-formatter-1">
          <div className="header-container">
            <span className="class-route-tester-header">ClassRoute Tester</span>
          </div>
        </div>
      </div>
    </div>
  );
}
