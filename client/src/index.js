import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import TrackfullyBackofficeApp from './components/base/trackfully_backoffice_app/trackfully_backoffice_app_component';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <TrackfullyBackofficeApp />
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
