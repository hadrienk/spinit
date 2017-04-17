'use strict';

import React from 'react';

require('styles/hadrien/Motor.styl');

class MotorComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      angle: 0
    };

    this.stepTable = [];
    this.stepTable[1] = 0;
    this.stepTable[3] = 45;
    this.stepTable[2] = 90;
    this.stepTable[6] = 135;
    this.stepTable[4] = 180;
    this.stepTable[12] = 225;
    this.stepTable[8] = 270;
    this.stepTable[9] = 315;
  }

  getClass(pin) {
    return 'pin ' + (pin ? 'on' : 'off');
  }

  render() {
    return (
      <div className='motor-component'>
        <span className={ 'pin1 ' + this.getClass(this.props.a1) }>
          { this.props.a1 ? '+' : '-' }
        </span>
        <span className={ 'pin2 ' + this.getClass(this.props.a2) }>
          { this.props.a2 ? '+' : '-' }
        </span>
        <span className={ 'pin3 ' + this.getClass(this.props.b1) }>
          { this.props.b1 ? '+' : '-' }
        </span>
        <span className={ 'pin4 ' + this.getClass(this.props.b2) }>
          { this.props.b2 ? '+' : '-' }
        </span>

        { /* Gettin' ref to efficiently rotate */ }
        <div className='axis' ref={ (axis) => {
          this.axis = axis;
        } }/>
      </div>
    );
  }

  componentDidMount() {
    this.rotateAxis(this.state.angle);
  }

  componentDidUpdate(_, prevState) {
    const index = this.getIndex(
      this.props.a1,
      this.props.b1,
      this.props.a2,
      this.props.b2
    );
    let newAngle = this.stepTable[index];
    if (typeof newAngle === 'undefined')
      return;

    const lastAngle = prevState.angle;

    if (newAngle - lastAngle >= 90)
      return;
    if (newAngle - lastAngle <= -90)
      return;

    if (newAngle == 0 && lastAngle == 315) {
      newAngle = 360;
    }

    // console.log(lastAngle + '(' + index + ") -> " + newAngle);

    this.rotateAxis(newAngle);
    this.state.angle = newAngle == 360 ? 0 : newAngle;
  }

  getIndex(a1, b1, a2, b2) {
    return (a1 && 1) | (b1 && 2) | (a2 && 4) | (b2 && 8);
  }

  rotateAxis(deg) {
    this.axis.style.webkitTransform = 'rotate(' + deg + 'deg)';
    this.axis.style.mozTransform = 'rotate(' + deg + 'deg)';
    this.axis.style.msTransform = 'rotate(' + deg + 'deg)';
    this.axis.style.oTransform = 'rotate(' + deg + 'deg)';
    this.axis.style.transform = 'rotate(' + deg + 'deg)';
  }

}

MotorComponent.displayName = 'HadrienMotorComponent';

// Uncomment properties you need
// MotorComponent.propTypes = {};
// MotorComponent.defaultProps = {};

export default MotorComponent;
