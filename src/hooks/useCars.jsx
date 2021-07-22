import React from 'react';
import { createContext, useContext, useState } from "react";

const CarContext = createContext({ });

export function CarProvider ({ children }) {
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });
  
  function moveCar(car) {
    setCars((cars) => ({...cars, [car]: !cars[car]}));
  }

  return (
    <CarContext.Provider
      value={{
        cars,
        moveCar: moveCar,
      }}
    >
      { children }
    </CarContext.Provider>
  )
}

const useCars = () => useContext(CarContext);

export default useCars;
