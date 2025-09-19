import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CyberLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("INITIALIZING CYBER MATRIX...")

  const loadingMessages = [
    "INITIALIZING CYBER MATRIX...",
    "LOADING NEURAL NETWORKS...",
    "ACTIVATING 3D ENGINES...",
    "CALIBRATING HOLOGRAPHIC DISPLAYS...",
    "ESTABLISHING QUANTUM CONNECTIONS...",
    "CYBER REVOLUTION READY!"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = Math.min(prev + Math.random() * 15, 100)
        const messageIndex = Math.floor((newProgress / 100) * (loadingMessages.length - 1))
        setLoadingText(loadingMessages[messageIndex])
        
        if (newProgress >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 1000)
        }
        
        return newProgress
      })
    }, 200)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background flex items-center justify-center"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center max-w-2xl mx-auto px-6">
        {/* Logo/Icon */}
        <motion.div
          className="text-8xl mb-8"
          animate={{
            rotateY: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            rotateY: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          🌐
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-cyber font-black mb-8"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <span className="bg-gradient-text bg-clip-text text-transparent">
            CYBER REVOLUTION
          </span>
        </motion.h1>

        {/* Loading Text */}
        <motion.p
          className="text-cyber-cyan font-cyber text-lg mb-12"
          animate={{
            textShadow: [
              "0 0 10px hsl(var(--cyber-cyan) / 0.5)",
              "0 0 30px hsl(var(--cyber-cyan) / 0.8)",
              "0 0 10px hsl(var(--cyber-cyan) / 0.5)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          key={loadingText}
        >
          {loadingText}
        </motion.p>

        {/* Progress Bar */}
        <div className="glass-card p-6 mb-8">
          <div className="relative h-4 bg-muted/20 rounded-full overflow-hidden mb-4">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-cyber rounded-full"
              animate={{
                width: `${progress}%`,
                boxShadow: [
                  "0 0 10px hsl(var(--cyber-cyan) / 0.5)",
                  "0 0 20px hsl(var(--cyber-pink) / 0.8)",
                  "0 0 10px hsl(var(--cyber-cyan) / 0.5)"
                ]
              }}
              transition={{
                width: { duration: 0.3 },
                boxShadow: { duration: 1, repeat: Infinity }
              }}
            />
            
            {/* Progress Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              animate={{
                x: ['-100%', '200%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
          
          {/* Progress Percentage */}
          <motion.div
            className="text-center font-cyber text-2xl font-bold"
            animate={{
              color: [
                "hsl(var(--cyber-cyan))",
                "hsl(var(--cyber-pink))",
                "hsl(var(--cyber-purple))",
                "hsl(var(--cyber-cyan))"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {Math.round(progress)}%
          </motion.div>
        </div>

        {/* Loading Animation */}
        <div className="flex justify-center items-center gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-cyber-cyan rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyber-cyan rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}