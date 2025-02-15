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
            <Image src="/vivap.png" alt="Vivap Logo" width={65} height={65} />
            <span className="ml-2 text-xl font-bold text-white"></span>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <NavLink href="#how-we-think">How we think</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#contact-us">Contact Us</NavLink>
          </nav>
          
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
            <NavLink href="#how-we-think" mobile>How we think</NavLink>
            <NavLink href="#services" mobile>Services</NavLink>
            <NavLink href="#contact-us" mobile>Contact Us</NavLink>
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

