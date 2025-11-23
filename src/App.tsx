import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { CaseStudies } from './components/CaseStudies';
import { DesignPhilosophy } from './components/DesignPhilosophy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-[#FFFAF5]">
      <Navbar />
      <main className="w-full">
        <Hero />
        <CaseStudies />
        <DesignPhilosophy />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>;
}