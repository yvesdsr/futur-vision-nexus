import { motion } from 'framer-motion'
import { useState } from 'react'

export function CyberNavigation() {
  const [isHovered, setIsHovered] = useState<string | null>(null)

  const navItems = [
    { label: "HOME", id: "home", icon: "🏠" },
    { label: "3D WORLD", id: "world", icon: "🌐" },
    { label: "NEURAL NET", id: "ai", icon: "🧠" },
    { label: "MATRIX", id: "matrix", icon: "💫" },
    { label: "CONTACT", id: "contact", icon: "📡" }
  ]

  return (
    <motion.nav
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div 
        className="glass-card px-2 py-2 flex items-center gap-2"
        animate={{
          boxShadow: [
            "var(--shadow-glass)",
            "var(--shadow-cyber)",
            "var(--shadow-glass)"
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {navItems.map((item, index) => (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            className="relative px-4 py-2 font-cyber text-sm font-bold text-cyber-cyan hover:text-primary transition-colors duration-300"
            onMouseEnter={() => setIsHovered(item.id)}
            onMouseLeave={() => setIsHovered(null)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-primary/20 rounded-lg"
              initial={false}
              animate={{
                opacity: isHovered === item.id ? 1 : 0,
                scale: isHovered === item.id ? 1 : 0.8
              }}
              transition={{ duration: 0.2 }}
            />
            
            <span className="relative z-10 flex items-center gap-2">
              <motion.span
                animate={{ rotate: isHovered === item.id ? [0, 360] : 0 }}
                transition={{ duration: 0.5 }}
              >
                {item.icon}
              </motion.span>
              <span className="hidden sm:inline">{item.label}</span>
            </span>
            
            {/* Hover glow effect */}
            {isHovered === item.id && (
              <motion.div
                className="absolute inset-0 bg-primary/30 rounded-lg blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.a>
        ))}
        
        {/* Navigation indicator */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-cyber"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.nav>
  )
}