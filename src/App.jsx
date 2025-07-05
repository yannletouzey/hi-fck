import { HelloFuck } from './HelloFuck'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Click } from './Click'
import { useSoundEffect } from './useSound'

function App() {
  const { isPlaying } = useSoundEffect()

  return (
    <>
      <Canvas>
        <color attach="background" args={["#333333"]} />
        <OrbitControls 
          enableZoom={false} 
        />
        <HelloFuck />
        <ambientLight intensity={0.5} />
        <hemisphereLight args={[0xffffff, 0x444444, 5]} />
      </Canvas>
      {!isPlaying && <Click />}
    </>
  )
}

export default App
