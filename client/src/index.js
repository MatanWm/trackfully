import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TrackfullyBackofficeApp from './components/Trackfully_backoffice_app/trackfully_backoffice_app_component';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <TrackfullyBackofficeApp />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
