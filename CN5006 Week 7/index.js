import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hook_ControlledButtonState from './Counter';
import EmojeeCounter from './emojieCounter';


ReactDOM.render(
  <React.StrictMode>
    <Hook_ControlledButtonState />
    <EmojeeCounter pic='Love'/>
    <EmojeeCounter pic='Sad'/>
    <EmojeeCounter pic='Like'/>
    <EmojeeCounter pic='Happy'/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

