import React from 'react';
import { RecipeCard } from './RecipeCard';
import { BookOpenIcon } from 'lucide-react';
export function CaseStudies() {
  const caseStudies = [{
    title: 'Financial App Redesign',
    description: 'A complete overhaul of a banking app with a focus on simplifying complex financial data.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '3 months',
    team: '4 people',
    tools: ['Figma', 'User Interviews', 'Usability Testing', 'Prototyping']
  }, {
    title: 'Modernizing the Bitwarden Extension',
    description: 'Improving user satisfaction and adoption iteratively by increasing usability of Bitwarden save and fill by delivering the #1 community requested feature.',
    image: '../images/Extension-cover.png',
    duration: '10 months',
    team: '2 people',
    tools: ['UI/UX design', 'Heuristic evaluation', 'Wireframing', 'Prototyping', 'Usability testing', 'Stakeholder management']
  }, {
    title: 'Healthcare Portal',
    description: 'Creating an accessible patient portal for managing appointments and medical records.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '4 months',
    team: '5 people',
    tools: ['Adobe XD', 'Accessibility Testing', 'Journey Mapping', 'User Research']
  }, {
    title: 'Travel App',
    description: 'A mobile app for travelers to discover local experiences and hidden gems.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '2.5 months',
    team: '3 people',
    tools: ['Figma', 'User Personas', 'Wireframing', 'Prototyping']
  }, {
    title: 'Productivity Dashboard',
    description: 'Redesigning a task management platform for remote teams with enhanced collaboration features.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '3 months',
    team: '4 people',
    tools: ['Sketch', 'User Interviews', 'Heuristic Evaluation', 'Information Architecture']
  }, {
    title: 'Fitness Tracking Experience',
    description: 'A wearable app interface focused on motivating users through personalized fitness journeys.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '2 months',
    team: '3 people',
    tools: ['Adobe XD', 'Motion Design', 'Behavioral Analysis', 'User Testing']
  }];
  return <section id="recipes" className="w-full py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <BookOpenIcon size={32} className="text-[#FF6B35]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            My Recipe Book
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real challenges, scaleable solutions, and measurable outcomes demonstrating my impact from cooking with start ups and established companies. 
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {caseStudies.map((study, index) => <RecipeCard key={index} title={study.title} description={study.description} image={study.image} duration={study.duration} team={study.team} tools={study.tools} index={index} />)}
        </div>
      </div>
    </section>;
}