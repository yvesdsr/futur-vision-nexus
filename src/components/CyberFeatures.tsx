import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Sphere, Box, Torus, Float, Text3D, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'

// Mini 3D Scene for Feature Cards
function FeatureScene({ type }: { type: string }) {
  const getGeometry = () => {
    switch (type) {
      case 'ai':
        return (
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[0.8]} position={[0, 0, 0]}>
              <meshStandardMaterial color="#00ffff" emissive="#004466" wireframe />
            </Sphere>
            <Torus args={[1.2, 0.2, 16, 100]} position={[0, 0, 0]} rotation={[0.5, 0, 0]}>
              <meshStandardMaterial color="#ff0066" emissive="#440022" />
            </Torus>
          </Float>
        )
      case '3d':
        return (
          <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
            <Box args={[1, 1, 1]} position={[0, 0, 0]} rotation={[0.4, 0.4, 0]}>
              <meshStandardMaterial color="#00ff88" emissive="#004422" />
            </Box>
            <Box args={[0.5, 0.5, 0.5]} position={[0.8, 0.8, 0.8]}>
              <meshStandardMaterial color="#ffaa00" emissive="#442200" wireframe />
            </Box>
          </Float>
        )
      case 'matrix':
        return (
          <Float speed={3} rotationIntensity={3} floatIntensity={3}>
            <Torus args={[0.8, 0.3, 8, 25]} position={[0, 0, 0]}>
              <meshStandardMaterial color="#aa00ff" emissive="#220044" wireframe />
            </Torus>
            <Sphere args={[0.3]} position={[0, 0, 0]}>
              <meshStandardMaterial color="#ff6600" emissive="#442200" />
            </Sphere>
          </Float>
        )
      default:
        return (
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[0.8]}>
              <meshStandardMaterial color="#00ffff" emissive="#004466" />
            </Sphere>
          </Float>
        )
    }
  }

  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }} className="!bg-transparent">
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[2, 2, 2]} color="#00ffff" />
        <pointLight position={[-2, -2, 2]} color="#ff0066" />
        {getGeometry()}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
      </Suspense>
    </Canvas>
  )
}

export function CyberFeatures() {
  const features = [
    {
      id: 'tech',
      title: 'TECH & INNOVATION',
      description: 'Découvrez les dernières innovations technologiques, startups françaises et révolutions numériques.',
      icon: '💻',
      color: 'cyber-cyan',
      scene: 'ai'
    },
    {
      id: 'spiritualite',
      title: 'SPIRITUALITÉ 2.0',
      description: 'Explorez la fusion entre technologie et spiritualité dans notre monde connecté.',
      icon: '🧘‍♀️',
      color: 'cyber-pink',
      scene: '3d'
    },
    {
      id: 'crypto',
      title: 'BLOCKCHAIN & CRYPTO',
      description: 'Analyses approfondies sur les cryptomonnaies, NFTs et l\'économie décentralisée.',
      icon: '₿',
      color: 'cyber-purple',
      scene: 'matrix'
    },
    {
      id: 'futur',
      title: 'FUTUR NUMÉRIQUE',
      description: 'Anticipez les tendances de demain : IA, métaverse, et transformation sociale.',
      icon: '🚀',
      color: 'cyber-green',
      scene: 'ai'
    }
  ]

  return (
    <section className="py-32 px-6 relative" id="features">
      {/* Section Title */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-5xl md:text-7xl font-cyber font-black mb-6"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <span className="bg-gradient-text bg-clip-text text-transparent">
            NOS RUBRIQUES
          </span>
        </motion.h2>
        <motion.p
          className="text-xl text-muted-foreground max-w-2xl mx-auto font-rajdhani"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Plongez dans l'univers fascinant où technologie de pointe rencontre sagesse ancestrale
        </motion.p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="glass-card relative overflow-hidden group"
            initial={{ opacity: 0, y: 100, rotateX: -30 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ 
              delay: index * 0.2, 
              duration: 0.8,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
          >
            {/* 3D Background */}
            <div className="absolute inset-0 opacity-30">
              <FeatureScene type={feature.scene} />
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-8">
              {/* Icon */}
              <motion.div
                className="text-6xl mb-6 inline-block"
                animate={{ 
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotateY: { duration: 4, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                {feature.icon}
              </motion.div>
              
              {/* Title */}
              <motion.h3
                className={`text-2xl font-cyber font-bold mb-4 text-${feature.color}`}
                animate={{
                  textShadow: [
                    `0 0 10px hsl(var(--${feature.color}) / 0.5)`,
                    `0 0 30px hsl(var(--${feature.color}) / 0.8)`,
                    `0 0 10px hsl(var(--${feature.color}) / 0.5)`
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {feature.title}
              </motion.h3>
              
              {/* Description */}
              <p className="text-muted-foreground font-rajdhani text-lg leading-relaxed">
                {feature.description}
              </p>
              
              {/* Interactive Elements */}
              <motion.div
                className="mt-6 flex items-center gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <motion.button
                  className={`px-4 py-2 border border-${feature.color}/30 rounded-lg font-cyber text-sm hover:bg-${feature.color}/10 transition-all duration-300`}
                  whileHover={{ scale: 1.05, boxShadow: `0 0 20px hsl(var(--${feature.color}) / 0.4)` }}
                  whileTap={{ scale: 0.95 }}
                >
                  DÉCOUVRIR
                </motion.button>
                
                <motion.div
                  className="flex gap-2"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {Array.from({ length: 3 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className={`w-2 h-2 bg-${feature.color} rounded-full`}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
            
            {/* Animated Border */}
            <motion.div
              className={`absolute inset-0 border-2 border-${feature.color}/20 rounded-2xl`}
              animate={{
                borderColor: [
                  `hsl(var(--${feature.color}) / 0.2)`,
                  `hsl(var(--${feature.color}) / 0.8)`,
                  `hsl(var(--${feature.color}) / 0.2)`
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        className="mt-32 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "50K+", label: "LECTEURS", color: "cyber-cyan" },
            { value: "500+", label: "ARTICLES", color: "cyber-pink" },
            { value: "24/7", label: "ACTUALITÉS", color: "cyber-purple" },
            { value: "∞", label: "INSPIRATION", color: "cyber-green" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-xl"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              animate={{
                boxShadow: [
                  "var(--shadow-glass)",
                  `0 0 30px hsl(var(--${stat.color}) / 0.3)`,
                  "var(--shadow-glass)"
                ]
              }}
              transition={{
                boxShadow: { 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: index * 0.5
                }
              }}
            >
              <motion.div
                className={`text-3xl font-cyber font-black text-${stat.color} mb-2`}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground font-rajdhani">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}