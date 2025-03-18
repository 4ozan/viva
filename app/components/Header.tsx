"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <header className="fixed w-full top-0 z-50">
      {/* Background div with subtle transparency */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] backdrop-blur-sm" />
      
      {/* Header content */}
      <div className="relative z-10 container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/vivap.png" alt="Vivap Logo" width={65} height={65} />
            </Link>
            <span className="ml-2 text-xl font-bold text-white"></span>
          </div>
          
          <div className="hidden md:flex items-center">
            <nav className="flex space-x-6 mr-6">
              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/how-we-think">How We Think</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/contact">Contact Us</NavLink>
            </nav>
            
            <a 
              href="https://appt.link/meet-with-viiva-tech-OwUwCKG2" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 bg-black/40 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-black/60 transition-all duration-300 text-sm font-medium"
            >
              Book Appointment
            </a>
          </div>
          
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <NavLink href="/about" mobile>About Us</NavLink>
            <NavLink href="/how-we-think" mobile>How We Think</NavLink>
            <NavLink href="/services" mobile>Services</NavLink>
            <NavLink href="/contact" mobile>Contact Us</NavLink>
            <a 
              href="https://appt.link/meet-with-viiva-tech-OwUwCKG2" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block py-2 mt-2 text-white hover:text-gray-200 transition duration-300"
            >
              Book Appointment
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}

// Update the NavLink component to use white text
const NavLink: React.FC<{ href: string; children: React.ReactNode; mobile?: boolean }> = ({
  href,
  children,
  mobile,
}) => (
  <Link
    href={href}
    className={`text-white hover:text-gray-200 transition duration-300 ${mobile ? "block py-2" : ""}`}
  >
    {children}
  </Link>
)

export default Header

