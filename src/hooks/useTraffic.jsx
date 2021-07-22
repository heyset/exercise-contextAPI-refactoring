import React, { createContext, useContext, useState } from 'react';

const TrafficContext = createContext({});

export function TrafficProvider({ children }) {
  const [signalColor, setSignalColor] = useState('red');

  function changeSignal(signalColor) {
    setSignalColor(signalColor);
  }

  return (
    <TrafficContext.Provider
      value={{
        signalColor,
        changeSignal,
      }}
    >
      { children }
    </TrafficContext.Provider>
  );
}

const useTraffic = () => useContext(TrafficContext);

export default useTraffic;
