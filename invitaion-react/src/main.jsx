import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
    
        <App />
    
    </React.StrictMode>
  );
} else {
  console.error('Root container not found. Make sure you have a div with id="root" in your HTML.');
}