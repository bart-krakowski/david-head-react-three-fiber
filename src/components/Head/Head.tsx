import React, { createRef, FC, useCallback, useEffect, useRef } from 'react';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useFrame, useLoader, useThree } from 'react-three-fiber';
import { Mesh, MeshStandardMaterial, Group } from 'three'
import './CustomMaterial'

type GLTFResult = GLTF & {
  nodes: {
    Head: {
      children: Array<Mesh>
    }
  }
  materials: {
    base: MeshStandardMaterial
    inner: MeshStandardMaterial
  }
}

const Head: FC = () => {
  const modelEl = useRef<Mesh>(null);
  const { nodes } = useLoader<GLTFResult>(GLTFLoader, './models/david_head-fragments.gltf')
  const { mouse } = useThree()
  const headRef = useRef<Group>(null)
  const particles = nodes.Head.children.map(() => createRef<Mesh>())

  const mousemoveHandler = useCallback(() => {
    const rotateY = mouse.x * 1000;
    const rotateX = -mouse.y * 1000;

    if (modelEl.current) {
      modelEl.current.rotation.y = 0.0003 * rotateY
      modelEl.current.rotation.x = 0.0003 * rotateX
    }
  }, [mouse.x, mouse.y])

  useEffect(() => {
    window.addEventListener('mousemove', mousemoveHandler);

    return () => {
      window.removeEventListener('mousemove', mousemoveHandler);
    };
  }, [mousemoveHandler])

  let currentPosition = 0
  let delta = 1.02
  const initialPosition = useRef<number | undefined>(0)

  useEffect(() => {
    initialPosition.current = particles[0].current?.position.x
  }, [particles])

  useFrame(() => {
    if (initialPosition.current && currentPosition <= initialPosition.current * 4) {
      particles.map((el) => (
        el.current?.position.set(
          el.current.position.x * delta,
          el.current.position.y * delta,
          el.current.position.z * delta,
        )
      ))

      currentPosition = particles[0].current ? particles[0].current.position.x : 0
    }

    if (headRef.current && headRef.current.rotation.x < 1.2) {
      headRef.current.rotation.x = headRef.current.rotation.x * 1.01
    }
  })

  return (
    <group ref={modelEl}>
      <group position={[0, 0, 0]} rotation={[0.5, -1.6, 0]} ref={headRef}>
        {nodes.Head.children.map((el, index) => (
          <mesh
            key={index}
            receiveShadow
            castShadow
            position={el.position}
            ref={particles[index]}
            material={el.material}
          >
            <bufferGeometry attach="geometry" {...el.geometry} />
            <customMaterial attach="material" />
            {/* <meshStandardMaterial attach="material" /> */}
          </mesh>
        ))}
      </group>
    </group>
  );
};

export default Head;
