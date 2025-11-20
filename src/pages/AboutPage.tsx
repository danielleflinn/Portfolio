import { Navbar } from '../components/Navbar';
import { About } from '../components/About';
import { OutsideWork } from '../components/OutsideWork';
import { Skills } from '../components/Skills';
import { Education } from '../components/Education';
import { DesignPhilosophy } from '../components/DesignPhilosophy';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
export function AboutPage() {
  return <div className="w-full min-h-screen bg-[#FFFAF5]">
      <Navbar />
      <main className="w-full">
        <About />
        <OutsideWork />
        <DesignPhilosophy />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>;
}