import React from 'react';
import ReactDOM from 'react-dom';
import './Style/index.css';
import './Style/Media.css'
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
 
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
 