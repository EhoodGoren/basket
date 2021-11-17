import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Header from './Header';
import Content from './Content';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Content />
    {/* <footer /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
