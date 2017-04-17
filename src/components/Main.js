require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Motor from './hadrien/MotorComponent.js';
import Canvas from './hadrien/CanvasComponent.js';
import Editor from './hadrien/EditorComponent.js';
import Demo from './hadrien/DemoComponent.js';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gpio: [
        false, false, false, false,
        false, false, false, false,
        false, false, false, false,
        false, false, false, false,
        false, false, false, false,
        false, false, false, false,
        false, false, false, false,
        false, false, false, false,
        false, false, false, false,
        false, false, false, false,
        false, false, false, false,
        false, false, false, false,
        false, false, false, false,
        false, false, false, false,
        false, false, false, false,
        false, false, false, false,
      ]
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      500
    );
  }

  tick() {
    this.setState((prevState, prop) => {
      const gpio = [];
      for (let pin in prevState.gpio) {
        gpio.push(Math.random() > 0.5 ? true : false);
      }
      return {
        gpio: gpio
      };
    });
  }

  render() {

    const gpio = this.state.gpio;
    const motors = [];
    for (let i = 0; i < 25; ++i) {
      motors.push(< Motor a1={ gpio[i] } a2={ gpio[i + 1] } b1={ gpio[i + 2] } b2={ gpio[i + 3] }/>);
      //const a1 = Math.random() > 0.5;
      //const a2 = Math.random() > 0.5;
      //const b1 = Math.random() > 0.5;
      //const b2 = Math.random() > 0.5;
      //motors.push(<Motor key={i} a1={ a1 } a2={ a2 } b1={ b1 } b2={ b2 }/>);
    }

    const canvas = <Canvas>{ motors }</Canvas>;

    return (
      <div className='index'>
        <Editor/>
        <Demo>
          { canvas }
        </Demo>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
