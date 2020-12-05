import React, { useRef } from "react";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from "react-three-fiber";
import { Mesh } from 'three'

type GLTFResult = GLTF & {
  nodes: {
    Group2: THREE.Mesh
  }
  materials: {
    base: THREE.MeshStandardMaterial
    inner: THREE.MeshStandardMaterial
  }
}

const Sphere = () => {
  const modelEl = useRef<Mesh>(null);
  const { nodes } = useLoader<GLTFResult>(GLTFLoader, "./david_head.gltf");

  useFrame(() => {
    // if (modelEl.current) modelEl.current.rotation.z += 0.02
  });

  return (
    <group ref={modelEl}>
      {/* <group rotation={[1, 0, 0]} position={[0, -45, -1]}> */}
      <group rotation={[0, 0, 0]} position={[0, 0, 0]}>
        <mesh material={nodes.Group2.material} receiveShadow castShadow>
          <bufferGeometry attach="geometry" {...nodes.Group2.geometry} />
        </mesh>
      </group>
    </group>
  );
};

export default Sphere;
