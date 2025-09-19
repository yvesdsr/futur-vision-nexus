import { motion } from 'framer-motion'
import { CyberScene3D } from './CyberScene3D'
import { Button } from '@/components/ui/button'

// Floating Text Component
function FloatingText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <motion.div
      className="absolute font-cyber text-cyber-cyan opacity-30 text-sm"
      style={{
        left: `${Math.random() * 80 + 10}%`,
        top: `${Math.random() * 80 + 10}%`,
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: [0, 0.6, 0],
        y: [-20, -100],
        x: [0, Math.random() * 50 - 25]
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeOut"
      }}
    >
      {text}
    </motion.div>
  )
}

// Glitch Text Effect
function GlitchText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="animate-text-glitch"
        animate={{
          textShadow: [
            "2px 0px 0px #ff0066, -2px 0px 0px #00ffff",
            "-2px 0px 0px #ff0066, 2px 0px 0px #00ffff",
            "2px 0px 0px #ff0066, -2px 0px 0px #00ffff"
          ]
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

// Cyber Button Component
function CyberButton({ children, variant = "primary", ...props }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button 
        className={`
          btn-cyber relative overflow-hidden group
          ${variant === 'secondary' ? 'border-accent text-accent hover:text-accent-foreground' : ''}
        `}
        {...props}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-20"
          initial={false}
          whileHover={{ opacity: 0.3 }}
          transition={{ duration: 0.3 }}
        />
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </Button>
    </motion.div>
  )
}

export function CyberHero() {
  const floatingTexts = [
    "NEURAL NETWORK", "QUANTUM COMPUTING", "AI REVOLUTION", 
    "DIGITAL TRANSFORMATION", "CYBER MATRIX", "HOLOGRAPHIC DISPLAY",
    "BLOCKCHAIN TECH", "METAVERSE", "AUGMENTED REALITY", "IOT SENSORS"
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Scene Background */}
      <div className="absolute inset-0 z-0">
        <CyberScene3D />
      </div>
      
      {/* Floating Tech Terms */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingTexts.map((text, index) => (
          <FloatingText 
            key={index} 
            text={text} 
            delay={index * 1.2} 
          />
        ))}
      </div>
      
      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Main Title with Glitch Effect */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <GlitchText className="text-6xl md:text-8xl font-cyber font-black mb-4">
            <motion.span 
              className="bg-gradient-text bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              CYBER
            </motion.span>
          </GlitchText>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-cyber font-bold text-foreground"
            animate={{
              textShadow: [
                "0 0 10px hsl(var(--primary) / 0.5)",
                "0 0 30px hsl(var(--accent) / 0.8)",
                "0 0 10px hsl(var(--primary) / 0.5)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            REVOLUTION 3D
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl font-rajdhani text-muted-foreground mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Experience the future of web design with revolutionary 3D animations, 
          <span className="text-cyber-cyan"> holographic interfaces</span>, and 
          <span className="text-cyber-pink"> neural-powered interactions</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <CyberButton>
            <span>ENTER THE MATRIX</span>
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              ⚡
            </motion.span>
          </CyberButton>
          
          <CyberButton variant="secondary">
            <span>EXPLORE 3D WORLD</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </CyberButton>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          {[
            { number: "99.9%", label: "Performance", icon: "🚀" },
            { number: "∞", label: "Possibilities", icon: "🌌" },
            { number: "100%", label: "Future Ready", icon: "🤖" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card text-center"
              animate={{
                boxShadow: [
                  "var(--shadow-glass)",
                  "var(--shadow-cyber)",
                  "var(--shadow-glass)"
                ]
              }}
              transition={{
                boxShadow: { duration: 3, repeat: Infinity, delay: index * 0.5 },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "var(--shadow-neon-strong)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="text-3xl mb-2"
                animate={{ rotateY: [0, 360] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: index * 0.8,
                  ease: "linear"
                }}
              >
                {stat.icon}
              </motion.div>
              <div className="text-3xl font-cyber font-bold text-cyber-cyan mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-rajdhani">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyber-cyan rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-cyber-cyan rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </div>
      </motion.div>
    </section>
  )
}