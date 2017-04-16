require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Motor from './hadrien/MotorComponent.js';
import Canvas from './hadrien/CanvasComponent.js';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {


  render() {

    // const gpio = this.state.gpio;
    const motors = [];
    for (let i = 0; i < 25; ++i) {
      //motors.push(< Motor a1={ gpio[i] } a2={ gpio[i + 1] } b1={ gpio[i + 2] } b2={ gpio[i + 3] }/>);
      const a1 = Math.random() > 0.5;
      const a2 = Math.random() > 0.5;
      const b1 = Math.random() > 0.5;
      const b2 = Math.random() > 0.5;
      motors.push(<Motor key={i} a1={ a1 } a2={ a2 } b1={ b1 } b2={ b2 }/>);
    }

    const canvas = <Canvas>{ motors }</Canvas>;

    return (
      <div className='index'>
        { canvas }
        <img src={yeomanImage} alt='Yeoman Generator'/>
        <div className='notice'>Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
