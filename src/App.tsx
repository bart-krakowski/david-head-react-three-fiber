import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'

import Theme from "./theme"

import Head from "components/Head"

const App = () => (
  <Theme>
    <Canvas
      shadowMap
      style={{ background: '#171717' }}
      camera={{
        position: [0, 90, 90],
        rotation: [90, 0, 90]
      }}
      gl={{ antialias: false }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback="test">
        <Head />
      </Suspense>
    </Canvas>
  </Theme>
);

export default App;
