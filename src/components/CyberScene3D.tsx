import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, Box, Torus, Text3D, Float, Sparkles, Environment } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'

// Cyber Robot Component
function CyberRobot() {
  const groupRef = useRef<THREE.Group>(null)

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <group ref={groupRef} position={[0, 0, 0]}>
        {/* Robot Head */}
        <Box args={[1, 1, 1]} position={[0, 2, 0]}>
          <meshStandardMaterial color="#00ffff" emissive="#004444" />
        </Box>
        
        {/* Robot Eyes */}
        <Sphere args={[0.1]} position={[-0.3, 2.2, 0.4]}>
          <meshStandardMaterial color="#ff0066" emissive="#ff0066" />
        </Sphere>
        <Sphere args={[0.1]} position={[0.3, 2.2, 0.4]}>
          <meshStandardMaterial color="#ff0066" emissive="#ff0066" />
        </Sphere>
        
        {/* Robot Body */}
        <Box args={[1.5, 2, 0.8]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#0066ff" emissive="#002244" />
        </Box>
        
        {/* Robot Arms */}
        <Box args={[0.4, 1.5, 0.4]} position={[-1.2, 0.5, 0]}>
          <meshStandardMaterial color="#ff6600" emissive="#442200" />
        </Box>
        <Box args={[0.4, 1.5, 0.4]} position={[1.2, 0.5, 0]}>
          <meshStandardMaterial color="#ff6600" emissive="#442200" />
        </Box>
        
        {/* Robot Legs */}
        <Box args={[0.5, 1.8, 0.5]} position={[-0.5, -1.9, 0]}>
          <meshStandardMaterial color="#00ff00" emissive="#004400" />
        </Box>
        <Box args={[0.5, 1.8, 0.5]} position={[0.5, -1.9, 0]}>
          <meshStandardMaterial color="#00ff00" emissive="#004400" />
        </Box>
        
        {/* Cyber Particles around Robot */}
        <Sparkles count={50} scale={5} size={2} speed={0.5} color="#00ffff" />
      </group>
    </Float>
  )
}

// Floating Geometry Components
function FloatingGeometry() {
  return (
    <>
      {/* Floating Torus */}
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
        <Torus args={[2, 0.5, 16, 100]} position={[-4, 2, -2]} rotation={[0.5, 0, 0]}>
          <meshStandardMaterial color="#ff00ff" emissive="#440044" wireframe />
        </Torus>
      </Float>

      {/* Floating Spheres */}
      <Float speed={2} rotationIntensity={1} floatIntensity={3}>
        <Sphere args={[0.8]} position={[4, -1, -1]}>
          <meshStandardMaterial color="#00ff88" emissive="#004444" />
        </Sphere>
      </Float>

      <Float speed={1.8} rotationIntensity={3} floatIntensity={2}>
        <Sphere args={[0.5]} position={[-3, -2, 2]}>
          <meshStandardMaterial color="#ffaa00" emissive="#442200" />
        </Sphere>
      </Float>

      {/* Floating Boxes with Wireframe */}
      <Float speed={1.2} rotationIntensity={2} floatIntensity={1.5}>
        <Box args={[1, 1, 1]} position={[3, 3, -3]} rotation={[0.4, 0.4, 0]}>
          <meshStandardMaterial color="#aa00ff" emissive="#220044" wireframe />
        </Box>
      </Float>
    </>
  )
}

// 3D Loading Component
function SceneLoader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-cyber-cyan text-xl font-cyber animate-cyber-pulse">
        INITIALIZING CYBER MATRIX...
      </div>
    </div>
  )
}

// Main 3D Scene
export function CyberScene3D() {
  return (
    <motion.div 
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        className="!bg-transparent"
      >
        <Suspense fallback={null}>
          {/* Lighting Setup */}
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#00ffff" />
          <pointLight position={[-10, -10, -10]} color="#ff0066" intensity={0.8} />
          <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} color="#00ff88" />
          
          {/* Environment */}
          <Environment preset="night" />
          
          {/* 3D Objects */}
          <CyberRobot />
          <FloatingGeometry />
          
          {/* Interactive Controls */}
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={1}
          />
        </Suspense>
      </Canvas>
    </motion.div>
  )
}