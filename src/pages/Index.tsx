import { CyberBackground } from '@/components/CyberBackground'
import { CyberNavigation } from '@/components/CyberNavigation'
import { CyberHero } from '@/components/CyberHero'
import { CyberFeatures } from '@/components/CyberFeatures'
import { CyberLoader } from '@/components/CyberLoader'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import cyberHeroBg from '@/assets/cyber-hero-bg.jpg'

const Index = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Preload critical resources
    const img = new Image()
    img.src = cyberHeroBg
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setTimeout(() => setShowContent(true), 500)
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && (
          <CyberLoader onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {showContent && (
        <>
          {/* Animated Cyber Background */}
          <CyberBackground />
          
          {/* Hero Background Image */}
          <motion.div
            className="fixed inset-0 -z-20 opacity-20"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <img 
              src={cyberHeroBg} 
              alt="Cyber Hero Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/80" />
          </motion.div>
          
          {/* Navigation */}
          <CyberNavigation />
          
          {/* Main Content */}
          <motion.main
            className="relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {/* Hero Section */}
            <section id="home">
              <CyberHero />
            </section>
            
            {/* Features Section */}
            <section id="world">
              <CyberFeatures />
            </section>
            
            {/* Footer with Cyber Elements */}
            <motion.footer
              className="relative py-20 px-6 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="max-w-4xl mx-auto">
                <motion.div
                  className="glass-card p-12 mb-12"
                  animate={{
                    boxShadow: [
                      "var(--shadow-glass)",
                      "var(--shadow-cyber)",
                      "var(--shadow-purple)",
                      "var(--shadow-pink)",
                      "var(--shadow-glass)"
                    ]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.h2
                    className="text-4xl md:text-6xl font-cyber font-black mb-6"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <span className="bg-gradient-text bg-clip-text text-transparent">
                      WELCOME TO THE FUTURE
                    </span>
                  </motion.h2>
                  
                  <motion.p
                    className="text-xl font-rajdhani text-muted-foreground mb-8"
                    animate={{
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Where innovation meets imagination in a symphony of code and creativity
                  </motion.p>
                  
                  <div className="flex justify-center items-center gap-6 flex-wrap">
                    {['🚀', '🌌', '⚡', '🔮', '🤖'].map((emoji, index) => (
                      <motion.div
                        key={index}
                        className="text-4xl"
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                          scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }
                        }}
                      >
                        {emoji}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                {/* Copyright */}
                <motion.div
                  className="text-muted-foreground font-rajdhani"
                  animate={{
                    textShadow: [
                      "0 0 5px hsl(var(--cyber-cyan) / 0.3)",
                      "0 0 15px hsl(var(--cyber-pink) / 0.5)",
                      "0 0 5px hsl(var(--cyber-cyan) / 0.3)"
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  © 2024 CYBER REVOLUTION 3D • Powered by Neural Networks & Quantum Computing
                </motion.div>
              </div>
            </motion.footer>
          </motion.main>
        </>
      )}
    </div>
  )
}

export default Index