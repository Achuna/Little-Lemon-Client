import React from 'react'
import Hero from './Hero'
import HighlightsSection from './HighlightsSection';
import TestimonialsSection from './TestimonialsSection';
import AboutSection from './AboutSection';


export default function Main() {
  return (
    <main>
        <Hero/>
        <HighlightsSection />
        <TestimonialsSection />
        <AboutSection />
    </main>
  )
}
