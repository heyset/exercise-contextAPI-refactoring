// src/Cars.jsx
import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

export default class Cars extends React.Component {
  render() {
    const moveCar = () => undefined;
    let redCar, blueCar, yellowCar = false;

    return (
      <div>
        <div>
          <img
            className={redCar ? 'car-right' : 'car-left'}
            src={carRed}
            alt="red car"
          />
          <button
            onClick={() => moveCar('red', !redCar)}
            type="button"
          >
            Move
          </button>
        </div>
        <div>
          <img
            className={blueCar ? 'car-right' : 'car-left'}
            src={carBlue}
            alt="blue car"
          />
          <button
            onClick={() => moveCar('blue', !blueCar)}
            type="button"
          >
            Move
          </button>
        </div>
        <div>
          <img
            className={yellowCar ? 'car-right' : 'car-left'}
            src={carYellow}
            alt="yellow car"
          />
          <button
            onClick={() => moveCar('yellow', !yellowCar)}
            type="button"
          >
            Move
          </button>
        </div>
      </div>
    );
  }
}