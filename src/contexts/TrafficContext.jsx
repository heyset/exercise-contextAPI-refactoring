import React, { createContext } from 'react';

export const TrafficContext = createContext({});

export class TrafficProvider extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      signalColor: 'red',
    }

    this.changeSignal = this.changeSignal.bind(this);
  }

  changeSignal(signalColor) {
    this.setState({ signalColor });
  }

  render() {
    const { children } = this.props;
    const { signalColor } = this.state;

    return (
      <TrafficContext.Provider
        value={{
          signalColor,
          changeSignal: this.changeSignal,
        }}
      >
        { children }
      </TrafficContext.Provider>
    );
  }
}
