'use client'

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';
import ScrollReveal from '../components/ScrollReveal';

const Card3D = dynamic(() => import('../components/3d/Card3D'), { ssr: false });

export default function Services() {
  return (
   <>
     <Header />
      <main className="relative min-h-screen w-full bg-green-300">
        {/* Background gradients from Hero.tsx */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
        
        <div className="relative z-10 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">Our Services</h1>
                <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">We offer comprehensive solutions designed to help your business reach its full potential.</p>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <ScrollReveal direction="left" delay={0.1}>
                <Card3D className="h-full">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg transition-all duration-300 border border-white/20 relative overflow-hidden h-full">
                    <div className="absolute w-20 h-20 -right-10 -top-10 bg-indigo-500/20 rounded-full"></div>
                    <div className="h-16 w-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Strategy & Consulting</h3>
                    <p className="text-white/70 leading-relaxed mb-6">We help you develop comprehensive strategies tailored to your business goals with data-driven insights.</p>
                    <a href="#" className="text-white font-medium hover:text-white/80 inline-flex items-center group">
                      Learn more 
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </Card3D>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.3}>
                <Card3D className="h-full">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg transition-all duration-300 border border-white/20 relative overflow-hidden h-full">
                    <div className="absolute w-20 h-20 -right-10 -top-10 bg-black/20 rounded-full"></div>
                    <div className="h-16 w-16 bg-black/30 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Development</h3>
                    <p className="text-white/70 leading-relaxed mb-6">Our developers create robust and scalable solutions using the latest technologies and best practices.</p>
                    <a href="#" className="text-white font-medium hover:text-white/80 inline-flex items-center group">
                      Learn more 
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </Card3D>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={0.5}>
                <Card3D className="h-full">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg transition-all duration-300 border border-white/20 relative overflow-hidden h-full">
                    <div className="absolute w-20 h-20 -right-10 -top-10 bg-green-400/20 rounded-full"></div>
                    <div className="h-16 w-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Marketing</h3>
                    <p className="text-white/70 leading-relaxed mb-6">We implement effective marketing strategies to boost your brand visibility and drive meaningful engagement.</p>
                    <a href="#" className="text-white font-medium hover:text-white/80 inline-flex items-center group">
                      Learn more 
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </Card3D>
              </ScrollReveal>
            </div>
            
            <ScrollReveal direction="up" delay={0.7}>
              <div className="mt-24 text-center">
                <a href="/contact" className="px-8 py-3 bg-black/40 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-black/60 transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center border border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  Get Started Today
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
      </main>
      <Footer />
   </>
  );
}
