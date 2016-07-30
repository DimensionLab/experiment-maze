/**
*
* SceneVR
*
*/

import React from 'react';
// import 'aframe';

import { Scene, Entity } from 'aframe-react';

import grassTexture from './grasslight-big.jpg';
import crateTexture from './crate.gif';

const extras = require('aframe-extras');
extras.registerAll();

// import styles from './styles.css';

// require('aframe-firebase-component');

class SceneVR extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Scene
        physics="debug: false;"
        firebase="apiKey: AIzaSyDu-iZc3sIz2RBqcY_1PZlI3Dx_P3QiFhE;
                 authDomain: dimensionlab-maze.firebaseapp.com;
                 databaseURL: https://dimensionlab-maze.firebaseio.com;
                 storageBucket: dimensionlab-maze.appspot.com"
      >
        <a-assets timeout="5000">
          <a-mixin id="blue" material="color: #4CC3D9"></a-mixin>
          <a-mixin id="blueBox" geometry="primitive: box; depth: 2; height: 5; width: 1" material="color: #4CC3D9"></a-mixin>
          <a-mixin id="box" geometry="primitive: box; depth: 1; height: 1; width: 1"></a-mixin>
          <a-mixin id="cylinder" geometry="primitive: cylinder; height: 0.3; radius: 0.75; segmentsRadial: 6"></a-mixin>
          <a-mixin id="green" material="color: #7BC8A4"></a-mixin>
          <a-mixin id="orange" material="color: #F16745"></a-mixin>
          <a-mixin id="purple" material="color: #93648D"></a-mixin>
          <a-mixin id="short" scale="1 0.5 1"></a-mixin>
          <a-mixin id="yellow" material="color: #FFC65D"></a-mixin>
          <img id="crateImg" src={crateTexture} alt="" role="presentation" />
          <img id="floorImg" src={grassTexture} alt="" role="presentation" />
          {/* Avatar */}
          <a-mixin
            id="avatar"
            geometry="primitive: box; depth: 0.3; height: 0.3; width: 0.3"
            material="color: #222"
            template="src: #avatar-template"
          >
          </a-mixin>
          <a-mixin
            id="arm"
            geometry="primitive: box; depth: 0.08; height: 0.5; width: 0.08"
            material="color: #222; shader: flat"
          ></a-mixin>
          <a-mixin
            id="eye"
            geometry="primitive: circle"
            material="shader: flat; side: double"
          ></a-mixin>
          {/* Templates. */}
          <script id="avatar-template" type="text/html-template">
            {/* Face. */}
            <Entity rotation="0 180 0">
              <Entity
                mixin="eye"
                geometry="radius: 0.08"
                material="shader: flat; side: double"
                position="-0.1 0.1 0.18"
              >
                <Entity
                  mixin="eye"
                  geometry="radius: 0.02"
                  material="color: #222"
                  position="0 0 0.03"
                />
              </Entity>
              <Entity mixin="eye" geometry="radius: 0.08" position="0.1 0.1 0.18">
                <Entity
                  mixin="eye"
                  geometry="radius: 0.02"
                  material="color: #222"
                  position="0 0 0.03"
                />
              </Entity>
            </Entity>
            {/* Arms. */}
            <Entity class="arms" position="0 -0.3 0">
              <Entity mixin="arm" position="-0.3 -0.25 0" rotation="0 0 -10" />
              <Entity mixin="arm" position="0.3 -0.25 0" rotation="0 0 10" />
            </Entity>
          </script>
        </a-assets>

        <Entity
          static-body
          id="crate"
          geometry="primitive: box"
          material="src: #crateImg"
          position="0 1.5 0"
          scale="3 3 3"
        />

        <Entity
          static-body
          id="crate-2"
          geometry="primitive: box"
          material="src: #crateImg"
          position="0 1.5 24.03"
          scale="3 3 3"
        />

        <Entity static-body id="crate-3" geometry="primitive: box" material="src: #crateImg" position="20.15 0.5 24.03" />
        <Entity static-body id="crate-4" geometry="primitive: box" material="src: #crateImg" position="35.18 0.5 24.79" />
        <Entity static-body id="crate-5" geometry="primitive: box" material="src: #crateImg" position="-34.79 0.5 24.79" />

        <Entity static-body id="floor" geometry="primitive:plane;height:100;radius:12;width:100" material="src: #floorImg; color: #fafafa; metalness: .2; repeat: 50 20; roughness: .1" position="0 0 0" rotation="-90 0 0" />

        <Entity id="light" light="type: ambient" position="0 27.14 3" scale="10 10 10" />

        <Entity id="cameraWrapper" position="0 .9 8" firebase-broadcast="components: position, rotation">
          <Entity
            id="head"
            mixin="avatar"
            kinematic-body="radius: 0.9;"
            universal-controls
            camera
            look-controls
            position="0 .9 8"
            jump-ability="distance: 2;"
          >
            {/* Cursor */}
            <Entity
              id="cursor"
              position="0 0 -2"
              geometry="primitive: ring; radiusOuter: 0.016; radiusInner: 0.01"
              material="color: #ff9; shader: flat; transparent: true; opacity: 0.5"
              scale="2 2 2"
            />
          </Entity>
        </Entity>

        {/* Walls */}
        <Entity static-body position="49.06 1.82 0.03999999999999998" geometry="primitive:box;height:8.66;depth:100;width:1" id="big-wall-west" />
        <Entity static-body position="-49.49 1.82 0.04" geometry="primitive:box;height:8.66;depth:100;width:1" id="big-wall-east" />
        <Entity static-body position="-0.34 1.82 49.74" rotation="0 -89.95437383553924 0" geometry="primitive:box;height:8.66;depth:100;width:1" id="big-wall-north" />
        <Entity static-body position="-0.34 1.82 -49.39" rotation="0 -89.95437383553924 0" geometry="primitive:box;height:8.66;depth:100;width:1" id="big-wall-south" />
        <Entity static-body position="41.91 1.82 43.05" rotation="0 -90 0" geometry="primitive:box;height:8.66;depth:15;width:1" id="wall-1" />
        <Entity static-body position="34.66 1.82 46.28" rotation="0 0 0" geometry="primitive:box;height:8.66;depth:7.5;width:1" id="wall-2" />
        <Entity static-body position="19.46 1.82 39.14" rotation="0 0 0" geometry="primitive:box;height:8.66;depth:7.5;width:1" id="wall-3" />
        <Entity static-body position="30.59 1.82 30.67" rotation="0 0 0" geometry="primitive:box;height:8.66;depth:7.5;width:1" id="wall-16" />
        <Entity static-body position="30.59 1.82 16.79" rotation="0 0 0" geometry="primitive:box;height:8.66;depth:7.5;width:1" id="wall-18" />
        <Entity static-body position="19.26 1.82 23.79" rotation="0 0 0" geometry="primitive:box;height:8.66;depth:7.5;width:1" id="wall-17" />
        <Entity static-body position="19.26 1.82 23.79" rotation="0 0 0" geometry="primitive:box;height:8.66;depth:7.5;width:1" id="wall-19" />
        <Entity static-body position="-35.76 1.82 35.39" rotation="0 90 0" geometry="primitive:box;height:8.66;depth:7.5;width:1" id="wall-12" />
        <Entity static-body position="-20.46 1.82 42.39" rotation="0 90 0" geometry="primitive:box;height:8.66;depth:7.5;width:1" id="wall-13" />
        <Entity static-body position="8.44 1.82 42.39" rotation="0 90 0" geometry="primitive:box;height:8.66;depth:7.5;width:1" id="wall-14" />
        <Entity static-body position="15.83 1.82 35.63" rotation="0 90 0" geometry="primitive:box;height:8.66;depth:7.5;width:1" id="wall-15" />
        <Entity static-body position="-4.83 1.82 42.27" rotation="0 90 0" geometry="primitive:box;height:8.66;depth:5.68;width:1" id="wall-20" />
        <Entity static-body position="12.6 1.82 39" rotation="0 0 0" geometry="primitive:box;height:8.66;depth:7.5;width:1" id="wall-4" />
        <Entity static-body position="-7.37 1.82 45.72" rotation="0 0 0" geometry="primitive:box;height:8.66;depth:7.5;width:1" id="wall-5" />
        <Entity static-body position="-7.37 1.82 33.43" rotation="0 0 0" geometry="primitive:box;height:8.66;depth:7.5;width:1" id="wall-21" />
        <Entity static-body position="-23.84 1.82 45.72" rotation="0 0 0" geometry="primitive:box;height:8.66;depth:7.5;width:1" id="wall-6" />
        <Entity static-body position="-40.85 1.82 45.72" rotation="0 0 0" geometry="primitive:box;height:8.66;depth:7.5;width:1" id="wall-7" />
        <Entity static-body position="4.9 1.82 36.46" rotation="0 0 0" geometry="primitive:box;height:8.66;depth:25.740000000000002;width:1" id="wall-8" />
        <Entity static-body position="-11.64 1.82 40.23" rotation="0 0 0" geometry="primitive:box;height:8.66;depth:20.340000000000003;width:1" id="wall-9" />
        <Entity static-body position="-17 1.82 36.83" rotation="0 0 0" geometry="primitive:box;height:8.66;depth:25.020000000000003;width:1" id="wall-10" />
        <Entity static-body position="-32.05 1.82 42.5" rotation="0 0 0" geometry="primitive:box;height:8.66;depth:15.420000000000003;width:1" id="wall-11" />
      </Scene>
    );
  }
}

export default SceneVR;
