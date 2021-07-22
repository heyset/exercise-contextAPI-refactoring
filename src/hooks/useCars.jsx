import React, { createContext, useContext, useState } from 'react';

const CarContext = createContext({});

export function CarProvider ({ children }) {
  const [cars, setCars] = useState({
    blue: false,
    red: false,
    yellow: false,
  });

  function moveCar(car) {
    setCars((cars) => ({...cars, [car]: !cars[car]}));
  }

  return (
    <CarContext.Provider
      value={{
        cars,
        moveCar,
      }}
    >
      { children }
    </CarContext.Provider>
  );
}

const useCars = () => useContext(CarContext);

export default useCars;
