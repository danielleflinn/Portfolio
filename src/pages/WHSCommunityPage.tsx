import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CaseStudySummary } from '../components/CaseStudySummary';
import { CaseStudySection } from '../components/CaseStudySection';

export function WHSCommunityPage() {
  return <div className="w-full min-h-screen bg-white">
      <Navbar />
      <main className="w-full" style={{ paddingTop: '60px' }}>
        <CaseStudySummary title="Creating a social wellbeing solution" 
        description="Improving user engagement and competitive positioning by launching a 0 to 1 social wellness product that expanded business offerings." 
        background="WebMD Health Services had a digital wellbeing product that focused on using gamification and a reward system to drive behavior change. While the product had many strengths when mapped to the Octalysis Gamification motivators, it lacked a social influence and relatedness motivator that many competitors had, leading to lost sales deals." 
        timeline="6 months" role="Product Designer" methods={['UI/UX Design', 'Discovery research', 'User surveys', 'User interviews', 'Gamification map', 'Wireframing', 'Usability testing', 'Sketch']} impact="Launched a 0 to 1 social wellness product that expanded business offerings" image="/Portfolio/community-cover.png" />
        <CaseStudySection header="Full Case Study Coming Soon" columns={1} backgroundColor="#FFF0E8" id="coming-soon">
          <div className="text-center py-12">
          </div>
        </CaseStudySection>
      </main>
      <Footer />
    </div>;
}

