'use strict';

import React from 'react';

require('styles/hadrien/Canvas.styl');

let CanvasComponent = (props) => (
  <div className='canvas-component'>
    { props.children }
  </div>
);

CanvasComponent.displayName = 'Canvas';

// Uncomment properties you need
// CanvasComponent.propTypes = {};
// CanvasComponent.defaultProps = {};

export default CanvasComponent;
