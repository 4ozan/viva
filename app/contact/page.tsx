import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
   <>
     <Header />
      <main className="relative min-h-screen w-full bg-green-300">
        {/* Background gradients from Hero.tsx */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
        
        <div className="container relative z-10 mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">Contact Us</h1>
          <p className="text-xl text-white/60 mb-12 max-w-3xl leading-relaxed">We're here to help with any questions you might have. Reach out and let's start a conversation.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
              <h2 className="text-2xl font-bold mb-6 text-white">Get in Touch</h2>
              <p className="mb-8 text-white/70">We'd love to hear from you. Please fill out the form or contact us using the information below.</p>
              
              <div className="mb-8 flex items-start">
                <div className="flex-shrink-0 bg-white/10 backdrop-blur-sm p-3 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-white">Address</h3>
                  <p className="text-white/70">Accra, Ghana</p>
                </div>
              </div>
              
              <div className="mb-8 flex items-start">
                <div className="flex-shrink-0 bg-black/40 p-3 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-white">Email</h3>
                  <p className="text-white hover:text-white/80 transition-colors duration-300">info@viiva.tech</p>
                </div>
              </div>
              
              <div className="mb-8 flex items-start">
                <div className="flex-shrink-0 bg-white/10 backdrop-blur-sm p-3 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-white">Phone</h3>
                  <p className="text-white/70">+233 53 268 1140</p>
                </div>
              </div>
              
              <div className="mt-12 pt-6 border-t border-white/10">
                <h3 className="font-bold text-lg mb-4 text-white">Want to talk directly?</h3>
                <a 
                  href="https://appt.link/meet-with-viiva-tech-OwUwCKG2" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-lg transition-all duration-300 font-medium"
                >
                  <svg className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule an Appointment
                </a>
              </div>
            </div>
            
            <div>
              <form className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                    placeholder="How can we help?"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                    placeholder="Tell us more about your project, needs, and timeline..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-black/40 backdrop-blur-sm hover:bg-black/60 text-white font-medium py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-green-300 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg border border-white/20"
                >
                  Send Message
                </button>
              </form>
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
