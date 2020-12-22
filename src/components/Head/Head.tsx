import React, { FC, useCallback, useEffect, useRef } from "react";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useThree } from "react-three-fiber";
import { Mesh } from 'three'

type GLTFResult = GLTF & {
  nodes: {
    Head: THREE.Mesh
  }
  materials: {
    base: THREE.MeshStandardMaterial
    inner: THREE.MeshStandardMaterial
  }
}

const Head: FC = () => {
  const modelEl = useRef<Mesh>(null);
  const { nodes } = useLoader<GLTFResult>(GLTFLoader, "./david_head.gltf");
  const { mouse } = useThree()

  const mousemoveHandler = useCallback(() => {
    const rotateY = mouse.x * 1000;
    const rotateX = -mouse.y * 1000;

    if (modelEl.current) {
      modelEl.current.rotation.y = 0.0003 * rotateY
      modelEl.current.rotation.x = 0.0003 * rotateX
    }
  }, [mouse.x, mouse.y])

  useEffect(() => {
    window.addEventListener("mousemove", mousemoveHandler);

    return () => {
      window.removeEventListener("mousemove", mousemoveHandler);
    };
  }, [mousemoveHandler])

  return (
    <group ref={modelEl}>
      <group rotation={[1.65, 0.1, 1.5]} position={[0, -49, 0]}>
        <mesh
          material={nodes.Head.material}
          receiveShadow
          castShadow
        >
          <bufferGeometry attach="geometry" {...nodes.Head.geometry} />
        </mesh>
      </group>
    </group>
  );
};

export default Head;
