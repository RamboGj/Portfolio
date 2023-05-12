'use client'

import { Canvas } from '@react-three/fiber'
import { Scene } from './components/Scene'

export default function Home() {
  return (
    <Canvas
      camera={{
        position: [-3, 2, 4],
      }}
    >
      <Scene />
    </Canvas>
  )
}
