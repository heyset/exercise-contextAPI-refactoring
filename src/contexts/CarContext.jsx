import React, { createContext } from 'react';

export const CarContext = createContext({});

export class CarProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: {
        blue: false,
        red: false,
        yellow: false,
      }
    }

    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car) {
    this.setState(({ cars }) => ({ cars: {...cars, [car]: !cars[car]}}))
  }

  render() {
    const { children } = this.props;
    const { cars } = this.state;

    return (
      <CarContext.Provider
        value={{
          cars,
          moveCar: this.moveCar,
        }}
      >
        { children }
      </CarContext.Provider>
    );
  }
}
