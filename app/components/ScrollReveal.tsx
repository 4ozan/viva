'use client'

import React, { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  once?: boolean
  className?: string
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  once = true,
  className = "",
}: ScrollRevealProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px 0px" })

  // Set initial animation values based on direction
  const getInitialValue = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 50 }
      case "down":
        return { opacity: 0, y: -50 }
      case "left":
        return { opacity: 0, x: 50 }
      case "right":
        return { opacity: 0, x: -50 }
      case "none":
        return { opacity: 0 }
      default:
        return { opacity: 0, y: 50 }
    }
  }

  // Set animation values when in view
  const getAnimateValue = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 }
      case "left":
      case "right":
        return { opacity: 1, x: 0 }
      case "none":
        return { opacity: 1 }
      default:
        return { opacity: 1, y: 0 }
    }
  }

  useEffect(() => {
    if (isInView) {
      controls.start(getAnimateValue())
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial={getInitialValue()}
      animate={controls}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        duration: duration,
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
