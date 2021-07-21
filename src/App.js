import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import { CarProvider } from './contexts/CarContext';

function App() {
  return (
    <div className="container">
      <CarProvider>
        <Cars />
      </CarProvider>
      <TrafficSignal />
    </div>
  );
}

export default App;
