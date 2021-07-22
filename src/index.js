import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CarProvider } from './hooks/useCars.jsx';

ReactDOM.render(
  <React.StrictMode>
    <CarProvider>
      <App />
    </CarProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
