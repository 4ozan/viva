import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import Footer from './components/Footer';



export default function Home() {
  return (
   <>
     <Header />
      <main>
        <Hero signupCount={0} />
      </main>
      <Footer />
   
   </>
  
  );
}
