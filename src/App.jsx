import { HelloFuck } from './HelloFuck'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Click } from './Click'
import { useEffect, useState } from 'react'

function App() {

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    window.addEventListener('click', () => setClicked(true))
    return () => window.removeEventListener('click', () => setClicked(true))
  }, [])

  return (
    <>
      <Canvas>
        <color attach="background" args={["#333333"]} />
        <OrbitControls />
        <HelloFuck setClicked={setClicked} />
        <ambientLight intensity={0.5} />
        <hemisphereLight args={[0xffffff, 0x444444, 5]} />
      </Canvas>
      {!clicked && <Click />}
    </>
  )
}

export default App
