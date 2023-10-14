import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
  <Router>
    <App />
  </Router>
);
