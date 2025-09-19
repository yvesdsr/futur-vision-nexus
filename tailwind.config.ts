import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Cyber Color System
        'cyber-blue': "hsl(var(--cyber-blue))",
        'cyber-cyan': "hsl(var(--cyber-cyan))",
        'cyber-purple': "hsl(var(--cyber-purple))",
        'cyber-pink': "hsl(var(--cyber-pink))",
        'cyber-green': "hsl(var(--cyber-green))",
        'cyber-orange': "hsl(var(--cyber-orange))",
        
        // Glass System
        glass: "hsl(var(--glass))",
        'glass-border': "hsl(var(--glass-border))",
        'glass-shadow': "hsl(var(--glass-shadow))",
        
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          glow: "hsl(var(--secondary-glow))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          glow: "hsl(var(--accent-glow))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          border: "hsl(var(--card-border))",
        },
      },
      
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
      },
      
      backgroundImage: {
        'gradient-cyber': 'var(--gradient-cyber)',
        'gradient-aurora': 'var(--gradient-aurora)',
        'gradient-glass': 'var(--gradient-glass)',
        'gradient-text': 'var(--gradient-text)',
      },
      
      boxShadow: {
        'cyber': 'var(--shadow-cyber)',
        'purple': 'var(--shadow-purple)',
        'pink': 'var(--shadow-pink)',
        'glass': 'var(--shadow-glass)',
        'neon': '0 0 20px hsl(var(--primary) / 0.5), 0 0 40px hsl(var(--primary) / 0.3)',
        'neon-strong': '0 0 30px hsl(var(--primary) / 0.8), 0 0 60px hsl(var(--primary) / 0.6)',
      },
      
      backdropBlur: {
        'xs': '2px',
      },
      
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      
      keyframes: {
        // Existing animations
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        
        // Revolutionary 3D Animations
        "cyber-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 5px hsl(var(--primary)), 0 0 20px hsl(var(--primary) / 0.8)",
          },
          "50%": {
            boxShadow: "0 0 10px hsl(var(--accent)), 0 0 40px hsl(var(--accent) / 0.8)",
          },
        },
        
        "text-glitch": {
          "0%": { textShadow: "0.05em 0 0 hsl(var(--cyber-pink)), -0.05em -0.025em 0 hsl(var(--cyber-cyan))" },
          "16%": { textShadow: "-0.05em -0.025em 0 hsl(var(--cyber-pink)), 0.025em 0.025em 0 hsl(var(--cyber-cyan))" },
          "50%": { textShadow: "0.025em 0.05em 0 hsl(var(--cyber-pink)), 0.05em 0 0 hsl(var(--cyber-cyan))" },
          "100%": { textShadow: "-0.025em 0 0 hsl(var(--cyber-pink)), -0.025em -0.025em 0 hsl(var(--cyber-cyan))" },
        },
        
        "hologram": {
          "0%, 100%": { opacity: "1", transform: "rotateX(0deg)" },
          "50%": { opacity: "0.7", transform: "rotateX(180deg)" },
        },
        
        "matrix-rain": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "10%, 90%": { opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
        
        "float-3d": {
          "0%, 100%": { transform: "translateY(0px) rotateX(0deg)" },
          "50%": { transform: "translateY(-20px) rotateX(180deg)" },
        },
        
        "rotate-3d": {
          "0%": { transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg)" },
          "33%": { transform: "rotateX(360deg) rotateY(120deg) rotateZ(90deg)" },
          "66%": { transform: "rotateX(180deg) rotateY(240deg) rotateZ(180deg)" },
          "100%": { transform: "rotateX(360deg) rotateY(360deg) rotateZ(360deg)" },
        },
        
        "grid-move": {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(50px, 50px)" },
        },
        
        "neon-flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
          "75%": { opacity: "1" },
          "85%": { opacity: "0.9" },
        },
      },
      
      animation: {
        // Basic animations
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        
        // Revolutionary cyber animations
        "cyber-pulse": "cyber-pulse 2s ease-in-out infinite",
        "text-glitch": "text-glitch 0.5s infinite",
        "hologram": "hologram 3s ease-in-out infinite",
        "matrix-rain": "matrix-rain 3s linear infinite",
        "float-3d": "float-3d 6s ease-in-out infinite",
        "rotate-3d": "rotate-3d 20s linear infinite",
        "grid-move": "grid-move 20s linear infinite",
        "neon-flicker": "neon-flicker 1.5s ease-in-out infinite",
        
        // Combined effects
        "cyber-hover": "cyber-pulse 2s ease-in-out infinite, float-3d 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
