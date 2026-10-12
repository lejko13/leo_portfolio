import React from 'react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Stats from '../components/landing/Stats';
import Services from '../components/landing/Services';
import Projects from '../components/landing/Projects';
import Team from '../components/landing/Team';
import CTASection from '../components/landing/CTASection';
import Footer from '../components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-body overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Projects />
      {/* <Team /> */}
      <CTASection />
      <Footer />
    </div>
  );
}
