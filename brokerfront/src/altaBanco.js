import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppAltaBanco from './AppAltaBanco';

const rootaltaBanco = ReactDOM.createRoot(document.getElementById('root-altaBanco'));
rootaltaBanco.render(
  <React.StrictMode>
    <AppAltaBanco/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals