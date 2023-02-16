import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Authentication from './components/container/Authentication/Authentication';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Authentication />
  </React.StrictMode>
);

