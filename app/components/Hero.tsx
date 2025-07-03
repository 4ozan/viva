"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-4.5rem)] supports-[height:100dvh]:min-h-[calc(100dvh-4.5rem)] flex flex-col justify-between items-center text-center px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto w-full flex-1 flex flex-col justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-full flex flex-col items-center justify-center"
        >
          <h1 className="font-bold tracking-tighter text-4xl md:text-6xl lg:text-7xl text-center mb-4 md:mb-6 text-white">Build Startups Faster</h1>
          <div className="w-full flex justify-center">
            <span className="text-lg md:text-2xl font-medium text-white bg-black/40 rounded-lg px-4 py-2 shadow-md">
              Launch. Grow. Succeed.
            </span>
          </div>
        </motion.div>

        <motion.p
          className="mt-10 text-base sm:text-xl text-white font-light tracking-wide max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          The fastest way to launch, grow, and scale your startup. Tools, resources, and support for founders who want to move fast.
        </motion.p>
      </motion.div>
    </div>
  )
}