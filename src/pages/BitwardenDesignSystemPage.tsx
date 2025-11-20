import React, { Component } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CaseStudySummary } from '../components/CaseStudySummary';
export function BitwardenDesignSystemPage() {
  return <div className="w-full min-h-screen bg-[#FFFAF5]">
      <Navbar />
      <main className="w-full">
        <CaseStudySummary title="Unifying the Bitwarden Design Language" 
        description="Improving user satisfaction and internal design and development experience through establishing an atomic Design System and Component Library." 
        background="Bitwarden was using multiple UI frameworks to power their web based interfaces. Users faced an inconsistent–and often outdated–user experience depending on where they accessed Bitwarden. Internally, processes were bloated and slow as each framework had to be considered by design and engineering when a UI change was made." 
        timeline="multi-year" role="Design System Lead" methods={['Design System', 'Component library', 'Storybook', 'Planning workshop', 'Visual design', 'Interaction design', 'Team processes design', 'Figma']} impact="Established a comprehensive design system that improved consistency across products and accelerated development" image="/design-system-cover.png" />
      </main>
      <Footer />
    </div>;
}