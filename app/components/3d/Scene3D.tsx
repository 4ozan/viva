'use client'

import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Float, Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

function Model({ rotation = [0, 0, 0] as [number, number, number], position = [0, 0, 0] as [number, number, number], scale = 1 }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      (state.mouse.x * Math.PI) / 10,
      0.05
    )
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      (state.mouse.y * Math.PI) / 10,
      0.05
    )
  })

  return (
    <Float rotationIntensity={0.4}>
      <mesh ref={meshRef} rotation={rotation} position={position} scale={scale}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshStandardMaterial color="#50C878" roughness={0.2} metalness={0.8} />
      </mesh>
    </Float>
  )
}

function FloatingCubes() {
  const cubesRef = useRef<(THREE.Mesh | null)[]>([])
  const cubesData = [
    { position: [3, 2, -4] as [number, number, number], size: 0.6, speed: 0.3 },
    { position: [-4, -1, -3] as [number, number, number], size: 0.5, speed: 0.5 },
    { position: [4, -3, -2] as [number, number, number], size: 0.4, speed: 0.7 },
    { position: [-3, 3, -5] as [number, number, number], size: 0.7, speed: 0.2 },
    { position: [5, 1, -6] as [number, number, number], size: 0.3, speed: 0.4 }
  ]

  useFrame(({ clock }) => {
    cubesRef.current.forEach((cube, i) => {
      if (!cube) return
      const t = clock.getElapsedTime() * cubesData[i].speed
      cube.position.y += Math.sin(t) * 0.005
      cube.rotation.x += 0.003
      cube.rotation.y += 0.005
    })
  })

  return (
    <>
      {cubesData.map((data, index) => (
        <mesh 
          key={index}
          ref={el => cubesRef.current[index] = el}
          position={data.position}
          scale={data.size}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={index % 2 === 0 ? "#C4E8C2" : "#ffffff"}
            roughness={0.5}
            metalness={0.2}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </>
  )
}

export default function Scene3D({ className }: { className: string }) {
  return (
    <div className={className}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={40} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <Model position={[0, 0, 0]} scale={1.5} />
        <FloatingCubes />
        
        <Environment preset="city" />
        <ContactShadows
          position={[0, -3.5, 0]}
          opacity={0.4}
          scale={20}
          blur={1.5}
          far={4.5}
        />
      </Canvas>
    </div>
  )
}
