import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import { CarProvider } from './hooks/useCars';
import { TrafficProvider } from './hooks/useTraffic';

function App() {
  return (
    <div className="container">
      <CarProvider>
        <Cars />
      </CarProvider>

      <TrafficProvider>
        <TrafficSignal />
      </TrafficProvider>
    </div>
  );
}

export default App;
