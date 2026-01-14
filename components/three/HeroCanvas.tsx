'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles, MeshDistortMaterial, Environment } from '@react-three/drei'
import { useRef, Suspense } from 'react'
import * as THREE from 'three'

function FloatingShape({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <torusKnotGeometry args={[1, 0.3, 100, 16]} />
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  )
}

function FloatingSphere({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.2}
          metalness={0.9}
          roughness={0.1}
          distort={0.4}
          speed={3}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#8B5CF6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#EC4899" />

      {/* Main Torus Knot */}
      <FloatingShape position={[-3, 0, -2]} color="#8B5CF6" />

      {/* Secondary Spheres */}
      <FloatingSphere position={[3, 1, -1]} color="#EC4899" scale={0.8} />
      <FloatingSphere position={[2, -1.5, 0]} color="#A78BFA" scale={0.5} />
      <FloatingSphere position={[-2, -2, -3]} color="#F472B6" scale={0.6} />

      {/* Sparkles for ambient particles */}
      <Sparkles
        count={200}
        scale={15}
        size={2}
        speed={0.5}
        color="#8B5CF6"
        opacity={0.5}
      />
      <Sparkles
        count={100}
        scale={12}
        size={1.5}
        speed={0.3}
        color="#EC4899"
        opacity={0.3}
      />
    </>
  )
}

export function HeroCanvas() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
