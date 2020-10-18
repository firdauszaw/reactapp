import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HeadNav from './HeadNav';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <div>
    <HeadNav />
    <App />
  </div>,
  document.getElementById('root')
);

