import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './services/firebase';

import './styles/global.scss';
import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
