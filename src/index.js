import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Favicon from 'react-favicon';

ReactDOM.render(
  <>
    <Favicon url='https://files.leader.codes/favicon.ico' />

    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
