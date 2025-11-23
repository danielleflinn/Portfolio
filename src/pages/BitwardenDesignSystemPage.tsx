import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CaseStudySummary } from '../components/CaseStudySummary';
import { CaseStudySection } from '../components/CaseStudySection';
import { PageNav } from '../components/PageNav';
import { Link } from 'react-router-dom';
import { PageStepper } from '../components/PageStepper';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'business-goal', label: 'Business Goal' },
  { id: 'problem', label: 'Problem' },
  { id: 'alignment', label: 'Alignment' },
  { id: 'process', label: 'Process' },
  { id: 'solution', label: 'Design Solution' },
  { id: 'impact', label: 'Impact' },
];

export function BitwardenDesignSystemPage() {
  return <div className="w-full min-h-screen bg-white">
      <Navbar />
      <PageNav sections={sections} />
      <main className="w-full" style={{ paddingTop: '60px' }}>
        <CaseStudySummary title="Unifying the Bitwarden Design Language" 
        description="Improving user satisfaction and internal design and development experience through establishing an atomic Design System and Component Library." 
        background="Bitwarden was using multiple UI frameworks to power their web based interfaces. Users faced an inconsistent–and often outdated–user experience depending on where they accessed Bitwarden." 
        timeline="multi-year" role="Design System Lead" methods={['Design System', 'Component library', 'Storybook', 'Planning workshop', 'Visual design', 'Interaction design', 'Team processes design', 'Figma']} impact="Established a comprehensive design system that improved consistency across products and accelerated development" image="/design-system-cover.png" />
        <CaseStudySection header="Business Goal" 
        subheader="Improve user trust and internal design and development workflows by creating a consistent and recognizable UI for use across the Bitwarden product suite" columns={3} id="business-goal">
          <div className="bg-[#FFF5F0] p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Create a Recognizable UI
            </h3>
            <p className="text-gray-700 max-w-2xl">
              Bitwarden's user experience varied depending on which interface a user accessed. This inconsistency weakened brand perception and contributed to the ongoing reputation that Bitwarden felt "outdated" and "too technical."
            </p>
          </div>
          <div className="bg-[#FFF5F0] p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Expedite Workflows
            </h3>
            <p className="text-gray-700 max-w-2xl">
              Design and engineering teams were burdened by maintaining multiple UI frameworks, repeatedly solving the same design problems, and manually recreating components.
            </p>
          </div>
          <div className="bg-[#FFF5F0] p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Address Internal Demand
            </h3>
            <p className="text-gray-700 max-w-2xl">
              Interviews confirmed a strong appetite for standardization. Designers and engineers wanted a component library, and product leaders wanted a more polished, usable interface.
            </p>
          </div>
          <div className="md:col-span-2 lg:col-span-3">
            <img src="/ds-legacy-ui.png" alt="3 screenshots of the Bitwarden Password Manager interfaces showing flat, gray UI with different design patterns used on each interface." className="w-full h-auto rounded-lg overflow-hidden shadow-md" />
            <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
            Screenshots  from 2021 showing the desktop, web app, and extension interfaces all using a different UI framework
            </p>
          </div>
        </CaseStudySection>
        <CaseStudySection header="Problem" subheader="Multiple UI frameworks created inconsistent experiences, accessibility gaps, and needless complexity for users, designers, and engineers" columns={3} id="problem">
          <div>
            <p className="font-medium text-3xl text-gray-600 mb-2"> 1 </p>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Inconsistent Patterns
            </h3>
            <p className="text-gray-700 max-w-2xl">
              Across interfaces, Bitwarden relied on multiple UI frameworks with little alignment—producing a disjointed experience and undermining user confidence.
            </p>
          </div>
          <div>
            <p className="font-medium text-3xl text-gray-600 mb-2"> 2 </p>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Accessibility & Usability Issues
            </h3>
            <p className="text-gray-700 max-w-2xl">
              Colors did not consistently meet WCAG contrast requirements, form fields lacked error and required indicators, and text-heavy patterns made content difficult to understand.
            </p>
          </div>
          <div>
            <p className="font-medium text-3xl text-gray-600 mb-2"> 3 </p>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Systemic Slowdown
            </h3>
            <p className="text-gray-700 max-w-2xl">
              Every UI change had to be made in multiple frameworks, leading to redundant work and inconsistent implementations, slowing design and development efforts.
            </p>
          </div>
        </CaseStudySection>
        <CaseStudySection header="Driving Alignment" subheader="Securing cross-functional buy-in for a multi-year design system initiative" columns={1} backgroundColor="#FFFAF5" id="alignment">
          <div>
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  Establishing Vision & Strategy
                </h3>
                <p className="text-gray-700 max-w-2xl mb-2">
                  I began by defining the purpose of a design system—how unified tokens, components, and guidelines could modernize Bitwarden's UI and improve efficiency. 
                </p>
                <p className="text-gray-700 max-w-2xl">
                I crafted a clear narrative that tied design system investment directly to business outcomes: improved user trust, faster development, and stronger competitive positioning.
                </p>
              </div>
              <div>
                <img src="/ds-definition.png" alt="Stakeholder education design system definition: A guide for how a product should look, feel and function and the building blocks for how to make the product." className="w-full h-auto rounded-lg overflow-hidden shadow-md max-w-2xl" />
                <p className="text-sm text-gray-600 italic mt-4 text-center px-4 ">
                  Stakeholder education presentation design system definition
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  Stakeholder Education
                </h3>
                <p className="text-gray-700 mb-4 max-w-2xl">
                  To secure support, I created leadership-facing presentations explaining:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>What a design system is</li>
                  <li>How it would improve brand perception</li>
                  <li>Why engineers needed a shared component library</li>
                  <li>How the system could reduce technical debt over time</li>
                </ul>
              </div>
              <div>
                <img src="/ds-diagram.png" alt="Stakeholder education presentation diagram" className="w-full h-auto rounded-lg overflow-hidden shadow-md max-w-2xl" />
                <p className="text-sm text-gray-600 italic mt-4 text-center px-4 ">
                  Stakeholder education presentation and diagrams
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  Demonstrating Value Early
                </h3>
                <p className="text-gray-700 mb-4 max-w-2xl">
                  Recognizing that leadership needed proof, I collaborated with engineers to develop a proof of concept integrating system components into a shared import workflow used across the web app, desktop, and extension.
                </p>
                <p className="text-gray-700 max-w-2xl">
                  The POC demonstrated a 30% increase in team efficiency, which became a pivotal moment in securing long-term investment.
                </p>
              </div>
              <div className="bg-[#FFD6C2] rounded-lg p-8 flex items-center justify-center shadow-md">
                <div className="text-center">
                  <p className="text-6xl font-bold text-gray-800 mb-2">30%</p>
                  <p className="text-lg text-gray-800">increase in team efficiency</p>
                </div>
              </div>
            </div>
          </div>
        </CaseStudySection>
        <CaseStudySection header="Process" subheader="Through close engineering collaboration, we developed a consistent and branded component library and design system" columns={1} id="process">
          <div>
              <div className="mb-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  Building a Cross-Functional Working Group
                </h3>
                <p className="text-gray-700 mb-4 max-w-2xl">
                  I formed a working group with the designers and engineers who partnered with me to gain leadership alignment. Together we established:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 max-w-2xl">
                  <li>A roadmap for initial components</li>
                  <li>Standards for documentation</li>
                  <li>A process for proposing new patterns</li>
                  <li>Engineering guidelines for building the library in code</li>
                </ul>
              </div>
              <div className="mb-8">
                <img src="/ds-planning.png" alt="Cross-functional working group collaboration" className="w-full h-auto rounded-lg overflow-hidden shadow-md" />
                <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                  FigJam board used in a working group planning session
                </p>
              </div>
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  Component Audit
                </h3>
                <p className="text-gray-700 max-w-2xl">
                  I analyzed the web application's UI patterns—Bitwarden's most robust existing framework—and documented style variants, accessibility gaps, outdated icons, and inconsistent form patterns. I consolidated and standardized patterns to serve as the foundation for the new Figma library.
                </p>
              </div>
              <div>
                <img src="/ds-button-audit.png" alt="Button styles showing 6 different styles with outdated icons and hover states." className="w-full h-auto rounded-lg overflow-hidden shadow-md max-w-xl" />
                <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                  Example component audit and analysis for buttons
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  Defining Design Tokens
                </h3>
                <p className="text-gray-700 max-w-2xl">
                  I cataloged all colors, typography styles, spacing, borders, and focus indicators. Colors were adjusted to ensure WCAG AA contrast compliance. These tokens informed both Figma foundations and the Tailwind theme used by engineering.
                </p>
              </div>
              <div>
                <img src="/ds-legacy-tokens.png" alt="Design tokens catalog and documentation" className="w-full h-auto rounded-lg overflow-hidden shadow-md max-w-xl" />
                <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                  Design tokens catalog and documentation
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  Building Components in Figma
                </h3>
                <p className="text-gray-700 max-w-2xl">
                  I created initial components—buttons, form fields, tables—prioritizing elements used across the most screens. Each component included usage guidelines, interaction states, and accessibility notes. Later, I translated documentation into Markdown and contributed directly to Storybook so all teams had a single source of truth.
                </p>
              </div>
              <div>
                <img src="/ds-buttons.png" alt="Button components with all variants and states shown in Figma alongside usage and accessibility guidance. " className="w-full h-auto rounded-lg overflow-hidden shadow-md max-w-xl" />
                <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                  Example of Figma components and documentation for buttons
                </p>
              </div>
            </div>
          </div>
        </CaseStudySection>
        <CaseStudySection header="Design Solution" subheader="An atomic Design System established a unified visual language, introduced modernized tokens and components, and enabled scalable interface development" columns={1} backgroundColor="#FEE8DC" id="solution">
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Migrating the Web App
                </h3>
                <p className="text-gray-700 max-w-2xl mb-6">
                  Between 2022 and 2024, engineering teams migrated the web app page-by-page, using each feature update as an opportunity to replace legacy UI with design system components. The shared import workflow POC accelerated adoption and validated the system's impact.
                </p>
              </div>
              <div className="mb-8">
                <img src="/ds-web-app.png" alt="Web app migration progress and component adoption" className="w-full h-auto rounded-lg overflow-hidden shadow-md" />
                <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                  The web app before and after being migrated to the Bitwarden Design System
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Extension Redesign
                  </h3>
                  <p className="text-gray-700 mb-4 max-w-2xl">
                    Once we had made enough progress with the web app interface it was time to extend the design system’s benefits to the browser extension. 
                  </p>
                  <p className="text-gray-700 mb-4 max-w-2xl">
                    At the same time, the business prioritized a full extension redesign. This empowered the design team to move forward with component UI updates to modernize the interfaces further.
                  </p>
                  <Link to="/bitwarden-extension-redesign" className="font-bold underline text-[#C3471D] hover:text-[#D94F23] transition-colors inline-block">
                    More about the extension redesign
                  </Link>
                </div>
                <div>
                  <img src="/ds-new-tokens.png" alt="Updated design tokens and components for Bitwarden showing more friendly and inviting visuals" className="w-full h-auto rounded-lg overflow-hidden shadow-md" />
                  <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                    The design system's updated design tokens and components
                  </p>
                </div>
              </div>
              
              <div className="mb-8">
                <img src="/ds-extension.png" alt="Extension redesign with upgraded design tokens" className="w-full h-auto rounded-lg overflow-hidden shadow-md" />
                <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                  The Bitwarden extension before and after the migration to the Design System
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  Preparing for Desktop Migration
                </h3>
                <p className="text-gray-700 max-w-2xl mb-6">
                  I set a strategic vision for unifying the desktop and web app using the same component foundation. User interviews validated this approach, and leadership aligned behind the plan for a full desktop migration.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="mb-8">
                  <img src="/ds-desktop.png" alt="Screenshot showing the design system components applied to the desktop application" className="w-full h-auto rounded-lg overflow-hidden shadow-md" />
                  <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                    Applying the design system components to the desktop application to create a unified interface across platforms
                  </p>
                </div>
                <div className="mb-8">
                  <img src="/ds-new-webapp.png" alt="The new UI styles from the extension refresh applied to the web app. The image reflects a similar user interface to that of the view of the desktop interface." className="w-full h-auto rounded-lg overflow-hidden shadow-md" />
                  <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                    The new UI styles applied to the web app. 
                  </p>
              </div>
              </div>
              
        </CaseStudySection>
        <CaseStudySection header="Impact" subheader="The Bitwarden design system improved product consistency, accessibility, and engineering speed—earning strong praise and commitment from internal teams and boosting user trust" columns={2} id="impact">
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Product Improvements
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 max-w-2xl">
              <li>Unified visual language across web, extension, and future desktop</li>
              <li>WCAG-compliant tokens and accessible patterns</li>
              <li>More modern, branded UI with clearer hierarchy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Efficiency Gains
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 max-w-2xl">
              <li>Faster UI development through reusable components</li>
              <li>Reduced design and engineering redundancy</li>
              <li>Centralized documentation in Figma + Storybook</li>
              <li>30% efficiency improvement demonstrated in POC</li>
            </ul>
          </div>
        </CaseStudySection>
        <CaseStudySection header="Internal Feedback" columns={3} backgroundColor="#FFF0E8" id="internal-feedback">
          <div className="bg-[#FFD6C2] p-6 rounded-lg">
            <p className="text-gray-800 italic">
              "<span className="font-semibold">This is one of the best Design Systems I've used.</span> I finally don't have to fight the framework when implementing designs."
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              – Bitwarden Engineer
            </p>
          </div>
          <div className="bg-[#FFD6C2] p-6 rounded-lg">
            <p className="text-gray-800 italic">
              "<span className="font-semibold">The Design Systems has simplified and sped up all development</span> that involves adding UI...using a common framework lets us add features quickly,"
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              – Bitwarden Engineer
            </p>
          </div>
          <div className="bg-[#FFD6C2] p-6 rounded-lg">
            <p className="text-gray-800 italic">
              "<span className="font-semibold">Using the Design System is a huge time saver.</span> I'm so glad I don't have to design features in 3 different UI formats."
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              – Bitwarden Designer
            </p>
          </div>
        </CaseStudySection>
      </main>
      <PageStepper
        previous={{
          title: 'Modernizing the Bitwarden Extension',
          path: '/bitwarden-extension-redesign'
        }}
        next={{
          title: 'Creating a social wellbeing solution',
          path: '/whs-community'
        }}
      />
      <Footer />
    </div>;
}