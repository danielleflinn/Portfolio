import { RecipeCard } from './RecipeCard';
import { BookOpenIcon } from 'lucide-react';
export function CaseStudies() {
  const caseStudies = [{
    title: 'Elevating the Bitwarden Autofill Experience',
    description: 'Improving user satisfaction and adoption iteratively by increasing usability of Bitwarden autofill and save through delivering the #1 community requested feature.',
    image: "/Portfolio/inline-menu-cover.png",
    duration: '6 months',
    team: '1 person',
    tools: ['UI/UX Design', 'Iterative delivery', 'Competitive analysis', 'Usability Testing', 'Stakeholder management', 'Figma']
  }, {
    title: 'Modernizing the Bitwarden Extension',
    description: 'Improving user satisfaction and adoption by modernizing the Bitwarden extension interface and making password management more approachable.',
    image: "/Portfolio/extension-cover.png",
    duration: '10 months',
    team: '2 people',
    tools: ['UI/UX design', 'Heuristic evaluation', 'Wireframing', 'Prototyping', 'Usability testing', 'Stakeholder management', 'Figma']
  }, {
    title: 'Unifying the Bitwarden Design Language',
    description: 'Improving user satisfaction and internal design and development experience through establishing an atomic Design System and Component Library.',
    image: "/Portfolio/design-system-cover.png",
    duration: 'multi-year',
    team: '3 people',
    tools: ['Design System', 'Component library', 'Storybook', 'Planning workshop', 'Visual design', 'Interaction design', 'Team processes design', 'Figma']
  }, {
    title: 'Creating a social wellbeing solution',
    description: 'Improving user engagement and competitive positioning by launching a 0 to 1 social wellness product and expanding business offerings.',
    image: "/Portfolio/community-cover.png",
    duration: '6 months',
    team: '1 person',
    tools: ['UI/UX Design', 'Discovery research', 'User surveys', 'User interviews', 'Gamification map', 'Wireframing', 'Usability testing', 'Sketch']
  }];
  return <section id="recipes" className="w-full py-16 px-6 md:px-12 bg-white">
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <BookOpenIcon size={32} className="text-[#F4632F]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            My Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real challenges, scalable solutions, and measurable outcomes
            demonstrating my impact from serving start ups and established
            companies.
          </p>
        </div>
        <div className="flex flex-col gap-6 max-w-5xl">
          {caseStudies.map((study, index) => <RecipeCard key={index} title={study.title} description={study.description} image={study.image} duration={study.duration} team={study.team} tools={study.tools} index={index} />)}
        </div>
      </div>
    </section>;
}