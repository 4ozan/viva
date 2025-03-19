'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

interface Card3DProps {
  children: React.ReactNode
  className?: string
  glareColor?: string
  depth?: number
  scale?: boolean
}

export default function Card3D({
  children, 
  className = "",
  glareColor = "rgba(255, 255, 255, 0.4)",
  depth = 10,
  scale = true
}: Card3DProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    
    // Calculate rotation based on mouse position
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 7.5
    const rotateX = ((centerY - e.clientY) / (rect.height / 2)) * 7.5
    
    // Update rotation
    setRotate({ x: rotateX, y: rotateY })
    
    // Calculate glare position
    const glareX = (e.clientX - rect.left) / rect.width * 100
    const glareY = (e.clientY - rect.top) / rect.height * 100
    setGlarePosition({ x: glareX, y: glareY })
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform",
        transformPerspective: "1000px",
      }}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
        scale: scale && rotate.x !== 0 ? 1.05 : 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <div 
        className="absolute inset-0 rounded-2xl" 
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, ${glareColor} 0%, transparent 70%)`,
          opacity: Math.abs(rotate.x) / 20 + Math.abs(rotate.y) / 20,
          pointerEvents: "none"
        }}
      />
      
      {/* Main content */}
      <div className="relative w-full h-full" style={{ transform: "translateZ(0px)" }}>
        {children}
      </div>
      
      {/* Shadow effect */}
      <div
        className="absolute -inset-[10px] rounded-2xl bg-black/5 opacity-0 transition-opacity"
        style={{ 
          transform: `translateZ(-${depth}px)`, 
          opacity: (Math.abs(rotate.x) + Math.abs(rotate.y)) / 20
        }}
      />
    </motion.div>
  )
}
