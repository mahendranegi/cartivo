import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProvideContext from './context/ProvideContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProvideContext>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ProvideContext>
);

