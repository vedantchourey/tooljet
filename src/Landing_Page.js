import React from 'react'
import Faq from './components/Faq';
import CTA from './components/CTA';
import Features from './components/Features';
import Hero from './components/Hero';
import Quote from './components/Quote';
import Social from './components/Social';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function Landing_Page() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Social/>
      <Quote/>
      <Features/>
      <Faq/>
      <CTA/>
      <Footer/>
    </div>
  )
}
