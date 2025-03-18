import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
   <>
     <Header />
      <main className="relative min-h-screen w-full bg-green-300">
        {/* Background gradients from Hero.tsx */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
        
        <div className="container relative z-10 mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h1 className="text-5xl font-extrabold mb-10 text-white tracking-tight">About Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl mb-6 text-white/80 leading-relaxed">
                We are a dedicated team focused on delivering exceptional solutions to our clients.
                Our mission is to help businesses grow and succeed in the digital landscape.
              </p>
              <p className="text-xl mb-6 text-white/80 leading-relaxed">
                With years of experience in the industry, we have developed expertise in creating
                innovative strategies that drive results.
              </p>
              <div className="inline-block bg-black hover:bg-gray-900 text-white font-medium transition-all duration-300 rounded-lg px-6 py-3 mt-4 transform hover:translate-y-[-2px] hover:shadow-lg">
                Learn More About Our Process
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="/about-image.jpg" 
                alt="Our Team" 
                className="relative rounded-2xl shadow-xl w-full object-cover h-[400px]"
              />
            </div>
          </div>
          
          <div className="mt-24">
            <h2 className="text-4xl font-bold mb-12 text-white text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] border border-white/20">
                <div className="w-16 h-16 bg-indigo-500/20 rounded-full mb-6 flex items-center justify-center">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Innovation</h3>
                <p className="text-white/70 leading-relaxed">We constantly push boundaries to find creative solutions that exceed expectations.</p>
              </div>
              
              {/* Repeat similar pattern for other value cards */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] border border-white/20">
                <div className="w-16 h-16 bg-black rounded-full mb-6 flex items-center justify-center">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Integrity</h3>
                <p className="text-white/70 leading-relaxed">We maintain the highest ethical standards in all our operations and client relationships.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] border border-white/20">
                <div className="w-16 h-16 bg-green-500/30 rounded-full mb-6 flex items-center justify-center">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Excellence</h3>
                <p className="text-white/70 leading-relaxed">We strive for excellence in everything we do, delivering quality that stands out.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
      </main>
      <Footer />
   </>
  );
}
