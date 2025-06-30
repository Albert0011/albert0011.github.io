import { useState, useEffect, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedDog() {
  const { scene } = useGLTF('/dog.glb') as any
  const meshRef = useRef<THREE.Group>(null)
  const [animationComplete, setAnimationComplete] = useState(false)
  const frameRef = useRef(0)

  useFrame((state) => {
    if (!meshRef.current) return

    if (frameRef.current <= 100) {
      // Initial camera animation
      const progress = frameRef.current / 100
      const easeOut = 1 - Math.pow(1 - progress, 3)
      
      state.camera.position.x = Math.sin(easeOut * Math.PI * 2) * 5
      state.camera.position.z = Math.cos(easeOut * Math.PI * 2) * 5
      state.camera.position.y = 2
      state.camera.lookAt(0, 0, 0)
      
      frameRef.current++
      
      if (frameRef.current > 100) {
        setAnimationComplete(true)
      }
    } else if (animationComplete) {
      // Auto-rotation after initial animation
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <primitive 
      ref={meshRef}
      object={scene.clone()} 
      scale={0.4}
      position={[0, -0.75, 0]}
    />
  )
}

const DogModel = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-[500px] h-96 flex items-center justify-center">
      {loading ? (
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
        </div>
      ) : (
        <Canvas
          camera={{ position: [5, 2, 5], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={1} />
          <directionalLight position={[6, 3, 2]} intensity={1.5} />
          <Suspense fallback={null}>
            <AnimatedDog />
          </Suspense>
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        </Canvas>
      )}
    </div>
  )
}

export default DogModel 