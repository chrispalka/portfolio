import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import 'fontsource-roboto/latin.css';
import 'typeface-inconsolata';
import '../styles.css';
import '../normalize.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app'),
);
