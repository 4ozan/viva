
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ceo from './components/Ceo'
import Growth from './components/Growth'
import Footer from './components/Footer';
import DemoSection from './components/DemoSection';
import Featured from '@/app/components/Featured'


export default function Home() {
  return (
   <>
     <Header />
      <main>
        <Hero />
        <Growth/>
        <DemoSection />
        <Featured/>
        <Ceo />
      </main>
      <Footer />
   
   </>
  
  );
}
