/* eslint-disable react/no-unknown-property */

import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
  useGLTF,
} from '@react-three/drei'
import { useControls } from 'leva'

export function Scene() {
  const macbook = useGLTF('./macbook.gltf')

  return (
    <>
      <Environment preset="city" />

      <color args={['#0C150E']} attach="background" />

      <PresentationControls
        global
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.5} floatIntensity={0.5}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={'#39CB73'}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive scale={1.5} position-y={-1.2} object={macbook.scene}>
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={0.97}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://growth3.xyz/" />
            </Html>
          </primitive>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.5} />
    </>
  )
}

useGLTF.preload('./macbook.gltf')
