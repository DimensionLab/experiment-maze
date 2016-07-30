/**
*
* Scene
*
*/

import React from 'react';
import 'aframe';
import { Scene, Entity } from 'aframe-react';

// import styles from './styles.css';

class SceneVR extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Scene>
        <Entity id="cameraWrapper" position="0 1 8">
          <Entity id="camera" camera look-controls wasd-controls>
            {/* Cursor */}
            <Entity
              id="cursor"
              position="0 0 -2"
              geometry="primitive: ring; radiusOuter: 0.016; radiusInner: 0.01"
              material="color: #ff9; shader: flat; transparent: true; opacity: 0.5"
              scale="2 2 2" raycaster
            />
          </Entity>
        </Entity>
        <Entity
          id="floor"
          geometry="primitive: cylinder; height: .2; radius: 12"
          material="color: #000; metalness: .2; repeat: 50 20; roughness: .1"
        />
      </Scene>
    );
  }
}

export default SceneVR;
