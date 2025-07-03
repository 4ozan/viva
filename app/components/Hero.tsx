"use client"

import { motion } from "framer-motion"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useToast } from "../../hooks/use-toast"

import Image from "next/image"

interface HeroProps {
  signupCount: number
}

export function Hero({ signupCount }: HeroProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.trim() }),
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: "Welcome to the waitlist! 🎉",
          description: "You'll be notified when we launch.",
        })
        setEmail("")
      } else {
        toast({
          title: "Oops!",
          description: data.error || "Something went wrong. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Network error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-[calc(100vh-4.5rem)] supports-[height:100dvh]:min-h-[calc(100dvh-4.5rem)] flex flex-col justify-between items-center text-center px-4 overflow-hidden">
      <Image
        src="/bg.png"
        alt="Background"
        fill
        className="absolute inset-0 -z-10 object-cover w-full h-full"
        priority
      />
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