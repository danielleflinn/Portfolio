import React from 'react';
import { RecipeCard } from './RecipeCard';
import { BookOpenIcon } from 'lucide-react';
export function CaseStudies() {
  const caseStudies = [{
    title: 'Elevating the Bitwarden Autofill Experience',
    description: 'Improving user satisfaction and adoption iteratively by increasing usability of Bitwarden save and fill by delivering the #1 community requested feature.',
    image: "/home/inline-menu-cover.png",
    duration: '6 months',
    team: '1 person',
    tools: ['UI/UX Design', 'Iterative delivery', 'Competitive analysis', 'Usability Testing', 'Stakeholder management']
  }, {
    title: 'Modernizing the Bitwarden Extension',
    description: 'Improving user satisfaction and adoption iteratively by increasing usability of Bitwarden save and fill by delivering the #1 community requested feature.',
    image: "/home/extension-cover.png",
    duration: '10 months',
    team: '2 people',
    tools: ['UI/UX design', 'Heuristic evaluation', 'Wireframing', 'Prototyping', 'Usability testing', 'Stakeholder management']
  }, {
    title: 'Unifying the Bitwarden Design Language',
    description: 'Improving user satisfaction and internal design and development experience through establishing an atomic Design System and Component Library.',
    image: "/home/design-system-cover.png",
    duration: '3 years',
    team: '3 people',
    tools: ['Design System', 'Component library', 'Storybook', 'Planning workshop', 'Visual design', 'Interaction design', 'Team processes design']
  }];
  return <section id="recipes" className="w-full py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <BookOpenIcon size={32} className="text-[#F45F2A]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            My Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real challenges, scaleable solutions, and measurable outcomes
            demonstrating my impact from serving start ups and established
            companies.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {caseStudies.map((study, index) => <RecipeCard key={index} title={study.title} description={study.description} image={study.image} duration={study.duration} team={study.team} tools={study.tools} index={index} />)}
        </div>
      </div>
    </section>;
}