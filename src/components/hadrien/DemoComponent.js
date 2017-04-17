'use strict';

import React from 'react';

require('styles/hadrien/Demo.styl');

let DemoComponent = (props) => (
  <div className="demo-component">
    { props.children }
  </div>
);

DemoComponent.displayName = 'HadrienDemoComponent';

// Uncomment properties you need
// EditorComponent.propTypes = {};
// EditorComponent.defaultProps = {};

export default DemoComponent;
