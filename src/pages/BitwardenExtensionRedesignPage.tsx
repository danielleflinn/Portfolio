import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CaseStudySummary } from '../components/CaseStudySummary';
export function BitwardenExtensionRedesignPage() {
  return <div className="w-full min-h-screen bg-[#FFFAF5]">
      <Navbar />
      <main className="w-full">
        <CaseStudySummary title="Modernizing the Bitwarden Extension" description="Improving user satisfaction and adoption iteratively by increasing usability of Bitwarden save and fill by delivering the #1 community requested feature." background="The Bitwarden password manager extension had complex interactions and outdated UI creating a reputation that Bitwarden was 'too technical'. This negatively impacted product adoption, retention and overall user satisfaction––ultimately making it difficult to sell Bitwarden." timeline="10 months" role="Senior Product Designer" methods={['UI/UX design', 'Heuristic evaluation', 'Wireframing', 'Prototyping', 'Usability testing', 'Stakeholder management']} impact="Modernized the extension interface, resulting in improved user experience and increased adoption" image="/extension-cover.png" />
      </main>
      <Footer />
    </div>;
}