import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { EstiloGlobal } from './global';


ReactDOM.render(
  <React.StrictMode>
    <EstiloGlobal />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);